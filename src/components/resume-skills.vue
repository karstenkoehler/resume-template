<template>
    <div id="skill-container">
        <v-subheader>Technical Skills</v-subheader>

        <v-list>
            <v-list-tile v-for="skill in skills" :key="skill" style="max-height: 36px;">
                <v-list-tile-title>{{skill.name}}</v-list-tile-title>
                <v-progress-linear :value="skill.level"></v-progress-linear>
            </v-list-tile>
        </v-list>
    </div>
</template>

<script>
    export default {
        name: "resume-skills",
        props: {skills: Array}
    }
</script>

<style scoped>
    .v-list__tile {
        height: 12px;
    }
</style>