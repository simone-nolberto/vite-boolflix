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
        <p v-if="this.state.films.length === 0  && this.state.tvSeries.length === 0">
            Inizia subito a guardare qualcosa, cerca un titolo dal nostro catalogo!
        </p>
        <div class="container" v-else>

            <div class="row" v-if="this.state.films.length > 0">

                <Movie v-for="film in this.state.films" :film='film'></Movie>

            </div>

            <div class="row" v-if="this.state.tvSeries.length > 0">

                <Serie v-for="serie in this.state.tvSeries" :serie="serie"></Serie>

            </div>

        </div>

    </main>

</template>

<style></style>
