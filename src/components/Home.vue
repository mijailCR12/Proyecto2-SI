<!-- Home.vue -->
<template>
  <div>
    <h2 style="margin-top: 15px">Edificios Example Site</h2>
      <p>This website offers information on Edificios, Ciudades and Arquitectos.</p>
    <ul>
      <li><router-link to='/ciudad'>Ciudades information</router-link></li>
      <li><router-link to='/edificio'>Edificios information</router-link></li>
      <li><router-link to='/arquitecto'>Arquitectos information</router-link></li>
    </ul>
    <h5>Ejecutar Funciónes almacenadas en RabbitMQ</h5>
    <button id="ejecutarFuncion">Ejecutar Función</button>
  </div>
</template>