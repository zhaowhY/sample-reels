<template>
  <div class="home">
    <img src="../assets/logo.png">
    <v-clork></v-clork>
    <div class="btn" v-track:demo="{arg1: 1}">click me</div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script src='./Home.js'></script>
