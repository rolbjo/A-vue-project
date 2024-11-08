<script>
  import axios from 'axios'

  export default {
    created() {
      this.loading = true

      const apikey = '804a9918ac59320a635fef0bfa096ba3'
      const url = `https://gnews.io/api/v4/top-headlines?category=world&lang=en&country=us&max=10&apikey=${apikey}`

      axios
        .get(url)
        .then((response) => {
          this.articles = response.data.articles
          this.loading = false
        })
        .catch((error) => {
          console.error(error)
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
  <h1>World news</h1>

  <div v-if="loading" class="loading-symbol">
    <img class="loader" src="../../assets/Yin-and-Yang.gif" alt="loading" />
  </div>
  <ol v-if="articles">
    <li :key="article.url" v-for="article in articles">
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
      {{ article.description }}
      <img v-if="article.image" :src="article.image" />
      <p v-if="!article.image">Image not available</p>
      <p>{{ article.publishedAt }}</p>
      <a :href="article.url">{{ article.url }}</a>
      <p v-if="!article.url">No more info</p>
    </li>
  </ol>
</template>

<style>
  li img {
    margin-top: 30px;
    max-width: 100%;
    width: 100%;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
    border-radius: 30px;
  }

  ol {
    display: grid;
    grid-template-columns: 50% 50%;
    min-width: 1180px;
  }

  li {
    list-style-type: none;
  }

  @media (max-width: 1180px) {
    ol {
      display: grid;
      grid-template-columns: 1fr;
      min-width: 0;
    }
    .loading-symbol {
      display: flex;
      justify-content: center;
    }
    .loader {
      width: 100px;
      height: 100px;
    }
  }
</style>
