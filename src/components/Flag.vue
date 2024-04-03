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
    props: ['film'],
    methods: {
        findCountry() {


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


    },

    mounted() {
        this.findCountry()

    }

}
</script>

<template>

    <li>
        <img :src="this.flag" width="20" alt="country">

    </li>

</template>

<style></style>
