import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import BookIndex from "./components/BookIndex.vue";
import BookDetails from "./components/BookDetails.vue";

import AuthorIndex from "./components/AuthorIndex.vue";
import AuthorDetails from "./components/AuthorDetails.vue";

import PublisherIndex from "./components/PublisherIndex.vue";
import PublisherDetails from "./components/PublisherDetails.vue";

import BookIndex from "./components/CiudadIndex.vue";
import BookDetails from "./components/CiudadDetails.vue";

import AuthorIndex from "./components/ArquitectoIndex.vue";
import AuthorDetails from "./components/ArquitectoDetails.vue";

import PublisherIndex from "./components/EdificioIndex.vue";
import PublisherDetails from "./components/EdificioDetails.vue";

const routes = [
  { path: "/", component: Home },
	
  // books
  { path: "/book", component: BookIndex },
  { path: "/book/show/:id", 
    component: BookDetails, props: {show:true} },
  { path: "/book/edit/:id", 
    component: BookDetails, props: {edit:true} },
  { path: "/book/create", 
    component: BookDetails, props: {create:true} },
  { path: "/book/delete/:id", 
    component: BookDetails, props: {delete:true} },

  // authors
  { path: "/author", component: AuthorIndex },
  { path: "/author/show/:id", 
    component: AuthorDetails, props: {show:true} },
  { path: "/author/edit/:id", 
    component: AuthorDetails, props: {edit:true} },
  { path: "/author/create", 
    component: AuthorDetails, props: {create:true} },
  { path: "/author/delete/:id", 
    component: AuthorDetails, props: {delete:true} },

  // publisher
  { path: "/publisher", component: PublisherIndex },
  { path: "/publisher/show/:id", 
    component: PublisherDetails, props: {show:true} },
  { path: "/publisher/edit/:id", 
    component: PublisherDetails, props: {edit:true} },
  { path: "/publisher/create", 
    component: PublisherDetails, props: {create:true} },
  { path: "/publisher/delete/:id", 
    component: PublisherDetails, props: {delete:true} },

  // ciudades
  { path: "/ciudad", component: CiudadIndex },
  { path: "/ciudad/show/:id", 
    component: CiudadDetails, props: {show:true} },
  { path: "/ciudad/edit/:id", 
    component: CiudadDetails, props: {edit:true} },
  { path: "/ciudad/create", 
    component: CiudadDetails, props: {create:true} },
  { path: "/ciudad/delete/:id", 
    component: CiudadDetails, props: {delete:true} },

  // arquitectos
  { path: "/arquitecto", component: ArquitectoIndex },
  { path: "/arquitecto/show/:id", 
    component: ArquitectoDetails, props: {show:true} },
  { path: "/arquitecto/edit/:id", 
    component: ArquitectoDetails, props: {edit:true} },
  { path: "/arquitecto/create", 
    component: ArquitectoDetails, props: {create:true} },
  { path: "/arquitecto/delete/:id", 
    component: ArquitectoDetails, props: {delete:true} },

  // edificios
  { path: "/edificio", component: EdificioIndex },
  { path: "/edificio/show/:id", 
    component: EdificioDetails, props: {show:true} },
  { path: "/edificio/edit/:id", 
    component: EdificioDetails, props: {edit:true} },
  { path: "/edificio/create", 
    component: EdificioDetails, props: {create:true} },
  { path: "/edificio/delete/:id", 
    component: EdificioDetails, props: {delete:true} },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;