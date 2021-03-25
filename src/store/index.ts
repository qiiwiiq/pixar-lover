import { createStore } from "vuex";
import { Film } from '@/data/films';

interface State {
  selectedFilms: Film[]
}

export default createStore<State>({
  state: {
    selectedFilms: []
  },
  mutations: {
    addFilm(state, item) {
      state.selectedFilms.push(item);
    },
    removeFilm(state, item) {
      state.selectedFilms = state.selectedFilms.filter(film => film.name !== item.name);
    },
  },
  actions: {
    selectFilm({ commit }, payload) {
      if (payload.type === 'add') {
        commit('addFilm', payload.item);
      } else if (payload.type === 'remove') {
        commit('removeFilm', payload.item);
      }
    }
  },
  modules: {

  }
});
