<template>
  <div id="app">
    <aside class="tool-bar">
      <!-- 添加删除按钮 -->
      <ctl-button :text="addBtnText"
        @btn-clicked="addNote">
      </ctl-button>
      <ctl-button :text="deleteBtnText"
        @btn-clicked="deleteNote">
      </ctl-button>
      <!-- 标题修改部件 -->
      <note-title-input v-if="selectedNote" v-model="selectedNote.title">
      </note-title-input>
      <!-- 笔记标题列表 -->
      <div class="notes-item">
        <note-item v-for="(note, index) in notes" :key="index"
          @note-clicked="selectNote(note)"
          :title="note.title"
          :isSelected="note === selectedNote">
        </note-item>
      </div>
    </aside>
    <template v-if="selectedNote">
      <main-edit-panel v-model="selectedNote.content" 
        :createdDate="selectedNote.created | date">
      </main-edit-panel>
      <preview-panel :notePre="notePreview"></preview-panel>
    </template>
  </div>
</template>

<script>
import marked from 'marked'
import moment from 'moment'
import CtlButton from './components/CtlButton.vue'
import NoteItem from './components/NoteItem.vue'
import NoteTitleInput from './components/NoteTitleInput.vue'
import MainEditPanel from './components/MainEditPanel.vue'
import PreviewPanel from './components/PreviewPanel.vue'

export default {
  name: 'App',
  components: {
    CtlButton,
    NoteItem,
    NoteTitleInput,
    MainEditPanel,
    PreviewPanel
  },
  data() {
    return {
      notes: JSON.parse(localStorage.getItem('notes')) || [],
      selectedId: null,  // 选中笔记id
      addBtnText: '+ 添加',
      deleteBtnText: '- 删除'
    }
  },
  computed: { // 计算属性
    notePreview() { // 显示markdown笔记
      return this.selectedNote ? marked(this.selectedNote.content) : '';
    },
    calAddTitle() {
      return '已添加'+this.notes.length + '条笔记';
    },
    selectedNote() { // 返回与selectedId匹配的笔记
      return this.notes.find(note => note.id === this.selectedId);
    }
  },
  methods: {
    addNote() { // 添加新笔记
      const time = Date.now();
      const note = {
        id: String(time),
        title: '新笔记 ' + (this.notes.length+1),
        content: '**Hello！**你可以用[markdown]' + 
        '(https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)来写笔记！',
        created: time,
      };
      this.notes.push(note);
    },
    deleteNote() {
      if (this.selectedNote && confirm("确定删除笔记？")) {
        // 删除选中笔记
        const index_note = this.notes.indexOf(this.selectedNote);
        if(index_note !== -1) {
          this.notes.splice(index_note, 1);
        }
      }
    },
    selectNote(note) { // 选中笔记
      this.selectedId = note.id;
    },
    saveNotes() {   // 保存notes数组的JSON字符串到localStorage
      // 把notes数组转换为JSON字符串
      localStorage.setItem('notes', JSON.stringify(this.notes));
    },
  },
  watch: {
    notes: { // notes数组的侦听器
      handler: 'saveNotes',
      deep: true,
    }
  },
  filters: {
    date: time => moment(time).format('YY/MM/DD, HH:mm')
  }
}
</script>

<style>
#app {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  height: 100%;
  font-size: 16px;
}
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
</style>
