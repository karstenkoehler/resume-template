<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-toolbar extended class="primary" height="46px">
        <v-spacer></v-spacer>
        <v-toolbar-title class="name-title">{{infos.name}}</v-toolbar-title>
        <v-spacer></v-spacer>

        <template v-slot:extension>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <span class="profession-subtitle">{{infos.profession}}</span>
            <v-spacer></v-spacer>
            <v-img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" max-width="28px"
                   height="28px"></v-img>
            <span class="github-subtitle">{{infos.github}}</span>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
        </template>
    </v-toolbar>
</template>

<script>
    export default {
        name: "resume-header",
        props: {infos: Object}
    }
</script>

<style scoped>
    nav {
        z-index: 50;
    }

    .profession-subtitle {
        font-weight: lighter;
        font-size: large;
    }

    .github-subtitle {
        font-weight: lighter;
        font-size: large;
        margin-left: 6px;
    }

    .name-title {
        font-weight: bolder;
        font-size: 28pt;
        margin: 72px auto 60px;
    }
</style>