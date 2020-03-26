<script>
/**
 * Vue CLI project main App file
 *
 * @summary Vue CLI project main App file
 * @author Zeppelin17 <elzeppelin17@gmail.com>
 *
 * Created at     : 2020-03-26 06:30:34 
 * Last modified  : 2020-03-26 06:33:24
 */
</script>
<template>
  <div id="app">
    <b-navbar toggleable="sm" type="dark" variant="dark" sticky=true>
      <b-navbar-brand to="/">Arbitrage Calculator</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/exchanges">Exchanges</b-nav-item>
          <b-nav-item to="/calculator">CryptoCalc</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap');
#app {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #343a40;
  background-color: #eee;
}
h1 {
  font-size: 2.8rem;
}
h2 {
  font-size: 2.3rem;
}
h3 {
  font-size: 1.8rem;
}
#app p {
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
}
.nav-item .router-link-exact-active {
  font-weight: bold;
}

</style>
