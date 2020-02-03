<template>
  <div id="app">
    <h1>Eris Test</h1>
    <div>
      <div class="btn-group">
        <div class="btn-item">
          <div class="btn btn-green" @click="showCreateForm">Create</div>
        </div>

        <div class="btn-item">
          <div class="btn btn-red" @click="deletePerson">Delete</div>
        </div>

        <div class="btn-item" @click="showCreate = false">
          <VSelect :items="genders" default-text="Gender filter" @selected="setFilterValue" />
        </div>
      </div>

      <div class="mt-20" v-show="showCreate">
        <CreatePerson />
      </div>

      <div class="mt-20">
        <PeopleTable :people="people" />
      </div>
    </div>
  </div>
</template>

<script>
import c from "./helpers/constants";
import { mapGetters, mapActions } from "vuex";
import PeopleTable from "./components/PeopleTable";
import PeopleService from "./services/PeopleSevice";
import CreatePerson from "./components/CreatePerson";
import VSelect from "./components/UI/VSlect";

export default {
  name: "HelloWorld",
  data() {
    return {
      showCreate: false,
      filterValue: c.ALL
    };
  },
  components: {
    PeopleTable,
    CreatePerson,
    VSelect
  },
  computed: {
    ...mapGetters({
      getGenders: "getGenders",
      getPeopleByGender: "getPeopleByGender"
    }),
    genders() {
      return [c.ALL].concat(this.getGenders);
    },
    people: function() {
      return this.getPeopleByGender(this.filterValue);
    }
  },
  methods: {
    ...mapActions(["loadPeople", "deletePerson", "loadGenders"]),
    showCreateForm() {
      this.showCreate = !this.showCreate;
    },
    setFilterValue(value) {
      this.filterValue = value;
    }
  },
  created() {
    this.loadPeople(PeopleService.people);
    this.loadGenders(PeopleService.genders);
  }
};
</script>

<style>
.border-bottom {
  border-bottom: 1px solid #2c3e50 !important;
}

.p-10 {
  padding: 5px;
}

.width-full {
  width: 100%;
  justify-content: center;
  display: flex;
}

.mt-20 {
  margin-top: 20px;
}

.btn-group {
  display: flex;
  justify-content: center;
}

.btn-item {
  margin: 0 10px;
}

.btn {
  padding: 6px 10px;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
}

.btn-green {
  background-color: rgba(0, 128, 0, 0.548);
}

.btn-red {
  background-color: rgba(255, 0, 0, 0.411);
}

.btn-blue {
  background-color: rgba(0, 0, 255, 0.486);
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
}
</style>
