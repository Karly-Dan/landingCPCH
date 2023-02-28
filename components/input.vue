<template>
    <input type="text"  :placeholder="placeholderInput">
</template>

<script>
export default {
  props: {
    placeholderInput: {
      type: String,
      default: '',
    },
  },
}
</script>

<style>
input {
  border-radius: 23.5px;
  border: transparent;
  background: #f7f7f7;
  height: 47px;
  padding: 0 24px;
  color: gray;
  margin-top: 5px;
  outline: none !important;
  display: inline-grid;
  margin-bottom: 10px;
  margin-left: 11px;
  color: #686464;
}
</style>