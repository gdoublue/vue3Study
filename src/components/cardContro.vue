<template>
  <div class="main">
    <div
      :class="['iconfont', 'like', 'icon-KeyLikes1', post.like ? 'active' : '']"
      @click="like"
    ></div>
    <div
            @click="dislike"
      :class="[
        'iconfont',
        'like',
        post.dislike ? 'active' : '',
        'icon-Dislikeunlikethumbdown'
      ]"
    ></div>
    <div class="hashTags">
      <p v-for="(tag, index) in post.tags" :key="index" @click="handleTag(tag)">
        #{{ tag }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";
export default defineComponent({
  name: "Control",
  props: ["post"],
  setup(props) {
      const like = ()=>{
          console.log('like'+props.post.id);
          store.handleLike(props.post)
      };
      const dislike = ()=>{
          console.log('like'+props.post.id);
          store.handleDislike(props.post)
      };
    const handleTag = (tag: string) => {
      store.handleTag(tag)
    };
    return {
      handleTag,like,dislike
    };
  }
});
</script>

<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
}
.like {
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  padding: 10px;
  flex: 1;
}
.like.active {
  color: gold;
}
.hashTags {
  height: 100%;
  flex: 10;
  font-size: 14px;
  align-items: center;
  justify-content: center;
}
.hashTags p {
  color: cornflowerblue;
  display: inline-flex;
  line-height: 100%;
  margin: 0;
}
.hashTags p:hover {
  color: darkblue;
}
</style>
