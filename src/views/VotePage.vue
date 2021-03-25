<template>
  <div class="header">
    <div class="container">
      <router-link :to="{ name: 'Home' }"  class="logo">
        <img src="../assets/logo.png" />
        <span>PIXAR LOVER</span>
      </router-link>
      <button class="btn-nav">
        <i class="fas fa-stream"></i>
      </button>
    </div>
  </div>
  <div class="page-vote">
    <div class="box">
      <div class="num-of-item">{{ selectedFilms.length }}</div>
      <i class="fas fa-box-open"></i>
    </div>
    <div class="content-top">
      <div class="title">
        <span class="vote">VOTE</span>
        <span>
          <div>for your favorite</div>
          <div class="pixar">PIXAR film</div>
        </span>
      </div>
      <div class="tip">
        <span class="index">1</span>
        Select your <span class="empasis">TOP 6</span> <span class="pixar">PIXAR</span> films
      </div>
    </div>
    <div class="films">
      <template v-for="item in films" :key="item.imdbId">
        <FilmItem :item="item" />
      </template>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from "vuex";
import { Film, films } from '@/data/films';
import FilmItem from '@/components/FilmItem.vue';

export default defineComponent({
  components: {
    FilmItem
  },
  data() {
    return {
      films: films.sort((a, b) => a.index - b.index)
    }
  },
  computed: {
    ...mapState(["selectedFilms"])
  }
})
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  background-color: var(--page-vote-secondary);
  height: 70px;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  

  .container {
    width: 100%;
    max-width: 1400px;
    display: flex;
    justify-content: space-between;

    .logo {
      height: 60px;
      display: flex;
      align-items: center;
      color: #EBEBEB;
      font-family: 'Cinzel', serif;
      font-weight: bold;
      font-size: 18px;
      text-decoration: none;

      img {
        height: 100%;
      }
    }

    .btn-nav {
      background-color: transparent;
      border: 0;
      outline: 0;
      color: #EBEBEB;
      font-size: 20px;
      cursor: pointer;
    }
  }

  
}

.page-vote {
  background-color: var(--page-vote-primary);
  padding: 20px 10vw;

  .box {
    position: fixed;
    top: 100px;
    right: 80px;
    display: inline-block;
    font-size: 40px;
    color: #f65a5b;
    text-align: center;

    .num-of-item {
      font-size: 30px;
      font-weight: 700;
      color: #fff;
      line-height: 10px;
    }
  }

  .content-top {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0 20px 0;

    .title {
      width: 220px;
      height: 50px;
      box-sizing: border-box;
      display: flex;
      background-color: #000;
      color: #fff;
      padding: 10px 20px;
      font-size: 12px;
      line-height: 16px;
      text-transform: uppercase;
      border-radius: 45% 40% 55% 40%;

      .vote {
        font-size: 26px;
        font-family: 'Boogaloo', cursive;
        line-height: 30px;
        margin-right: 8px;
        color: #ffdd00;
      }

      .pixar {
        font-size: 14px;
        font-weight: 700;
      }
    }

    .tip {
      color: #fff;
      font-weight: 300;
      line-height: 20px;
      text-align: center;
      margin-left: 30px;

      .index {
        display: inline-block;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background-color: rgba(#fff, .5);
        color: var(--page-vote-primary);
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        vertical-align: middle;
        margin-right: 4px;
      }

      .empasis {
        margin: 0 4px;
        font-weight: 700;
      }

      .pixar {
        font-family: 'Cinzel', serif;
      }
    }
  }

  .films {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer {
    height: 100px;
  }
}
</style>
