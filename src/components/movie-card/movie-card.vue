<template>
  <div class="movie-card">
    <a class="item-card">
      <a class="bookmark">
        <i class="zmdi zmdi-check check over"/>
        <i class="zmdi zmdi-plus plus over"/>
        <i class="zmdi zmdi-close close over"/>
        <i class="zmdi zmdi-bookmark"/>
      </a>
      <div class="rating" style="background: rgb(78, 173, 31);">{{ rating }}</div>
      <div class="overlay ov-show">
        <div class="description">{{ desc }}</div>
        <div class="info"><i class="zmdi zmdi-info"/> More info</div>
      </div>
      <img :src="poster" >
    </a>
    <div class="subtitle">
      <div class="meta">
        {{ year }} / <span class="capitalize">{{ genres }}</span>
      </div>
      <h4>{{ title }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    rating: {
      type: Number,
      default: 0
    },
    poster: {
      type: String,
      default: ''
    },
    genres: {
      type: String,
      default: ''
    },
    year: {
      type: Number,
      default: 0
    }
  }
}
</script>
