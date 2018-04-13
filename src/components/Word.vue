<template>
  <div class="wordlist-container">
    <div class="wordlist-columns">
      <h2>{{ word }}</h2>
    </div>
    <div class="nav-links">
        <router-link v-bind:to="{ name: 'Home'}">Home</router-link>
        <router-link v-bind:to="{ name: 'WordList'}">Word List</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WordList',
  data () {
    return {
      word: this.$route.params.word
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.wordlist-container{
  margin-top: 60px;

  .wordlist-columns{
    width: 100%;
    display: flex;
    margin: 0 auto;
    text-align: left;
    align-items: center;

    h2{
      flex: 0 0 15%;
      margin-top: 10px;
      text-align: center;
    }

    .wordlist {
      overflow: auto;
      flex: 0 0 85%;

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        height: calc(100vh-84px);
        display: flex;
        flex-wrap: wrap;
        margin-left: -10px;
        margin-top: -10px;

        li {
          text-align:  center;
          background: cadetblue;
          padding: 10px;
          margin: 5px;
          flex: 1 0 auto;
          box-sizing: border-box;
          padding: 10px;
          margin-left: 10px;
          margin-top: 10px;

          a {
            color: white;
            text-decoration: none;
          }
        }
      }
    }
  }
  .nav-links{
    display: flex;
    width: 100%;
    position: fixed;
    bottom: 62px;
    left: 0;
    justify-content: space-between;

    a {
        padding: 20px 50px;
        text-align: center;
        background-color: royalblue;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 48%;
        flex: 0 0 48%;
        margin: 0 20px;
        box-sizing: border-box;
        display: block;
        text-decoration: none;
        color: white;
    }
  }
}
</style>
