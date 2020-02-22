<template>
  <aside class="tool-bar">
    <div class="add" @click="$emit('add-note')">+ 添加</div>
    <div class="delete" @click="$emit('delete-note')">- 删除</div>

    <div class="notes-title-input">
      <label class="input-label">标题：</label>
      <input class="tite-input" type="text" placeholder="笔记标题">
    </div>

    <div class="notes-items">
      <div class="note">
        notetitle
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'ToolBar'
}
</script>

<style scoped>
.tool-bar {
  width: 20%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  background: #f5f7f9;
  transition: all .2s ease-in-out;
}

.add,
.delete {
  font-size: 20px;
  color: white;
  background: #40b883;
  text-align: center;
  cursor: default;
  margin: 2px 0;
  padding: 10px 0;
  transition: all .4s ease-in-out;
}
.add:hover,
.delete:hover{
  background: #63c89b;
  border: 2px solid pink;
}

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
