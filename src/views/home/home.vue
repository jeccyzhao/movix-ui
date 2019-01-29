<template>
  <div class="home">
    <Stars />
    <Moon/>
    <div class="container">
      <div class="subtext">
        <h2>Discover your movie in a few clicks.</h2>
        <h3>Find a perfect match to your mood</h3>
      </div>
      <div class="search">
        <SearchBox :place-holder="searchPlaceHolder" />
      </div>
    </div>
  </div>
</template>

<script>
import AppBanner from '@/components/AppBanner'
import SearchBox from '@/components/SearchBox'

export default {
  name: 'Home',
  components: {
    AppBanner,
    SearchBox,
    Stars: {
      props: [],
      template: '<div class="stars">\n' +
        '<a style="left: 2%; top: 30px;"/>\n' +
        '<b style="left: 5%; top: -20px;"/>\n' +
        '<b style="left: 8%; top: 20px;"/>\n' +
        '<i style="left: 15%; top: 15px;"/>\n' +
      '</div>'
    },
    Moon: {
      template: '<div class="moon"/>'
    }
  },
  computed: {
    searchPlaceHolder() {
      return 'Enter a movie title or keyword...'
    }
  }
}
</script>

<style lang="less" >
  @import 'home.less';
</style>

