import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
    
    userInput: '',
    films: [],
    tvSeries: [],
    check: true,
    apiFilmUrl: 'https://api.themoviedb.org/3/search/movie?api_key=5abe208d1972a179b672737b5489a0cb&query=',
    apiSeriesUrl: 'https://api.themoviedb.org/3/search/tv?api_key=5abe208d1972a179b672737b5489a0cb&language=&query=',

    getFilm(url) {
        axios.get(url)
            .then(response => {
                // console.log(response.data.results);
                this.films = response.data.results;
                // console.log(this.films);
            })
    },

    getSeries(url) {
        axios.get(url)
            .then(response => {
                // console.log(response.data.results);
                this.tvSeries = response.data.results;
                // console.log(this.tvSeries);
            })
    },





})