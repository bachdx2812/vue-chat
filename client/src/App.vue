<template>
  <div id="app">
    <v-app dark>
      <v-navigation-drawer
        v-model="drawer"
        fixed
        enable-resize-watcher
        app>
        <SideBar></SideBar>
      </v-navigation-drawer>
      <v-toolbar app fixed>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      </v-toolbar>
      <v-content>
        <v-container fluid>
          HelloWorld
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'

export default {
  name: 'app',
  data: function() {
    return {
      drawer: true
    }
  },
  components: {
    SideBar
  }
}
</script>

<style>
</style>
