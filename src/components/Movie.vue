<script>
import { state } from '../state';

export default {
    name: 'Movie',
    data() {
        return {
            state,
            imgLink: '',
            vote: '',
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

        findFilmImg() {
            // console.log(this.film.poster_path);
            this.imgLink = `https://image.tmdb.org/t/p/w342/${this.film.poster_path}`
        },

        setVote(){
            // console.log(parseFloat(this.film.vote_average).toFixed(1));
            // console.log(Math.round(this.film.vote_average));
            // console.log(Math.round(this.film.vote_average/2));

            this.vote = Math.round(this.film.vote_average/2) 
            console.log(this.vote);
        }
        

    },

    mounted() {
        this.findFilmLanguage();
        this.findFilmImg();
        this.setVote();

    }

}
</script>

<template>
    
    <div class="col">
        <div class="card">
            <span>
                <ul v-if="this.state.films.length > 0">
                    <img :src="this.imgLink" alt="">
                    <li>Il titolo è {{ film.title }}</li>
                    <li>Il titolo originale {{ film.original_title }}</li>
                    <li>La lingua originale è <img :src="this.state.movieFlag" width="20"
                            :alt="this.film.original_language">
                    </li>

                    <!-- <li>La lingua originale è {{ film.original_language }}</li> -->
                    <!-- <li>Voto medio: {{this.vote}}</li> -->
                    <li><i class="fa-solid fa-star"></i></li>
                </ul>
            </span>
        </div>
    </div>




</template>

<style></style>
