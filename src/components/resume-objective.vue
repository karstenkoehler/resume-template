<template>
    <div id="objective-container">
        <v-subheader>Resume Objective</v-subheader>
        <v-card-text style="text-align: justify">{{objective}}</v-card-text>
    </div>
</template>

<script>
    export default {
        name: "resume-objective",
        props: {objective: String}
    }
</script>

<style scoped>
    #objective-container {
        margin: 16px 0;
    }

    .v-card__text {
        padding: 8px 16px;
    }
</style>