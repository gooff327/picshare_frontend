<template>
  <a-row type="flex" justify="space-around">
    <a-col :span="24">
      <Splash v-if="isNewUser"></Splash>
      <Login></Login>
    </a-col>
  </a-row>
</template>

<script>
import Login from './Login'
import Splash from './Splash'

export default {
  name: 'index',
  components: {
    Login,
    Splash
  },
  data () {
    return {
    }
  },
  computed: {
    isNewUser: function () {
      return !localStorage.getItem('newUserFlag')
    }
  },
  mounted () {
    localStorage.setItem('newUserFlag', 'true')
  }
}
</script>

<style scoped>
</style>
