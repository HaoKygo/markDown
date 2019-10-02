Vue.filter('date', time => moment(time).format('YY/MM/DD, HH:mm'));

new Vue({
    el: "#mdNotebook",
    
    data: { // 数据 
        notes: JSON.parse(localStorage.getItem('notes')) || [],
        selectedId: null, // 选中笔记的id
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

    watch: {
        notes: { // notes数组的侦听器
          handler: 'saveNotes',
          deep: true,
        },
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
        selectNote(note) { // 选中笔记
            this.selectedId = note.id;
        },
        saveNotes() {   // 保存notes数组的JSON字符串到localStorage
            // 把notes数组转换为JSON字符串
            localStorage.setItem('notes', JSON.stringify(this.notes));
            // console.log('笔记保存成功！', new Date());
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
    },
});