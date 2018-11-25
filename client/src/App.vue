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
          <div v-for="(row,index) in messages" :key="index">{{ row }}</div>

          <hr>

          <input type="text" v-model="newMessage"/>
          <button @click="sendMessage">Send</button>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'
import io from 'socket.io-client'

export default {
  name: 'app',
  data: function() {
    return {
      drawer: true,
      messages: [],
      newMessage: "",
      socket : io('localhost:3000')
    }
  },
  components: {
    SideBar
  },
  methods: {
    sendMessage: function(e) {
      e.preventDefault();
      this.socket.emit('POST_MESSAGE', {
        message: this.newMessage
      });
      this.newMessage = ''
    }
  },
  mounted: function() {
    this.socket.on('MESSAGE', (data) => {
      this.messages.push(data);
    })
  }
}
</script>

<style>
</style>
