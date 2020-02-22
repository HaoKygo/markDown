<template>
  <section class="main">
    <textarea class="note-input"
      :value="value"
      @input="$emit('input', $event.target.value)">
    </textarea>
    <div class="status-bar">
      创建于：<span class="date">{{ createdDate }}</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainEditPanel',
  props: ['value', 'createdDate']
}
</script>

<style scoped>
.note-input {
  width: 40%;
  height: 89%;
  position: fixed;
  left: 20%;
  top: 2px;
  resize: none;
  border: none;
  padding: 12px;
  /* background: #d7dde4; */
  outline: none;
  transition: all .2s ease-in-out;
  font-family: monospace;
  font-size: 18px;
}
.status-bar {
  position: fixed;
  left: 20%;
  bottom: 0;
  width: 40%;
  height: 5%;
  padding: 12px;
}
</style>
