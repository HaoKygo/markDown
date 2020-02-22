<template>
  <div class="note" @click="$emit('note-clicked')"
    :class="{selected: isSelected}">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'NoteItem',
  props: ['title', 'isSelected']
}
</script>

<style scoped>
.note {
  height: 25px;
  font-size: 18px;
  margin: 2px 0;
  padding: 10px 0;
  text-align: center;
  cursor: pointer;
  border: 2px solid #ade2ca;
  transition: all .4s ease-in-out;
}
.note.selected {
  background: #40b883;
  color: white;
}
.note:hover {
  background: #63c89b;
  border: 4px solid pink;
  color: #ffffff;
  background: #40b883;
}
</style>
