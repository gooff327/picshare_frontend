<template>
  <a-row type="flex" justify="space-around">
    <a-col :span="24" v-show="flag">
      <Splash @close="closeSplash"></Splash>
    </a-col>
    <a-col :span="24" v-show="!flag">
      <Login></Login>
    </a-col>
  </a-row>
</template>

<script>
import Login from './Login'
import Splash from './Splash'
import ACol from 'ant-design-vue/es/grid/Col'

export default {
  name: 'index',
  components: {
    ACol,
    Login,
    Splash
  },
  data () {
    return {
      flag: null
    }
  },
  mounted () {
    this.flag = JSON.parse(localStorage.getItem('newUserFlag'))
  },
  methods: {
    closeSplash () {
    localStorage.setItem('newUserFlag', 'false')
    this.flag = JSON.parse(localStorage.getItem('newUserFlag'))
    }
  }
}
</script>

<style scoped>
</style>
