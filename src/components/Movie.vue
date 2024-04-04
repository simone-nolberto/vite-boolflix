<script>
import { state } from '../state';

export default {
    name: 'Movie',
    data() {
        return {
            state,
            imgLink: '',
            vote: 0,
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

        setVote(n) {
            // console.log(parseFloat(this.film.vote_average).toFixed(1));
            // console.log(Math.round(this.film.vote_average));
            // console.log(Math.round(this.film.vote_average/2));

            this.vote = n;


            // this.votes.push(Math.round(this.film.vote_average / 2))
            // console.log(this.votes);

        }


    },

    mounted() {
        this.findFilmLanguage();
        this.findFilmImg();
        this.setVote(Math.round(this.film.vote_average / 2));

    }

}
</script>

<template>

    <div class="col">
        <div class="card">
            <div class="card-img">
                <img :src="this.imgLink" alt="">

            </div>
            <div class="card-body" v-if="this.state.films.length > 0">
                <ul >
                    <li>Titolo: {{ film.title }}</li>
                    <li>Titolo originale: {{ film.original_title }}</li>
                    <li>Lingua originale: <img :src="this.state.movieFlag" width="20"
                            :alt="this.film.original_language">
                    </li>
                    <li>
                        <i v-for="n in this.vote" :key="'filled-' + n" class="fa-solid fa-star"></i>
                    </li>
                </ul>
            </div>
        </div>
    </div>
        
    




</template>

<style></style>
