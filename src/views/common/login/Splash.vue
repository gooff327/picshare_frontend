<template>
  <div>
  <a-row type="flex" justify="space-around" v-for="(item, key) in contents" :key="key">
    <div  ref="splash">
    <a-col :span="24" class="splash-item">
      <h1 v-text="item"></h1>
    </a-col>
    </div>
  </a-row>
      <fa-layers @click="handleNext" class="fa-lg icon-next">
        <fa-icon icon="circle" class="mask"></fa-icon>
        <fa-icon :icon="['far','hand-point-up']" transform="shrink-6"></fa-icon>
      </fa-layers>
  </div>
</template>

<script>
export default {
  name: 'Splash',
  data () {
    return {
      contents: ['Picture', 'Sharing', 'PicShare'],
      index: null
    }
  },
  created() {
  },
  async mounted () {
    this.index = 0
    console.log(this.index)
    let element = this.$refs.splash[this.index]
    await element.scrollIntoView({ behavior: 'smooth' })
  },
  methods: {
    handleNext () {
      this.index++
      if (this.index < 3) {
        console.log(this.index)
        let element = this.$refs.splash[this.index]
        element.scrollIntoView({ behavior: 'smooth' })
      } else {
        this.$emit('close')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .splash-item
    min-height 100vh
    align-items center
    display flex
    justify-content center
  .icon-next
    position fixed
    bottom 20vh
    .mask
      color #60be94

</style>
