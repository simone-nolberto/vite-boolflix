<script>
import { state } from '../state';

export default {
    name: 'Serie',
    data() {
        return {
            state,
            imgLink: '',
            serieFlag: '',
            vote: 0,
        }
    },
    props: ['serie'],
    methods: {

        findSerieLanguage() {
            if (this.serie.original_language === 'en') {
                this.serieFlag = 'https://flagcdn.com/w20/gb.png';
                // console.log(this.serieFlag);

            } else if (this.serie.original_language === 'ja') {

                this.serieFlag = 'https://flagcdn.com/w20/jp.png';

            } else if (this.serie.original_language === 'zh') {
                this.serieFlag = 'https://flagcdn.com/w20/cn.png';
                // console.log(this.serieFlag);

            } else if (this.serie.original_language === 'ko') {
                this.serieFlag = 'https://flagcdn.com/w20/kr.png';
                // console.log(this.serieFlag);

            }

            else {
                this.serieFlag = `https://flagcdn.com/w20/${this.serie.original_language}.png`;
                // console.log(this.film.original_language)
            }
        },

        findSerieImg() {

            // console.log(this.serie.poster_path);
            this.imgLink = `https://image.tmdb.org/t/p/w342/${this.serie.poster_path}`
        },

        setVote(n) {
            this.vote = n;


        }


    },

    mounted() {

        this.findSerieLanguage();
        this.findSerieImg();
        this.setVote(Math.round(this.serie.vote_average / 2));
    }

}
</script>

<template>

    <div class="col">
        <div class="card">
            <div class="card-img">
                <img v-if="this.serie.poster_path !== null" :src="imgLink" alt="">
                <img v-else src="../assets/img/divano.jpeg" alt="">
            </div>
            <div class="card-body" v-if="this.state.tvSeries.length > 0">
                <h3>Show</h3>
                <ul>
                    <li>Titolo: {{ serie.original_name }}</li>
                    <li>Titolo originale: {{ serie.original_name }}</li>
                    <li>Lingua originale: <img :src="this.serieFlag" width="20" :alt="this.serie.original_language">
                    </li>
                    <!-- <li>Lingua originale: {{ this.serieFlag }}</li> -->
                    <li>Voto: <i v-for="n in this.vote" :key="'filled-' + n" class="fa-solid fa-star"></i></li>
                    <li>Sinossi: {{ serie.overview }}</li>
                </ul>

            </div>
        </div>
    </div>




</template>

<style></style>
