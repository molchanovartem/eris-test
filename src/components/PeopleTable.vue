<template>
  <div class="people-table">
    <table>
      <thead class="border-bottom">
        <th>Name</th>
        <th>Gender</th>
      </thead>
      <tbody>
        <tr v-for="(person, i) in people" :key="i">
          <td class="p-10">{{ person.name }}</td>
          <td class="p-10">{{ person.gender }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    people: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.people-table {
  display: flex;
  justify-content: center;
}
</style>
