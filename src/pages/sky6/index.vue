<template>
  <q-card>
    <q-card-section>
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
    </q-card-section>
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
      const { Sequelize, DataTypes } = window.require('sequelize')
      // 方法 2: 分别传递参数 (sqlite)
      const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: 'sgt.tool.sqlite'
      })
      try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
        const User = sequelize.define(
          'User',
          {
            // 在这里定义模型属性
            firstName: {
              type: DataTypes.STRING,
              allowNull: false
            },
            lastName: {
              type: DataTypes.STRING
              // allowNull 默认为 true
            }
          },
          {
            // 这是其他模型参数
          }
        )
        console.log(User)
      } catch (error) {
        console.error('Unable to connect to the database:', error)
      }
    }
  }
}
</script>

<style>
</style>
