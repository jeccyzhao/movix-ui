<template>
  <div class="layout">
    <Layout>
      <Header><AppBanner /></Header>
      <Layout>
        <Content>Content</Content>
        <Sider hide-trigger>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  </div>
</template>

<script>
import AppBanner from '@/components/AppBanner'
export default {
  name: 'Discover',
  components: {
    AppBanner
  }
}
</script>

<style lang="less" scoped>
  @import 'discover.less';
</style>
