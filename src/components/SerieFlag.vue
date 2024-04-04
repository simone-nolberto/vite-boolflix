<script>
import { state } from '../state';

export default {
    name: 'SerieFlag',
    data() {
        return {
            state,

        }
    },
    props: ['serie'],
    methods: {

        findSerieLanguage() {
            if (this.serie.original_language === 'en') {
                this.serieFlag = 'https://flagcdn.com/w20/gb.png';
                // console.log(this.flag);
            } else if (this.serie.original_language === 'ja') {

                this.serieFlag = 'https://flagcdn.com/w20/jp.png';
            }

            else {
                this.serieFlag = `https://flagcdn.com/w20/${this.serie.original_language}.png`;
                // console.log(this.film.original_language)
            }
        }


    },

    mounted() {

        this.findSerieLanguage()
    }

}
</script>

<template>

    <li>

        <span> La lingua originale è <img :src="this.state.serieFlag" width="20"
                :alt="this.serie.original_language"></span>
    </li>

</template>

<style></style>
