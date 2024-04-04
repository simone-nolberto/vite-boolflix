<script>
import { state } from '../state';

export default {
    name: 'Serie',
    data() {
        return {
            state,

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
        }


    },

    mounted() {

        this.findSerieLanguage()
    }

}
</script>

<template>
    <h3>Serie:</h3>
    <span v-for="serie in this.state.tvSeries">
        <ul v-if="this.state.tvSeries.length > 0">

            <li>Il titolo è {{ serie.original_name }}</li>
            <li>Il titolo originale {{ serie.original_name }}</li>
            <li>

                La lingua originale è <img :src="this.state.serieFlag" width="20" :alt="this.serie.original_language">
            </li>
            <li>La lingua originale è {{ serie.original_language }}</li>
            <li>Voto medio: {{ serie.vote_average }}</li>
        </ul>
    </span>


</template>

<style></style>
