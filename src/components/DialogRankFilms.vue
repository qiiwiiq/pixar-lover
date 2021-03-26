<template>
  <div class="dialog-rank-film">
    <button
      class="btn-close"
      @click="close"
    >
      <i class="far fa-times-circle"></i>
    </button>
    <div class="selected-films">
      <template v-for="(item, index) in sortedFilms(films)" :key="item.imdbId">
        <div
          class="item"
          :class="{
            'shift-left': item.shiftLeft,
            'shift-right': item.shiftRight,
            'invisible': item.dragged
          }"
          draggable="true"
          @dragstart="dragstart(index)"
          @dragenter="dragenter(index)"
          @dragover="dragover(index)"
          @dragleave="dragleave(index)"
          @dragend="dragend(index)"
        >
          <div class="item-rank">{{ item.rank }}</div>
          <div class="item-poster">
            <img
              :src="item.poster"
              :alt="item.name"
              draggable="false"
            />
          </div>
          <div class="info">
            <div class="name">{{ item.name }}</div>
            <div class="year">{{ item.year }}</div>
          </div>
        </div>
      </template>
    </div>

    <div class="rank-actions">
      <button class="btn-action btn-reorder">Reorder</button>
      <button class="btn-action btn-submit">Submit</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from "vuex";
import { Film, RankFilm } from '@/data/films';

export default defineComponent({
  data() {
    return {
      films: [] as [] as RankFilm[],
      dragItem: {
        preIndex: undefined as unknown as number,
        newIndex: undefined as unknown as number
      }
    }
  },
  mounted() {
    this.selectedFilms.forEach((item: Film, index: number) => {
      const film: RankFilm = {
        rank: index + 1,
        shiftLeft: false,
        shiftRight: false,
        dragged: false,
        ...item
      };
      this.films.push(film);
    });
  },
  computed: {
    ...mapState(["selectedFilms"])
  },
  methods: {
    sortedFilms(films: RankFilm[]) {
      if (films.length > 0) {
        return films.sort((a: RankFilm, b: RankFilm) => a.rank - b.rank)
      } else {
        return [];
      }
    },
    close() {
      this.$emit("closeDialog");
    },
    dragstart(index: number) {
      this.dragItem.preIndex = index;
      setTimeout(() => {
        this.films[index].dragged = true;
      }, 0)
    },
    dragenter(index: number) {
      //
    },
    dragover(index: number) {
      console.log('gragover ', index);
      this.dragItem.newIndex = index;
    },
    dragleave(index: number) {
      //
    },
    dragend(index: number) {
      if (this.dragItem.preIndex < this.dragItem.newIndex) {
        for (let i=this.dragItem.preIndex + 1; i<=this.dragItem.newIndex; i++) {
          this.films[i].rank--;
        }
        this.films[index].rank = this.dragItem.newIndex + 1;
      } else if (this.dragItem.preIndex > this.dragItem.newIndex) {
        for (let i=this.dragItem.newIndex; i<this.dragItem.preIndex; i++) {
          this.films[i].rank++;
        }
        this.films[index].rank = this.dragItem.newIndex + 1;
      }
      this.films[index].dragged = false;
      this.films.forEach((film, i) => {
        film.shiftLeft = false;
        film.shiftRight = false;
      })
    }
  }
})
</script>


<style lang="scss" scoped>
.dialog-rank-film {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 40px 70px;

  .btn-close {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border-radius: 50%;
    border: 0;
    outline: 0;
    font-size: 20px;
    cursor: pointer;
    transition: all .5s;

    &:hover {
      background-color: rgba(#000, .1);
    }
  }

  .selected-films {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    .item {
      position: relative;
      padding: 10px 20px;
      margin: 5px 10px;
      border: 1px dashed #ccc;
      cursor: pointer;

      &.shift-left {
        transform: translateX(-30px);
      }

      &.shift-right {
        transform: translateX(30px);
      }

      &.invisible {
        opacity: 0;
      }

      .item-rank {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
        background-color: var(--page-vote-primary);
        color: #fff;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .item-poster {
        position: relative;
        width: 100px;
        height: 148px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 4px; 
        color: #333;
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
  }

  .rank-actions {
    display: flex;
    justify-content: flex-end;

    .btn-action {
      width: 100px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
      border-radius: 5px;
      border: 2px solid var(--page-vote-tertiary);
      outline: none;
      font-size: 16px;
      color: var(--page-vote-tertiary);
      background-color: #fff;
      cursor: pointer;

      &:hover {
        opacity: .9;
      }

      &:active {
        transform: scale(.95);
      }
    }

    .btn-submit {
      background-color: var(--page-vote-tertiary);
      color: #fff;
    }
  }
}
</style>