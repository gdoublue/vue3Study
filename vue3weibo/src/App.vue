<template>
  <Seach></Seach>
  <div v-for="(post,index) in filterPosts" :key="index">
    <Card>
      <template v-slot:title>{{post.title}}</template>
      <template v-slot:content>{{post.content}}</template>
      <template v-slot:contro>
        <cardContro :post=post></cardContro>
      </template>
      <template v-slot:image> <img :src="`http://lorempixel.com/400/230/${post.tagImg}?${index}`" alt="Pizza" /></template>
    </Card>
  </div>

</template>

<script lang="ts">
import { defineComponent,computed } from 'vue';
import Seach from "@/components/Seach.vue";
import Card from "@/components/Card.vue";
import cardContro from "@/components/cardContro.vue";
import store from "@/store";
export default defineComponent({
  name: 'App',
  components: {
    Card,
    cardContro,
    Seach
  },
  setup(){

    const filterPosts = store.filterPosts
    return {
      filterPosts, store
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
