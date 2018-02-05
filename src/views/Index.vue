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
         <list   :content="massage"  v-on:changeCart="changeCart"></list>
         <chies :tods="todos" :content="massage"></chies>
    </div>
</template>


<script>

 import list from "@/components/list"
 import chies from "@/components/test"

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
       },
       changeCart(massage){
                this.massage = massage
       }
  },
  components:{
       list,
       chies,
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
