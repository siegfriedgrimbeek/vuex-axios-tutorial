<template>
  <div class="wordlist-container">
    <div class="wordlist-columns">
        <h2>{{ word }} <span v-if="partOfSpeech">[{{ partOfSpeech }}]</span>:</h2>
      <div class="word-info">
        <ul class="words" v-if="senses">
          <li v-for="(sense, index) in senses" :key="index">
            <div class="word-definition">
              <h3>Definition #{{ index + 1}}</h3>
              <blockquote><p>{{ sense.definition }}</p></blockquote>
              <div class="example" v-if="sense.examples">
                <h4>Examples: </h4>
                <ul class="examples">
                  <li v-for="(example, indexEx) in sense.examples" :key="indexEx">
                    {{ example.text }}
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav-links">
        <router-link v-bind:to="{ name: 'Home'}">Home</router-link>
        <router-link v-bind:to="{ name: 'WordList'}">Word List</router-link>
        <a href="#" @click="deleteWord(word)">Delete Word</a>
    </div>
  </div>
</template>

<script>
import WordService from '@/services/WordService'
export default {
  name: 'WordList',
  data () {
    return {
      word: this.$route.params.word,
      wordId: this.$route.params.data.id,
      senses: '',
      partOfSpeech: ''
    }
  },
  mounted () {
    this.getWordDetails(this.wordId)
  },
  computed: {
    words () {
      return this.$store.state.words
    }
  },
  methods: {
    async getWordDetails (params) {
      const response = await WordService.getWordDetails(params)
      let data = response.data.result
      this.partOfSpeech = data.part_of_speech
      this.senses = data.senses
    },
    deleteWord (word) {
      this.$store.commit('deleteWord', word)
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.wordlist-container {
  margin-top: 60px;

  .wordlist-columns {
    width: 100%;
    display: flex;
    margin: 0 auto;
    text-align: left;
    align-items: center;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    h2 {
      flex: 0 0 25%;
      margin-top: 10px;
      text-align: center;
      align-self: flex-start;
    }

    .word-info {
      overflow: auto;
      flex: 0 0 75%;

      .words {
        height: calc(100vh - 200px);
        overflow: auto;
      }

      h4{
        margin-bottom: 10px;
      }
    }

    .examples {
      list-style: circle;
      margin: 0 0 30px 30px;

      li {
        line-height: 30px;
      }
    }
  }

  .nav-links {
    display: flex;
    width: 100%;
    position: fixed;
    bottom: 62px;
    left: 0;
    justify-content: center;

    a {
        padding: 20px 50px;
        text-align: center;
        background-color: royalblue;
        -webkit-box-flex: 0;
        flex: 0 0 31%;
        margin: 0 20px;
        box-sizing: border-box;
        display: block;
        text-decoration: none;
        color: white;
    }
  }
  blockquote {
    background: #f9f9f9;
    border-left: 10px solid #ccc;
    margin: 1.5em 10px;
    padding: 0.5em 10px;
    quotes: "\201C""\201D""\2018""\2019";
    width: fit-content;
  }

  blockquote:before {
    color: #ccc;
    content:'\201C';
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }
  blockquote p {
    display: inline;
  }
}
</style>
