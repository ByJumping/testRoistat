<template>
  <transition appear name="fade">
    <div class="main__popup" v-show="popupVisible">
      <div class="main__popup_title">
        <h3>Добавление пользователя</h3>
        <p @click="closePopup">Закрыть</p>
      </div>

      <div class="form">
        <div class="form__input">
          <label for="name">Имя</label>
          <input id="name" v-model="formData.name"/>
        </div>

        <div class="form__input">
          <label for="phone">Телефон</label>
          <input type="text" id="phone" v-model="formData.phone" v-maska="'+7 ### ### ## ##'"/>
        </div>

        <div class="form__input">
          <label for="boss">Начальник</label>
          <select id="boss" v-model="formData.boss">
            <option disabled value="Выберите начальника">Выберите начальника</option>
            <option v-for="(name, i) in bossData" :key="i">{{name.name}}</option>
          </select>
        </div>
      </div>

      <Button title="Сохранить" @click="saveFormData"/>
    </div>
  </transition>
</template>

<script>
import Button from "@/components/Button/Button";

export default {
  name: "Form",
  components: {Button},
  props: {
    bossData: {
      type: Array,
      default: () => []
    },
    popupVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      formData: {
        name: '',
        phone: ''
      }
    }
  },
  methods: {
    closePopup() {
      this.formData.name = ''
      this.formData.phone = ''

      if (this.formData.boss) {
        this.formData.boss = ''
      }
      this.$emit('closePopup')
    },
    saveFormData() {
      if(this.formData.name !== '' && this.formData.phone !== '') {
        this.$emit('setFormData', this.formData)
        this.formData.name = ''
        this.formData.phone = ''

        if (this.formData.boss) {
          this.formData.boss = ''
        }
      }
    }
  }
}
</script>

<style scoped>

</style>