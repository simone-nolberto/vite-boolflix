<script>
import { state } from '../state';
import Movie from '../components/Movie.vue'
import Serie from '../components/Serie.vue'


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
        <div class="container">
            <div class="row">
                <div v-if="this.state.films.length > 0">
                    <h3>Film:</h3>
                    <Movie v-for="film in this.state.films" :film='film'></Movie>
                </div>
                <div v-if="this.state.tvSeries.length > 0">
                    <h3>Serie:</h3>
                    <Serie v-for="serie in this.state.tvSeries" :serie="serie"></Serie>

                </div>

            </div>


        </div>

    </main>

</template>

<style></style>
