<template>
        <div >
             <div class="page-header">
              <h1>Example page header <small>{{content}}</small></h1>

              <button v-on:click="sendmsg"  >fasong</button>

               <button v-on:click="loadData">get</button>
               <span>{{loadSong}}</span>
            </div>
            <ul class="media-list">
                          <li class="media"   v-for="song  in songlist"   :id="song.id">
                            <div class="media-left">
                              <a href="#">
                                <img class="media-object"  :src="song.portrait"   />
                              </a>
                            </div>
                            <div class="media-body">
                              <h4 class="media-heading">{{song.name}}</h4>
                              <p></p>
                            </div>
                          </li>
                </ul>
        </div>
</template>

<script>
    export default {
        name:'list',
        data(){
            return {
                apple:"iphone",
                songlist:""
            }
        },
        // created(){
        //     this.loadData()
        // },
        computed:{
            loadSong:function(){
               this.loadData()
            }
        },
        props : ['content'],
        methods:{
            loadData(){
                var  _this  = this
                this.$ajax.get(this.HOST+'?kw=小&pi=20&pz=30')
                .then(function(res){
                    console.log(res)
                       _this.songlist = res.data.artists
                       console.log(_this.songlist)
                })
                .catch(function(res){
                     console.log(res)
                })        
            },
            sendmsg(){
                this.$emit('changeCart',this.apple )      
            }
        } 
    }
</script>