<template>
  <q-card>
    <q-form>
      <q-input
        filled
        v-model="config.host"
        label="地址"
        hint="天擎服务器的地址"
        lazy-rules
        :rules="[ val => val && val.length > 0 || '输入服务器地址']"
      />
    </q-form>
  </q-card>
</template>

<script>
export default {
  name: 'Sky6',
  data: () => ({
    config: {
      host: 'http://32.61.16.3'
    }
  }),
  mounted() {
    this.test()
  },
  methods: {
    async test() {
      const { Sequelize } = require('sequelize')

      // 方法 2: 分别传递参数 (sqlite)
      const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: 'path/to/database.sqlite'
      })
      try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
      } catch (error) {
        console.error('Unable to connect to the database:', error)
      }
    }
  }
}
</script>

<style>
</style>
