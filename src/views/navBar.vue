<template>
  <nav class="navbar-default navbar-static-side" role="navigation">
      <div class="sidebar-collapse">
          <ul class="nav metismenu" id="side-menu">
              <li class="nav-header">
                  <div class="dropdown profile-element">
                          <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                          <span class="clear"> <span class="block m-t-xs"> <strong class="font-bold">David Williams</strong>
                           </span>  </span> </a>
                  </div>
                  <div class="logo-element">
                      IN+
                  </div>
              </li>
              <li class="active">
                  <router-link to="/"><i class="fa fa-th-large"></i> <span class="nav-label">Main Page</span></router-link>
              </li>
              <li  class="active">
                  <router-link to="/article"><i class="fa fa-th-large"></i> <span class="nav-label">Articel Page</span></router-link>
              </li>
          </ul>

      </div>
  </nav>

</template>

<script>
export default {
  name: 'navBar',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
