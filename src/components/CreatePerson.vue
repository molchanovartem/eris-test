<template>
  <div class="create-person">
    <div class="width-full">
      <div class="errors" v-if="errors.length">
        <ul>
          <li v-for="(error, i) in errors" :key="i">{{ error }}</li>
        </ul>
      </div>
    </div>

    <div class="m-10">
      <input class="input-name" type="text" v-model="newPerson.name" placeholder="Enter name" />
    </div>
    <div class="m-10">
      <VSelect :items="genders" @selected="setGender" default-text="Choose gender" />
    </div>
    <div class="m-10 btn-check" @click="add">
      <font-awesome-icon icon="check" />
    </div>
  </div>
</template>

<script>
import VSelect from "./UI/VSlect";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    VSelect
  },
  data() {
    return {
      newPerson: {
        name: "",
        gender: ""
      },
      errors: []
    };
  },
  computed: { ...mapGetters({ genders: "getGenders" }) },
  methods: {
    ...mapActions(["addPerson"]),
    setGender(data) {
      this.newPerson.gender = data;
    },
    add() {
      if (this.validate()) {
        this.addPerson({
          name: this.newPerson.name,
          gender: this.newPerson.gender
        });
      }
    },
    validate() {
      this.errors = [];

      if (this.newPerson.name === "") {
        this.errors.push("Please enter name");
      }

      if (!this.newPerson.gender) {
        this.errors.push("Please choose gender");
      }

      return this.errors.length == 0;
    }
  }
};
</script>

<style scoped>
.errors {
  margin: 10px;
  width: max-content;
  padding: 10px 30px;
  background-color: lightpink;
  border-radius: 5px;
}

.create-person {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.m-10 {
  margin: 10px;
}

.input-name {
  border: 1px solid #2c3e50;
  border-radius: 5px;
  padding: 6px;
  outline: none;
}

.btn-check {
  cursor: pointer;
  align-self: center;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid #2c3e50;
  color: #fff;
  background-color: #2c3e50;
}

li {
  list-style-type: none;
}

ul {
  margin-left: 0;
  padding-left: 0;
}
</style>
