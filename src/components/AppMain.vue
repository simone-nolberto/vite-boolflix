<script>
import { state } from '../state';
import MovieFlag from '../components/MovieFlag.vue'
import SerieFlag from '../components/SerieFlag.vue'
import axios from 'axios';

export default {
    name: 'AppMain',
    data() {
        return {
            state,

        }
    },
    components: {
        MovieFlag,
        SerieFlag
    },
    methods: {

    },

}
</script>

<template>
    <main>
        <div>
            <span v-for="film in this.state.films ">
                <ul v-if="this.state.films.length > 0">
                    <h3>Film:</h3>
                    <li>Il titolo è {{ film.title }}</li>
                    <li>Il titolo originale {{ film.original_title }}</li>
                    <MovieFlag :film="film"></MovieFlag>
                    <!-- <li>La lingua originale è {{ film.original_language }}</li> -->
                    <li>Voto medio: {{ film.vote_average }}</li>
                </ul>
            </span>
            <span v-for="serie in this.state.tvSeries">
                <ul v-if="this.state.tvSeries.length > 0">
                    <h3>Serie:</h3>
                    <li>Il titolo è {{ serie.original_name }}</li>
                    <li>Il titolo originale {{ serie.original_name }}</li>
                    <SerieFlag :serie="serie"></SerieFlag>
                    <!-- <li>La lingua originale è {{ serie.original_language }}</li> -->
                    <li>Voto medio: {{ serie.vote_average }}</li>
                </ul>
            </span>


        </div>

    </main>

</template>

<style></style>
