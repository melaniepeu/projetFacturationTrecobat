<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="brown lighten-2" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            {{item.title}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app color="black" dark>
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-toolbar-title>{{appTitle}}</v-toolbar-title>
            <v-btn text class="hidden-sm-and-down" href="Presentation.vue">Accueil</v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>

            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn color="primary" dark v-on="on">Fournisseurs</v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index" @click="">
                        <v-list-item-title>{{}}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-btn text class="hidden-sm-and-down" href="">Factures</v-btn>
        </v-toolbar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'Trecobat',
            drawer: false,
            items: [
                { title: 'Accueil' },
                { title: 'Fournisseurs' },
                { title: 'Factures' }
            ]
        };
    }
};
</script>

<style scoped>
</style>