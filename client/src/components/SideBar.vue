<template>
  <v-list>
    <v-list-tile
      v-for="user in usersList"
      :key="user.username"
      avatar
      @click="">
        <v-list-tile-avatar>
          <img :src="user.avatar">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title v-html="user.username"></v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-icon :color="user.active ? 'teal' : 'grey'">chat_bubble</v-icon>
        </v-list-tile-action>
      </v-list-tile>
  </v-list>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  mounted: function() {
    this.fetchUsers();
  },
  methods: {
    ...mapActions('user', [
      'fetchUsers'
    ])
  },
  computed: {
    ...mapGetters('user', [
      'usersList'
    ])
  }
}
</script>
