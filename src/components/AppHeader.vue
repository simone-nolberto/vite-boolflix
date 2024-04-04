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
            this.state.getSeries(this.state.apiSeriesUrl + this.userInput)
        }

    }
}
</script>

<template>

    <img src="" alt="">

    <input type="text" name="" id="" v-model="this.state.userInput">
    <button @click="findFilm(); findSeries()">Cerca</button>

</template>

<style></style>
