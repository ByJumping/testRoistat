<template>
  <header class="header">
    <div class="center">
      <nav class="header__navigation">
        <div class="header__navigation_link"></div>
        <div class="header__navigation_link"></div>
        <div class="header__navigation_link"></div>
        <div class="header__navigation_search"></div>
      </nav>
    </div>
  </header>

  <div class="center">
    <main class="main">

      <Table
          :personsData="personsData"
          @openPopup="openPopup"
          @sortName="sortName"
      />

      <Form
          :popupVisible="popupVisible"
          @closePopup="closePopup"
          @setFormData="setFormData"
          :bossData="personsData"
      />

    </main>
  </div>
</template>

<script>

import Form from "@/components/Form/Form";
import Table from "@/components/Table/Table";

export default {
  name: 'App',
  components: {Table, Form},
  data() {
    return {
      personsData: [
        {name: 'Леонид', phone: '+ 7 941 123 12 12'},
        {
          name: 'Алексей',
          phone: '+ 7 941 123 12 12',
          boss: {
            name: 'Иван',
            phone: '+ 7 941 123 12 12'
          }
        },
        {name: 'Борис', phone: '+ 7 941 123 12 12'},
      ],
      popupVisible: false
    }
  },
  mounted() {
    if (localStorage.getItem('data')) {
      try {
        const parsed = JSON.parse(localStorage.getItem('data'));
        this.personsData = parsed
      } catch(e) {
        localStorage.removeItem('data');
      }
    }
  },
  methods: {
    openPopup() {
      this.popupVisible = !this.popupVisible
    },
    closePopup() {
      this.popupVisible = false
    },
    setFormData(data) {
      if(data.boss) {
        let boss = this.personsData.find(item => item.name === data.boss)
        this.personsData.push({
          name: data.name,
          phone: data.phone,
          boss: {
            name: boss.name,
            phone: boss.phone
          }
        })
      } else {
        this.personsData.push({
          name: data.name,
          phone: data.phone,
        })
      }

      const parsed = JSON.stringify(this.personsData)

      localStorage.setItem('data', parsed)
    },
    sortName() {
      this.personsData = this.personsData.sort((a, b) => {
        return a.name > b.name ? 1 : -1
      })
    },
  }
}
</script>

<style>

</style>
