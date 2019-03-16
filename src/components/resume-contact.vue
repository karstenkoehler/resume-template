<template>
    <div id="contact-container">
        <v-subheader>Contact</v-subheader>

        <v-card-text style="padding: 0;">
            <v-list subheader dense>
                <v-list-tile v-for="contact in contact_details" :key="contact.value"
                             style="height: 48px;" avatar>
                    <v-list-tile-avatar>
                        <v-icon>{{ contact.icon }}</v-icon>
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title v-html="contact.value"
                                           v-bind:class="{contactLinebreak : contact.linebreak}"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-card-text>
    </div>
</template>

<script>
    export default {
        name: "resume-contact",
        props: {contact_details: Array}
    }
</script>

<style scoped>
    .contactLinebreak {
        height: 32px;
        line-height: 16px;
    }

    .v-list--dense .v-list__tile--avatar {
        height: 64px;
    }
</style>