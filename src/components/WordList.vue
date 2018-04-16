<template>
  <div class="wordlist-container">
    <div class="wordlist-columns">
      <h2>My Stored Words:</h2>
      <div class="wordlist">
        <ul>
          <li v-for="(word, index) in words" :key="index">
            <router-link v-bind:to="{ name: 'Word', params: { id: word, word: word } }">{{ word }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WordList',
  data () {
    return {
      words: ['test', 'compare', 'exercise', 'judge', 'matters', 'mouse', 'cycle']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.items {
  .item {
    background: #e0ddd5;
    color: #171e42;
    box-sizing: border-box;
    padding: 10px;
  }
}

.wordlist-container{
  margin-top: 60px;

  .wordlist-columns{
    width: 100%;
    display: flex;
    margin: 0 auto;
    text-align: left;
    align-items: center;

    h2{
      flex: 0 0 25%;
      margin-top: 10px;
      text-align: center;
    }

    .wordlist {
      overflow: auto;
      flex: 0 0 75%;

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
          max-width: 250px;

          a {
            color: white;
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>
