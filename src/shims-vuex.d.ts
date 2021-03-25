/* eslint-disable */
import { ComponentCustomProperties } from 'vue';
import { Store } from 'vuex';
import { Film } from '@/data/films';

declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface State {
    selectedFilms: Film[]
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
