<template>
    <span>
        <md-button class="md-icon-button md-raised" @click="goBack"> 
            <span class="material-icons">keyboard_arrow_left</span> 
            </md-button>
    </span>
</template>

<script>
export default {
    methods: {
        goBack() {
            return this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
    span {
        display: flex;
        cursor: pointer;
    }
    button { 
        border: none;
    }
</style>