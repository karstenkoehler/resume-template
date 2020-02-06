<template>
    <div id="contact-container">
        <v-subheader>Contact</v-subheader>

        <v-card-text style="padding: 0;">
            <v-list subheader dense>
                <v-list-item v-for="contact in contact_details" :key="contact.value"
                             style="height: 48px;">
                    <v-icon>{{ contact.icon }}</v-icon>

                    <v-list-item-content>
                        <v-list-item-title v-html="contact.value"
                                           v-bind:class="{contactLinebreak : contact.linebreak}"/>
                    </v-list-item-content>
                </v-list-item>
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

    .v-list--dense .v-list__item--avatar {
        height: 64px;
    }

    .v-list-item__title {
        text-align: left;
        font-weight: lighter;
    }

    .v-icon {
        padding: 0 24px 0 8px;
    }
</style>