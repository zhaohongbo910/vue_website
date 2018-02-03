<template>
  <div class="row border-bottom">
      <nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0">
          <div class="navbar-header">
              <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i> </a>
              <form role="search" class="navbar-form-custom" method="post" action="#">
                  <div class="form-group">
                      <input type="text" placeholder="Search for something..." class="form-control" name="top-search" id="top-search">
                  </div>
              </form>
          </div>
               <div  class="login_reg">
                    <router-link to="/login" class="btn btn-primary  login"  role="button">Login</router-link>
                    <router-link to="/register" class="btn btn-primary   register"  role="button">Register</router-link>  
              </div>
      </nav>
  </div>
</template>

<script>


export default {
  name: 'headBar',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .login_reg{
      float: right;
    float: right;
    height: 100%;
    padding-top: 10px;
    padding-right: 15px;
    }
    
  @media (max-width: 768px){
      .login_reg  .register{
        display: none;
      }
    }
</style>
