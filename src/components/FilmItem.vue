<template>
  <div class="item">
    <div class="item-poster">
      <img
        :src="item.poster"
        :alt="item.name"
      />
      <div
        class="cover-bg"
        :class="{ 'invalid': selected }"
      />
    </div>
    <button class="btn-select">
      <i v-if="selected"  class="fas fa-heart" @click="remove(item)"></i>
      <i v-else class="far fa-heart" @click="select(item)"></i>
    </button>
    <div class="info">
      <div class="name">{{ item.name }}</div>
      <div class="year">{{ item.year }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from "vuex";
import { Film } from '@/data/films';

export default defineComponent({
  props: ['item'],
  data() {
    return {
      selected: false
    }
  },
  computed: {
    ...mapState(["selectedFilms"])
  },
  mounted() {
    this.selected = this.selectedFilms.includes(this.item);
  },
  methods: {
    select(item: Film) {
      if (this.selectedFilms.length < 6) {
        this.selected = true;
        this.$store.dispatch("selectFilm", {
          type: 'add',
          item
        });
      }
    },
    remove(item: Film) {
      this.selected = false;
      this.$store.dispatch("selectFilm", {
        type: 'remove',
        item
      });
    }
  }
})
</script>

<style lang="scss" scoped>

.item {
  position: relative;
  margin: 10px;

  &:hover > .item-poster .cover-bg {
    background-color: rgba(#000, 0);
  }

  .item-poster {
    position: relative;
    width: 135px;
    height: 200px;

    .cover-bg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(#000, .25);
    }

    .cover-bg.invalid {
      background-color: rgba(#000, 0);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .btn-select {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: transparent;
    border: 0;
    outline: 0;
    font-size: 20px;
    color: #fff;
    cursor: pointer;

    .far.fa-heart {
      color: rgba(#fff, .8);
    }

    .fas.fa-heart {
      color: #e4002b;
      text-shadow: 0 0 10px #fff;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 4px; 
    color: #EBEBEB;
    font-weight: 300;

    .name {
      font-size: 14px;
    }

    .year {
      font-size: 12px;
      line-height: 1.4rem;
    }
  }
}
</style>
