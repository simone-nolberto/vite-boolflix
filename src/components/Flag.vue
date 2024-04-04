<script>
import { state } from '../state';

export default {
    name: 'Flag',
    data() {
        return {
            state,
            flag: '',

        }
    },
    props: ['film', 'serie'],
    methods: {
        findFilmCountry() {


            if (this.film.original_language === 'en') {
                this.flag = 'https://flagcdn.com/w20/gb.png';
                // console.log(this.flag);
            } else if (this.film.original_language === 'ja')
                this.flag = 'https://flagcdn.com/w20/jp.png';

            else {
                this.flag = `https://flagcdn.com/w20/${this.film.original_language}.png`;
                // console.log(this.film.original_language)
            }

            // console.log(this.flag)
        },

        // findSerieCountry (){
        //     if (this.serie.original_language === 'en') {
        //         this.flag = 'https://flagcdn.com/w20/gb.png';
        //         // console.log(this.flag);
        //     } else if (this.serie.original_language === 'ja')
        //         this.flag = 'https://flagcdn.com/w20/jp.png';

        //     else {
        //         this.flag = `https://flagcdn.com/w20/${this.serie.original_language}.png`;
        //         // console.log(this.film.original_language)
        //     }
        // }


    },

    mounted() {
        this.findFilmCountry()
        // this.findSerieCountry()
    }

}
</script>

<template>

    <li>
        <span v-if="this.film.original_language !== ''"> La lingua originale è <img :src="this.flag" width="20"
                :alt="this.film.original_language"></span>
        <span v-else-if="this.serie.original_language !== ''"> La lingua originale è <img :src="this.flag" width="20"
                :alt="this.serie.original_language"></span>
    </li>

</template>

<style></style>
