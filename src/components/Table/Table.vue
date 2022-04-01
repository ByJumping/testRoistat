<template>
  <div class="main__table">
    <Button title="Добавить" @click="this.$emit('openPopup')"/>
    <div class="main__persons">
      <div class="main__persons_item" @click="this.$emit('sortName')" style="cursor: pointer">Имя</div>
      <div class="main__persons_item" style="cursor: pointer">Телефон</div>
    </div>

    <table v-for="(person, i) in personsData" :key="i">
      <tr>
        <td>{{ person.name }}</td>
        <td>{{ person.phone }}</td>
      </tr>

      <tr class="boss">
        <td
            v-for="(boss, idx) in person.boss"
            :key="idx"
        >{{boss}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Button from "@/components/Button/Button";
export default {
  name: "Table",
  components:{Button},
  props: {
    personsData: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>