<!-- BookDetails.vue -->
<template>
  <div class="row">
    <div class="eleven column" style="margin-top: 5%">
      <h2>{{ title }}</h2>
      <form>
        <div class="row">
          <div class="six columns">
            <label for="titleInput">Title</label>
            <input class="u-full-width" type="text" v-model="book.title">
          </div>
          <div class="six columns">
            <label for="authorSelect">Author</label>
            <select class="u-full-width" v-model="book.author_id">
              <option v-for="author in authors" :key="author._id" :value="author._id">{{ author.author }}</option>
            </select>
            <input type="hidden" v-model="book.author">
          </div>
        </div>
        <div class="row">
          <div class="six columns">
            <label for="publisherSelect">Publisher</label>
            <select class="u-full-width" v-model="book.publisher_id">
              <option v-for="publisher in publishers" :key="publisher._id" :value="publisher._id">{{ publisher.publisher}}</option>
            </select>
            <input type="hidden" v-model="book.publisher">
          </div>
          <div class="six columns">
            <label for="editionInput">Edition</label>
            <input class="u-full-width" type="text" v-model="book.edition">
          </div>
        </div>
        <div class="row">
          <div class="six columns">
            <label for="copyrightInput">Copyright</label>
            <input class="u-full-width" type="number" v-model="book.copyright">
          </div>
          <div class="six columns">
            <label for="languageInput">Language</label>
            <input class="u-full-width" type="text" v-model="book.language">
          </div>
        </div>
        <div class="row">
          <router-link class="button button-primary" to="/book">Back</router-link>
          <a v-if='edit' class="button button-primary" style="float: right" v-on:click="updateBook(book._id)">Update</a>
          <a v-if='create' class="button button-primary" style="float: right" v-on:click="createBook()">Create</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  name: "Book Details",
  props: ['create', 'edit', 'create'],
  data() {
    return {
      title: "Book Data",
      book: {},
      publishers: [],
      authors: []
    }
  },
  mounted() {
    this.allPublishers()
    this.allAuthors()
    const route = useRoute()
    if (route.params.id != null)
      this.findBook(route.params.id);
    else {
      this.book = {
        '_id': Math.floor(Math.random() * 100000000), 'title': '', 'edition': '',
        'copyright': 0, 'language': '', 'pages': 0, 'author': '', 'author_id': 0,
        'publisher': '', 'publisher_id': 0
      };
    }

  },
  methods: {
    findBook: function (id) {
      fetch(this.url + '/.netlify/functions/bookFind/' + id,
        { headers: { 'Accept': 'application/json' } })
        .then((response) => response.json())
        .then((items) => {
          this.book = items[0];
        })
    },
    allPublishers() {
      fetch(this.url + '/.netlify/functions/publisherFindAll',
        { headers: { 'Accept': 'application/json' } })
        .then((response) => response.json())
        .then((items) => {
          this.publishers = items;
        })
    },
    allAuthors() {
      fetch(this.url + '/.netlify/functions/authorFindAll',
        { headers: { 'Accept': 'application/json' } })
        .then((response) => response.json())
        .then((items) => {
          this.authors = items;
        })
    },
    updateBook: function (id) {
      const selectedAuthor = this.authors.find(author => author._id === this.book.author_id);
      if (selectedAuthor) {
        this.book.author = selectedAuthor.author; // Agrega el nombre del autor al libro
      }
      const selectedPublisher = this.publishers.find(publisher => publisher._id === this.book.publisher_id);
      if (selectedPublisher) {
        this.book.publisher = selectedPublisher.publisher;
      }
      fetch(this.url + '/.netlify/functions/bookUpdate/' + id,
        {
          headers: { 'Content-Type': 'application/json' },
          method: 'PUT',
          body: JSON.stringify(this.book)
        })
        .then((data) => {
          this.$router.push('/book');
        }
        )
    },
    createBook: function () {
      // Obtén el nombre del autor seleccionado
      const selectedAuthor = this.authors.find(author => author._id === this.book.author_id);
      if (selectedAuthor) {
        this.book.author = selectedAuthor.author; 
      }
      const selectedPublisher = this.publishers.find(publisher => publisher._id === this.book.publisher_id);
      if (selectedPublisher) {
        this.book.publisher = selectedPublisher.publisher;
      }

      fetch(this.url + '/.netlify/functions/bookInsert',
        {
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
          body: JSON.stringify(this.book)
        })
        .then((data) => {
          this.$router.push('/book');
        }
        )
    }
  }
};
</script>