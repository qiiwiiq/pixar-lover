<template>
  <div class="page-carousel">
    <div class="info">
      <div class="index">
        <span class="current-index">{{ index + 1 }}</span>
        / {{ randomFilms.length }}
      </div>
      <div class="movie">
        <div class="name">{{ randomFilms[index].name }}</div>
        <div class="year">— {{ randomFilms[index].year }}</div>
      </div>
    </div>
    <div class="content">
      <i
        v-if="index !== 0"
        class="btn-prev fas fa-chevron-left"
        @click="showPrev"
      />
      <i
        v-if="index < randomFilms.length - 1"
        class="btn-next fas fa-chevron-right"
        @click="showNext"
      />
      <i class="btn-close fas fa-times-circle" @click="close"></i>
      <div class="carousel">
        <div
          class="image-container"
          :style="{ transform: 'translateX('+ (- index * 54) + 'vh)' }"
        >
          <template v-for="item in randomFilms" :key="item.imdbId">
            <img
              :src="item.poster"
              :alt="item.name"
              class="poster"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Film } from '@/data/films';

export default defineComponent({
  props: [
    "randomFilms",
    "selectedItem"
  ],
  data() {
    return {
      index: 0
    }
  },
  mounted() {
    this.index = this.randomFilms.findIndex((film: Film) => film.imdbId === this.selectedItem.imdbId);
  },
  methods: {
    showPrev() {
      if (this.index > 0) this.index--;
    },
    showNext() {
      if (this.index < (this.randomFilms.length - 1)) this.index++;
    },
    close() {
      this.$emit("closeCarousel");
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/style/mixins.scss';

.page-carousel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(#000, .9);
  display: flex;
  justify-content: center;
  align-items: center;

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 240px;
    height: 80vh;
    padding-right: 80px;
    color: #fff;

    @include respond(tab-mid) {
      width: 200px;
    }

    .index {
      font-size: 24px;

      @include respond(tab-mid) {
        font-size: 20px;
      }

      .current-index {
        font-size: 50px;
        font-weight: bold;
        vertical-align: bottom;

        @include respond(tab-mid) {
          font-size: 46px;
        }
      }
    }

    .movie {
      font-weight: bold;
      padding-left: 12px;

      .name {
        font-size: 24px;
        margin-bottom: 8px;

        @include respond(tab-mid) {
          font-size: 20px;
        }
      }

      .year {
        font-size: 16px;

        @include respond(tab-mid) {
          font-size: 14px;
        }
      }
    }
  }

  .content {
    position: relative;

    .btn-prev,
    .btn-next {
      padding: 20px;
      position: absolute;
      top: 50%;
      color: rgba(#fff, .9);
      transform: translateY(-50%);
      font-size: 40px;
      cursor: pointer;
      z-index: 100;

      @include respond(tab-mid) {
        font-size: 36px;
      }
    }

    .btn-prev {
      left: -80px;

      @include respond(tab-mid) {
        left: -62px;
      }
    }

    .btn-next {
      right: -80px;

      @include respond(tab-mid) {
        right: -62px;
      }
    }

    .btn-close {
      position: absolute;
      top: 24px;
      right: 24px;
      color: #fff;
      font-size: 22px;
      text-shadow: 0.1em 0.1em 0.2em #000;
      cursor: pointer;
      z-index: 999;
    }

    .btn-close:active {
      transform: scale(0.9);
    }

    .carousel {
      box-sizing: content-box;
      border: 16px solid #fff;
      border-radius: 10px;
      width: 54vh;
      height: 80vh;
      overflow: hidden;

      .image-container {
        display: flex;
        transform: translateX(0);
        transition: transform .5s ease-in-out;
      }

      .poster {
        width: 54vh;
        min-width: 100%;
        height: 80vh;
        min-height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>