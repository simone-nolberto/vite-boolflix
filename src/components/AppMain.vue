<script>
import { state } from '../state';
import Movie from '../components/Movie.vue'
import Serie from '../components/Serie.vue'


export default {
    name: 'AppMain',
    data() {
        return {
            state,

        }
    },
    components: {
        Movie,
        Serie
    },
    methods: {

        changeCheck() {
            if (this.state.films.length && this.state.tvSeries.length === 0) {
                this.state.check = false;
            }
        }
    },

}
</script>

<template>
    <main>
        <p class="welcome" v-if="this.state.films.length === 0 && this.state.tvSeries.length === 0">
            Benvenuto nel nostro catalogo! Inizia subito a guardare qualcosa, ti basta scrivere qualcosa nella barra in
            alto!
        </p>


        <div class="container" v-else="this.state.films.length !== 0 && this.state.tvSeries.length !== 0">

            <div class="row" v-if="this.state.films.length > 0">

                <Movie v-for="film in this.state.films" :film='film'></Movie>
                
            </div>

            <div class="row" v-if="this.state.tvSeries.length > 0">

                <Serie v-for="serie in this.state.tvSeries" :serie="serie"></Serie>

            </div>

        </div>

        <!-- <p class="retry" v-else>Spiacenti, non abbiamo trovato quello che cerchi, prova con un altro
            titolo</p> -->
    </main>

</template>

<style></style>
