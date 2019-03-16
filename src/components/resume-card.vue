<template>
    <v-card style="flex: 1;">
        <v-card-title>
            <template v-if="icon">
                <v-icon style="margin-right: 12px">{{icon}}</v-icon>
            </template>
            <template v-else><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Vue.js_Logo.svg"
                                  alt="project avatar"
                                  style="width: 35px;"></template>
            <span class="title font-weight-light" style="margin: auto 0 auto 0"><slot></slot></span>

        </v-card-title>

        <v-divider></v-divider>

        <v-container fluid>
            <v-layout row wrap>
                <div v-for="(item, index) in items" :key="index">
                    <v-toolbar-title style="text-align: left; padding: 0 16px;">{{item.position}}
                    </v-toolbar-title>
                    <v-subheader>{{item.location}}
                        <v-spacer></v-spacer>
                        {{item.time_from}} - {{item.time_to}}
                    </v-subheader>
                    <ul>
                        <li v-for="bullet in item.bullets" :key="bullet" style="margin: 4px 0; min-width: 452px;">
                            {{bullet}}
                        </li>
                    </ul>
                    <v-spacer v-if="index < items.length -1" style="height: 12px;"></v-spacer>
                </div>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
    export default {
        name: "resume-card",
        props: {items: Array, icon: String}
    }
</script>

<style scoped>
    ul {
        text-align: left;
    }

    .v-card {
        margin-bottom: 12px;
    }

    .v-card__title {
        padding: 13px 16px;
    }

    .container {
        padding: 12px;
    }

    .v-subheader {
        letter-spacing: -1px;
    }
</style>