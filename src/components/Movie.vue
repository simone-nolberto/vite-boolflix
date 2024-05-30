<script>
import { state } from "../state";

export default {
  name: "Movie",
  data() {
    return {
      state,
      imgLink: "",
      movieFlag: "",
      vote: 0,
      visible: true,
    };
  },
  props: ["film"],
  methods: {
    findFilmLanguage() {
      if (this.film.original_language === "en") {
        this.movieFlag = "https://flagcdn.com/w20/gb.png";
        // console.log(this.movieFlag);
      } else if (this.film.original_language === "ja") {
        this.movieFlag = "https://flagcdn.com/w20/jp.png";
        // console.log(this.movieFlag);
      } else if (this.film.original_language === "zh") {
        this.movieFlag = "https://flagcdn.com/w20/cn.png";
        // console.log(this.movieFlag);
      } else if (this.film.original_language === "ko") {
        this.filmFlag = "https://flagcdn.com/w20/kr.png";
        // console.log(this.serieFlag);
      } else {
        this.movieFlag = `https://flagcdn.com/w20/${this.film.original_language}.png`;
      }
    },

    findFilmImg() {
      this.imgLink = `https://image.tmdb.org/t/p/w342/${this.film.poster_path}`;
    },

    setVote(n) {
      this.vote = n;
    },
  },

  mounted() {
    this.findFilmLanguage();
    this.findFilmImg();
    this.setVote(Math.round(this.film.vote_average / 2));
  },
};
</script>

<template>
  <div class="col">
    <div class="card">
      <div class="card-img">
        <img v-if="this.film.poster_path !== null" :src="this.imgLink" alt="" />
        <img v-else src="../assets/img/sala.jpg" alt="" />
      </div>
      <div class="card-body" v-if="this.state.films.length > 0">
        <h3>Cinema</h3>
        <ul>
          <li>Titolo: {{ film.title }}</li>
          <li>Titolo originale: {{ film.original_title }}</li>
          <!-- <li>Lingua originale: {{ this.movieFlag }}</li> -->
          <li>
            Lingua originale:
            <img :src="this.movieFlag" width="20" :alt="this.film.original_language" />
          </li>
          <li>
            Voto:
            <i
              v-for="n in this.vote"
              :key="'filled-' + n"
              class="fa-solid fa-star stars-vote"
            ></i>
          </li>
          <li>Sinossi: {{ film.overview }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style></style>
