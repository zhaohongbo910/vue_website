<template>
    <div   class="form_container"> 
                    <form>
                 <div class="form-group">
                    <label for="username">用户名</label>
                    <input type="text" class="form-control" id="username" placeholder="username">
                  </div>

                  <div class="form-group">
                    <label for="email">邮箱</label>
                    <input type="email" class="form-control" id="email" placeholder="Email">
                  </div>

                  <div class="form-group">
                    <label for="password">密码</label>
                    <input type="password" class="form-control" id="password" placeholder="Password">
                  </div>

                  
                   <button type="submit" class="btn btn-default" >Submit</button>

                </form>
   </div>
</template>

<script>
    export default {
        name:'register'
    }
</script>

<style>
     .form_container{
        padding-top: 50px;
     }
</style>