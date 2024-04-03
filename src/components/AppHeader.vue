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
    methods:{
        logInput(){
            console.log(this.userInput);
        },

        findFilm(){
            console.log(this.state.apiUrl + this.userInput );
            this.state.getFilm(this.state.apiUrl + this.userInput)
        }

    }
}
</script>

<template>

    <img src="" alt="">

    <input type="text" name="" id="" v-model="userInput">
    <button @click="findFilm()">Cerca</button>

</template>

<style></style>
