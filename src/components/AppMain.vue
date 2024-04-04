<script>
import { state } from '../state';
import Movie from '../components/Movie.vue'
import Serie from '../components/Serie.vue'
import axios from 'axios';

export default {
    name: 'AppMain',
    data() {
        return {
            state,
            imgLink: 'https://image.tmdb.org/t/p/ '
        }
    },
    components: {
        Movie,
        Serie
    },
    methods: {

    },

}
</script>

<template>
    <main>
        <div>
            <Movie v-if="this.state.films.length > 0" :film='film in this.state.films'></Movie>
            <Serie v-if="this.state.tvSeries.length > 0" :serie="serie in this.state.tvSeries"></Serie>

        </div>

    </main>

</template>

<style></style>
