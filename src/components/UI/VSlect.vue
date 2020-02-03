<template>
  <div class="select-box" v-on-clickaway="away">
    <div class="select">
      <div @click="showList = !showList">
        {{ selected }}
        <font-awesome-icon class="select-ml-10" icon="caret-down" />
      </div>
      <ul v-show="showList">
        <li v-for="(item, i) in items" :key="i" @click="select(item)">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  mixins: [clickaway],
  props: {
    items: {
      type: Array,
      required: true
    },
    defaultText: {
      type: String,
      default: "Please select"
    }
  },
  data() {
    return {
      selected: this.defaultText,
      showList: false
    };
  },
  methods: {
    away: function() {
      this.showList = false;
    },
    select(item) {
      this.selected = item;
      this.$emit("selected", this.selected);
      this.showList = false;
    }
  }
};
</script>

<style scoped>
.select-box {
  min-width: 150px;
}
.select {
  border: 1px solid #2c3e50;
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  background-color: #fff;
  min-width: 145px;
}

.select-ml-10 {
  margin-left: 10px;
}

.select ul {
  list-style-type: none;
  padding: 0;
}

.select li:hover {
  font-weight: 600;
}

.select li {
  margin: 0 10px;
  border-bottom: 1px solid #2c3e50;
  padding: 5px 0;
  cursor: pointer;
}

.select li:last-child {
  border-bottom: none;
}
</style>
