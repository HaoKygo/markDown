<template>
  <aside class="preview" v-html="notePre">
  </aside>
</template>

<script>
export default {
  name: 'PreviewPanel',
  props: ['notePre']
}
</script>

<style scoped>
.preview {
  width: 40%;
  height: 100%;
  position: fixed;
  left: 61%;
  top: 2px;
  background: #f5f7f9;
  padding: 12px 5px;
  transition: all .2s ease-in-out;
}
.preview p:first-child {
  margin-top: 0;
}

/* HTML style */
a {
  color: #40b883;
}

h1,
h2,
h3 {
  margin: 10px 0 4px;
  color: #40b883;
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.5em;
}

h3 {
  font-size: 1.2em;
}

h4 {
  font-size: 1.1em;
  font-weight: normal;
}
</style>
