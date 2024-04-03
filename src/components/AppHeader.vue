<script>
import { state } from '../state'

export default {
    name: 'AppHeader',
    data() {
        return {
            state,
            userInput: '',
        }
    },
    methods: {

        findFilm() {
            // console.log(this.state.apiUrl + this.userInput );
            this.state.getFilm(this.state.apiFilmUrl + this.userInput)
        },

        findSeries() {
            this.state.getSeries(this.state.apiSeriesUrl + this.userInput)
        }

    }
}
</script>

<template>

    <img src="" alt="">

    <input type="text" name="" id="" v-model="userInput">
    <button @click="findFilm(); findSeries()">Cerca</button>

</template>

<style></style>
