<template>
  <div class="ctl-btn" @click="$emit('btn-clicked')">{{ text }}</div>
</template>

<script>
export default {
  name: 'CtlButton',
  props: ['text']
}
</script>

<style scoped>
.ctl-btn {
  font-size: 20px;
  color: white;
  background: #40b883;
  text-align: center;
  cursor: default;
  margin: 2px 0;
  padding: 10px 0;
  transition: all .4s ease-in-out;
}
.ctl-btn:hover {
  background: #63c89b;
  border: 2px solid pink;
}
</style>
