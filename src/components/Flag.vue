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
    methods: {
        findCountry() {
            if (film.original_language === 'en') {
                this.flag = gb;
                console.log(this.flag);
            } else {
                this.flag = film.original_language;
            }
        }

    },

}
</script>

<template>

    <li>
        <!-- <img src="https://flagcdn.com/w20/this.flag.png" width="20" alt="country"> -->
        {{ this.flag }}
    </li>

</template>

<style></style>
