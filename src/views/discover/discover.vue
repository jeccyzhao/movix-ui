<template>
  <div class="layout">
    <Layout>
      <Header><AppBanner /></Header>
      <Layout style="margin: 80px 5% 0;">
        <Content style="">
          <div class="title-bar"><h2>Recommendations</h2> <div>Your personal selection of movies</div></div>
          <div class="movies">
            <MovieCard
              v-for="movie in movies"
              :key="movie.id"
              :rating="movie.rating"
              :poster="movie.poster"
              :year="movie.year"
              :genres="movie.genres"
              :title="movie.title" />
          </div>
        </Content>
        <Sider width="300" style="background: transparent">Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  </div>
</template>

<script>
import AppBanner from '@/components/app-banner'
import MovieCard from '@/components/movie-card'
export default {
  name: 'Discover',
  components: {
    AppBanner,
    MovieCard
  },
  data: function() {
    return {
      movies: [{
        id: 4,
        title: 'Test',
        rating: 4.5,
        poster: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg',
        year: 1994,
        genres: 'crime, mystery'
      }, {
        id: 6,
        title: 'The Martian',
        rating: 6.5,
        poster: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg',
        year: 2015,
        genres: 'Adventure, Very Popular'
      }]
    }
  }
}
</script>

<style lang="less" scoped>
  @import 'discover.less';

  .movies {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    position: relative;
  }

  .title-bar {
      font-size: 13px;
      color: rgba(0,0,0,.6);
      margin-bottom: 15px;

      h2 {
        font-size: 18px;
        color: #000;
        margin: 0 0 2px;
      }
  }

</style>
