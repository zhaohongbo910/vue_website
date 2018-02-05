<template>
            <div  class="row">
                <ul class="list-group"   >
                    <li class="list-group-item">{{content}}</li>
                    <li class="list-group-item"   v-for="list in tods" >{{list.text}}</li>
  
                </ul>
        </div>
</template>

<script >
    export default {
        name:'test',
        props: ['tods','content']

    }
</script>