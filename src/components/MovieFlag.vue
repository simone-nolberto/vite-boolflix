<script>
import { state } from '../state';

export default {
    name: 'MovieFlag',
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

    <li>
        <span> La lingua originale è <img :src="this.state.movieFlag" width="20"
                :alt="this.film.original_language"></span>
    </li>

</template>

<style></style>
