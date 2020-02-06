<template>
    <div id="skill-container">
        <v-subheader>Technical Skills</v-subheader>

        <v-list>
            <v-list-item v-for="skill in skills" :key="skill" style="max-height: 36px;">
                <v-list-item-title>{{skill.name}}</v-list-item-title>
                <v-progress-linear :value="skill.level"/>
            </v-list-item>
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
    .v-list__item {
        height: 12px;
    }

    .v-list-item {
        text-align: left;
        min-height: 34px;
    }
</style>