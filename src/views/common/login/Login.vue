<template>
<a-row type="flex" justify="space-around">
  <a-col :sm="24" :md="18" :lg="12">
    Login
  </a-col>
</a-row>
</template>

<script>
import ACol from 'ant-design-vue/es/grid/Col'
export default {
  name: 'Login',
  components: { ACol }
}
</script>

<style scoped>
  /* For demo */
  .ant-carousel >>> .slick-slide {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
  }

  .ant-carousel >>> .slick-slide h1 {
    color: #fff;
  }
</style>
