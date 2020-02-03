import Vue from "vue";
import Vuex from "vuex";
import c from "../helpers/constants";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    people: [],
    genders: []
  },
  mutations: {
    loadPeople(state, payload) {
      state.people = payload;
    },
    loadGenders(state, payload) {
      state.genders = payload;
    },
    addPerson(state, payload) {
      state.people.push(payload);
    },
    deletePerson(state) {
      state.people.pop();
    }
  },
  actions: {
    loadPeople(context, people) {
      context.commit("loadPeople", people);
    },
    loadGenders(context, genders) {
      context.commit("loadGenders", genders);
    },
    addPerson(context, person) {
      context.commit("addPerson", person);
    },
    deletePerson(context) {
      context.commit("deletePerson");
    }
  },
  getters: {
    getPeople: state => state.people,
    getGenders: state => state.genders,
    getPeopleByGender: state => gender => {
      if (gender === c.ALL) {
        return state.people;
      }
      return state.people.filter(person => person.gender === gender);
    }
  },
  modules: {}
});
