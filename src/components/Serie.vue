<script>
import { state } from '../state';

export default {
    name: 'Serie',
    data() {
        return {
            state,
            imgLink: '',
        }
    },
    props: ['serie'],
    methods: {

        findSerieLanguage() {
            if (this.serie.original_language === 'en') {
                this.serieFlag = 'https://flagcdn.com/w20/gb.png';
                // console.log(this.flag);
            } else if (this.serie.original_language === 'ja') {

                this.serieFlag = 'https://flagcdn.com/w20/jp.png';
            }

            else {
                this.serieFlag = `https://flagcdn.com/w20/${this.serie.original_language}.png`;
                // console.log(this.film.original_language)
            }
        },

        findSerieImg() {
            console.log(this.serie.poster_path);
            this.imgLink = `https://image.tmdb.org/t/p/w342/${this.serie.poster_path}`
        }


    },

    mounted() {

        this.findSerieLanguage();
        this.findSerieImg();
    }

}
</script>

<template>
    <h3>Serie:</h3>
    <span v-for="serie in this.state.tvSeries">
        <ul v-if="this.state.tvSeries.length > 0">
            <img :src="this.imgLink" alt="">
            <li>Il titolo è {{ serie.original_name }}</li>
            <li>Il titolo originale {{ serie.original_name }}</li>
            <li>La lingua originale è <img :src="this.state.serieFlag" width="20" :alt="this.serie.original_language">
            </li>
            <li>La lingua originale è {{ serie.original_language }}</li>
            <li>Voto medio: {{ serie.vote_average }}</li>
        </ul>
    </span>


</template>

<style></style>
