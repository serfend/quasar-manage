<template>
   <div>
    <lottie-web-SGT style="height: 80vh" :path="`${this.$PUBLIC_PATH}lotties/404.json`"/>
     <div class="row justify-center">
     <q-btn
       icon="arrow_back"
       class="bg-logon-card-input"
       text-color="white"
       unelevated
       label=""
       style="font-size: large;width: 200px"
       @click="back"
     >返 回
     </q-btn>
     </div>
   </div>
</template>

<script>
import LottieWebSGT from '../LottieWebSGT'

export default {
  name: 'NoFound404',
  components: { LottieWebSGT },
  methods: {
    back () {
      window.history.back(-1)
    }
  }
}
</script>
<style lang="css">
  .bg-logon-card-input{
    background:  linear-gradient(to right, #36d1dc 1%, #5b86e5 99%);
    transition: all 0.3s ease-in-out;
    background-size: 200% auto;
  }

  .bg-logon-card-input:hover{
    background-position: right center;
    box-shadow: 0 12px 20px -11px #5b86e5;
  }
</style>
