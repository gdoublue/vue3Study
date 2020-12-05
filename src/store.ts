import { reactive ,computed} from "vue";
import {posts} from "@/mockPost";

class Store {
  public state: { currentTag: string ;posts: {[item: string]: any}[]};
  constructor() {
    this.state = reactive({
        currentTag:'',
          posts,
    })

  }
  handleTag(tag){
        this.state.currentTag = tag
    }
    handleLike(post){
        const thePost = this.state.posts.find(p=>{
            return p.id === post.id;
        })

        // @ts-ignore
        thePost.like = !thePost.like
        // @ts-ignore
        thePost.dislike = false
    }
    handleDislike(post){
        const thePost = this.state.posts.find(p=>{
            return p.id === post.id;
        })

        // @ts-ignore
        thePost.dislike = !thePost.dislike
        // @ts-ignore
        thePost.like = false
    }
    setCurrentTag(val){
      this.state.currentTag = val
    }
    get filterPosts(){
      return computed(()=>{
          if(!this.state.currentTag){
              return this.state.posts
          }
          return this.state.posts.filter(post=>{

              return  post.tags.some(item =>{
                  return   item.includes(this.state.currentTag)
              })
          })
      })
    }
}

const store = new Store();
export default store;
