<template>
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row">
            <div class="col-lg-12">
              <div class="jumbotron">
                      <h1>{{ massage }}</h1>
                      <p    v-if="seec>0 "><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
                    </div>
            </div>
        </div>
        <div  class="row">
                <ul class="list-group"   >
                  <li class="list-group-item"   v-for="list in todos" >{{list.text}}</li>
                  <li class="list-group-item">{{reversedMessage }}</li>
                   <li class="list-group-item"><router-link  to="/index/list">list</router-link> </li>
                </ul>
        </div>
        <list :parentMessage="parentMessage"></list>
        <div class="row"> 
               <router-view   name="index_child"></router-view>
        </div>
    </div>
</template>


<script>

 import List from "@/components/list"

export default {
  name: 'index',
  data(){
          return {
              massage:"Welcome back",
              seec:2,
              todos: [
                  { text: '学习 JavaScript' },
                  { text: '学习 Vue' },
                  { text: '整个牛项目' }
                ]
          }
  },
  computed:{
        reversedMessage :function(){
            return this.massage
        }
  },
  methods:{
       reverse:function(){
            return  this.massage
       }
  },
  component:{
       List
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
