<template>
  <AutoComplete
    v-model="value"
    :placeholder="placeHolder"
    :size="size"
    icon="ios-search"
    @on-search="querySearch">
    <Option v-for="item in items" :value="item.title" :key="item.imdbId">
      <div class="item movie">
        <div class="pic">
          <img :src="item.poster" width="20" height="30" >
        </div>
        <div class="value">
          <div class="title">{{ item.title }}</div>
          <div class="desc">
            <small>Year: {{ item.year }}</small>
            <small style="color: rgb(159, 173, 31);">Rating: {{ item.rating }}</small>
          </div>
        </div>
      </div>
    </Option>
  </AutoComplete>
</template>

<style scoped>

</style>

<script>
import { AutoComplete } from 'iview'
import { getMovieByTitle } from '@/api/movie'

export default {
  name: 'SearchBox',
  components: { AutoComplete },
  props: {
    placeHolder: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'large'
    }
  },
  data: function() {
    return {
      value: '',
      items: []
    }
  },
  computed: {

  },
  methods: {
    querySearch: function(query) {
      getMovieByTitle(query).then(res => {
        this.items = res.data.items
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
