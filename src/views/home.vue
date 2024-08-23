<script>
  import axios from 'axios'

  export default {
    created() {
      this.loading = true

      const apikey = '804a9918ac59320a635fef0bfa096ba3'
      const url = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${apikey}`

      axios
        .get(url)
        .then((response) => {
          console.log(response.data)
          this.articles = response.data.articles
          this.loading = false
        })
        .catch((error) => {
          console.error(error)
          this.loading = false
        })
    },
    data() {
      return {
        articles: null,
        message: null,
        loading: false
      }
    }
  }
</script>

<template>
  <h1>Home</h1>

  <div v-if="loading" class="loading-symbol">
    <img class="loader" src="../../assets/Yin and Yang.gif" alt="loading" />
  </div>
  <div v-else>
    <ol v-if="articles">
      <li :key="article.uuid" v-for="article in articles">
        <p>
          <span
            style="
              font-size: 22px;
              font-weight: normal;
              font-family: 'Times New Roman', Times, serif;
            "
          >
            {{ article.title }}</span
          >
        </p>
        <p id="maintext">{{ article.description }}</p>
        <img v-if="article.image" :src="article.image" />
        <p v-if="!article.image">Image not available</p>
        <p>{{ article.publishedAt }}</p>
        <a :href="article.url">{{ article.url }}</a>
        <p v-if="!article.url">No more info</p>
      </li>
    </ol>
  </div>
</template>

<style>
  img {
    margin-top: 30px;
    max-width: 100%;
  }

  ol {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  li {
    list-style-type: none;
    padding: 30px;
    overflow: hidden;
  }

  @media (max-width: 1180px) {
    body {
      padding-right: 40px;
    }
    ol {
      display: grid;
      grid-template-columns: 100%;
    }
    li {
      list-style-type: none;
    }
  }

  .loading-symbol {
    display: flex;
    justify-content: center;
    height: 100vh;
  }
  .loader {
    width: 100px;
    height: 100px;
  }
</style>
