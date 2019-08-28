<template>
<a-row type="flex" justify="space-around">
  <a-col :sm="24" :md="18" :lg="12">
    <a-carousel vertical :dots="false" :autoplay="true">
      <div><h1>Picture</h1></div>
      <div><h1>Share</h1></div>
      <div><h1>PicShare</h1></div>
      <div><h1>Share Anything</h1></div>
    </a-carousel>
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
