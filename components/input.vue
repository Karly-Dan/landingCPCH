<template>
  <div class="contenedor-input">
    <label class="label" for="">{{ titulo }}</label>
    <input type="text"  :placeholder="placeholderInput" class="input-base">
  </div>
</template>

<script>
export default {
  props: {
    placeholderInput: {
      type: String,
      default: '',
    },
    titulo: {
      type: String,
      default: '',
    },
  },
}
</script>

<style>
.input-base {
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  border: transparent;
  background: #f7f7f7;
  padding-left: 11px;
  outline: none;
  height: 47px;
  color: #686464;
  margin-top: 5px;
}
.contenedor-input {
  margin-bottom: 10px;
}



@media (max-width: 776px) {
  .input-base {
    display: block;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
  .label {
    margin-left: 12px;
  }
}

</style>



