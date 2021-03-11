<template>
  <div class="page-home">
    <div class="title">
      PIXAR<br />
      ANIMATION
    </div>
    <div class="content">
      <div class="items">
        <template v-for="(item, index) in randomFilms" :key="item.imdbId">
          <div class="item" @click="openCarousel(item, index)">
            <img :src="item.poster" class="item-poster" />
          </div>
        </template>
      </div>
    </div>
  </div>
  <transition name="box-fade">
    <template v-if="showCarouselPage">
      <CarouselPage
        :randomFilms="randomFilms"
        :selectedItem="selectedItem"
        @closeCarousel="closeCarousel"
      />
    </template>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Film, films } from '@/data/films';
import CarouselPage from '@/views/CarouselPage.vue';

export default defineComponent({
  components: {
    CarouselPage
  },
  data() {
    return {
      showCarouselPage: false,
      selectedItem: undefined
    }
  },
  computed: {
    randomFilms(): Film[] {
      let numOfFilm = 6;
      if (window.innerWidth >= 1350) numOfFilm = 8;
      const result = films.sort(() => Math.random() - 0.5).slice(films.length - numOfFilm)
      return result;
    }
  },
  methods: {
    openCarousel(item: any) {
      this.selectedItem = item;
      this.showCarouselPage = true;
    },
    closeCarousel() {
      this.selectedItem = undefined;
      this.showCarouselPage = false;
    }
  }
});
</script>

<style lang="scss" scoped>
@import '@/style/animation.scss';
@import '@/style/mixins.scss';

.page-home {
  display: flex;
  width: 100vw;
  max-width: 1400px;
  height: 100vh;
  margin: auto;

  .title {
    border-top: 16px solid #000;
    padding: 10vh 0 0 12px;
    margin-left: 7vw;
    font-size: 56px;
    font-weight: 800;
    letter-spacing: 1px;
    line-height: 75px;
    writing-mode: vertical-rl;
    color: #000;
    text-decoration: underline;

    @include respond(tab-mid) {
      font-size: 50px;
      line-height: 70px;
      margin-left: 0;
    }
  }

  .content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;

    .items {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-gap: 30px;

      @include respond(big-desktop) {
        grid-template-columns: auto auto auto auto;
        grid-gap: 35px;
      }
      

      .item {
        width: 25.65vh;
        max-width: 250px;
        height: 38vh;
        max-height: 370px;
        background-color: grey;
        cursor: pointer;
        overflow: hidden;
        transition: box-shadow 1s ease;

        @include respond(tab-mid) {
          width: 23.63vh;
          height: 35vh;
        }

        .item-poster {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 50%;
          transition: transform 1s ease;
        }
      }

      .item:hover {
        box-shadow: 13px 13px 0px rgba(#000, .6);

        @include respond(big-desktop) {
          box-shadow: 16px 16px 0px rgba(#000, .8);
        }

        @include respond(tab-mid) {
          box-shadow: 13px 13px 0px rgba(#000, .5);
        }

        .item-poster {
          transform: scale(1.02);
        }
      }
    }
  }
}
</style>
