<script>
import { state } from '../state';

export default {
    name: 'Serie',
    data() {
        return {
            state,
            imgLink: '',
            vote: '',
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
            
            // console.log(this.serie.poster_path);
            this.imgLink = `https://image.tmdb.org/t/p/w342/${this.serie.poster_path}`
        },

        setVote(){
            

            this.vote = Math.round(this.serie.vote_average/2)
            console.log(this.vote);
        }


    },

    mounted() {

        this.findSerieLanguage();
        this.findSerieImg();
        this.setVote();
    }

}
</script>

<template>
    
    <div class="col" >
        <div class="card" >
            <span >
                <ul v-if="this.state.tvSeries.length > 0">
                    <img :src="imgLink" alt="">
                    <li>Il titolo è {{ serie.original_name }}</li>
                    <li>Il titolo originale {{ serie.original_name }}</li>
                    <li>La lingua originale è <img :src="this.state.serieFlag" width="20"
                            :alt="this.serie.original_language">
                    </li>
                    <!-- <li>La lingua originale è {{ serie.original_language }}</li> -->
                    <!-- <li>Voto medio: {{ this.vote }}</li> -->
                    <li><i class="fa-solid fa-star"></i></li>
                </ul>
            </span>

        </div>
    </div>


</template>

<style></style>
