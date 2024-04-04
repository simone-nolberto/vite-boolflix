<script>
import { state } from '../state';

export default {
    name: 'Movie',
    data() {
        return {
            state,

        }
    },
    props: ['film'],
    methods: {

        findFilmLanguage() {


            if (this.film.original_language === 'en') {
                this.state.movieFlag = 'https://flagcdn.com/w20/gb.png';
                // console.log(this.flag);
            } else if (this.film.original_language === 'ja')
                this.state.movieFlag = 'https://flagcdn.com/w20/jp.png';

            else {
                this.state.movieFlag = `https://flagcdn.com/w20/${this.film.original_language}.png`;
                // console.log(this.film.original_language)
            }

            // console.log(this.flag)
        },

    },

    mounted() {
        this.findFilmLanguage()

    }

}
</script>

<template>
    <h3>Film:</h3>
    <span v-for="film in this.state.films ">
        <ul v-if="this.state.films.length > 0">

            <li>Il titolo è {{ film.title }}</li>
            <li>Il titolo originale {{ film.original_title }}</li>
            <li>
                La lingua originale è <img :src="this.state.movieFlag" width="20" :alt="this.film.original_language">
            </li>

            <li>La lingua originale è {{ film.original_language }}</li>
            <li>Voto medio: {{ film.vote_average }}</li>
        </ul>
    </span>



</template>

<style></style>
