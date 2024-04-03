<script>
import { state } from '../state';
import Flag from '../components/Flag.vue'
import axios from 'axios';

export default {
    name: 'AppMain',
    data() {
        return {
            state,

        }
    },
    components:{
        Flag
    },
    methods: {

    },
    
}
</script>

<template>
    <div>
        <span v-for="film in this.state.films">
            <ul>
                <li>Il titolo è {{ film.title }}</li>
                <li>Il titolo originale {{ film.original_title }}</li>
                <li>La lingua originale è {{ film.original_language }}</li>
                <li>Voto medio: {{ film.vote_average }}</li>
                <Flag></Flag>
            </ul>
        </span>
    </div>

</template>

<style></style>
