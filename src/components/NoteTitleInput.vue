<template>
  <div class="notes-title-input">
    <label class="input-label">标题：</label>
    <input class="title-input" type="text" placeholder="笔记标题"
      :value="value"
      @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: 'NoteTitleInput',
  props: ['value']
}
</script>

<style scoped>
.notes-title-input {
  margin: 5px 0;
  padding: 10px 0;
  font-size: 18px;
  text-align: center;
  background: #40b883;
}
.input-label {
  color: white;
}
.title-input {
  border: solid 2px #ade2ca;
  border-radius: 3px;
  padding: 6px 10px;
  background: #f0f9f5;
  color: #666;
}
.title-input:focus {
  border-color: #40b883;
  background: white;
  color: black;
}
</style>
