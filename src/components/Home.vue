<template>
  <div class="home">
    <div class="input-container">
      <div class="input-group">
        <input type="text" v-on:keydown.enter="getWord" v-model="word" />
        <button
          @click="getWord"
          type="submit">
            Add Word
        </button>
      </div>
      <div class="word-meaning">
        {{ wordMeaning }}
        <div class="word-links" v-if="wordData">
          <router-link v-bind:to="{ name: 'Word', params: { id: word, word: word, data:wordData } }">Read More</router-link>
          <router-link v-bind:to="{ name: 'WordList'}">Word List</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WordService from '@/services/WordService'
export default {
  name: 'Home',
  data () {
    return {
      word: '',
      wordData: '',
      wordMeaning: '',
      wordPart: '',
      wordPronounciation: ''
    }
  },
  methods: {
    async getWord () {
      if (this.word === '') {
        return false
      }
      const response = await WordService.getWord({
        word: this.word
      })

      let responses = response.data.results

      if (responses.length === 0) {
        this.wordMeaning = 'Your word could not be found and was not added.'
        this.wordData = ''
        return false
      }

      this.wordData = responses[0]
      this.wordMeaning = responses[0].senses[0].definition
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home{
  display: flex;
  align-items:center;
  justify-content: center;
  height: calc(100vh);

  .input-container{
      max-width: 500px;
      width:100%;

      .input-group{
        display:flex;
        justify-content: space-between;

        input {
          box-sizing: border-box;
          width: calc(100% - 150px);
          padding: .5rem;
          border: 2px solid royalblue;
          font-size: 1rem;
          border-radius: 0;
          -webkit-appearance: none;
        }

        button{
          width:150px;
          height:50px;
          -webkit-appearance: none;
          background: royalblue;
          color: white;
          text-transform: uppercase;
          border: none;
          font-weight:bold;
          font-size: 12pt;
        }
      }
  }

  .word-meaning {
    margin: 20px 0;
    font-size: 18px;
    font-weight: bold;

    .word-links{
      margin: 30px 0 20px 0;
      font-size: 14px;
      font-weight: regular;

      a {
        border: 1px solid royalblue;
        text-decoration: none;
        padding: 5px 12px 3px 12px;
        margin: 0 10px;
        text-transform: uppercase;

        &:focus {
          color: royalblue;
        }
      }
    }
  }
}
</style>
