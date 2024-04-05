<script>
import { state } from '../state'

export default {
    name: 'AppHeader',
    data() {
        return {
            state,

        }
    },
    methods: {

        findFilm() {
            // console.log(this.state.apiUrl + this.userInput );
            if (this.state.films.length === 0) {
                this.state.getFilm(this.state.apiFilmUrl + this.state.userInput)

            } else if (this.state.films.length > 0) {
                this.state.films = 0,
                    // this.userInput = ''
                    this.state.getFilm(this.state.apiFilmUrl + this.state.userInput)

            }
        },

        findSeries() {
            if (this.state.tvSeries.length === 0) {
                this.state.getSeries(this.state.apiSeriesUrl + this.state.userInput)
            } else if (this.state.tvSeries.length > 0) {
                this.state.tvSeries = 0,
                    // this.userInput = ''
                    this.state.getSeries(this.state.apiSeriesUrl + this.state.userInput)

            }

        }

    }
}
</script>

<template>
    <header>
        <div class="logo">
            <h1>BoolFlix</h1>
        </div>

        <div class="searchBar">

            <input @keyup="findFilm(); findSeries();" type="text" name="" id="" v-model="this.state.userInput" placeholder="Cosa vuoi vedere oggi?">
            <!-- <button @click="">Cerca</button> -->
        </div>
    </header>


</template>

<style></style>
