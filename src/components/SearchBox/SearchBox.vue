<template>
  <AutoComplete
    v-model="value4"
    :placeholder="placeHolder"
    :size="size"
    icon="ios-search"
    @on-search="handleQuerySearch">
    <div v-for="item in data4" :key="item.title" class="demo-auto-complete-item">
      <div class="demo-auto-complete-group">
        <span>{{ item.title }}</span>
        <a href="https://www.google.com/search?q=iView" target="_blank">更多</a>
      </div>
      <Option v-for="option in item.children" :value="option.title" :key="option.title">
        <span class="demo-auto-complete-title">{{ option.title }}</span>
        <span class="demo-auto-complete-count">{{ option.count }} 人关注</span>
      </Option>
    </div>
    <a href="https://www.google.com/search?q=iView" target="_blank" class="demo-auto-complete-more">查看所有结果</a>
  </AutoComplete>
</template>

<script>
import { AutoComplete } from 'iview'
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
      value4: '',
      data4: [
        {
          title: '话题',
          children: [
            {
              title: 'iView',
              count: 10000

            },
            {
              title: 'iView UI',
              count: 10600

            }
          ]
        }
      ]
    }
  },
  computed: {

  },
  methods: {
    handleQuerySearch: function(value) {
    }
  }
}
</script>
