<template>
  <button>{{texto}}</button>
</template>

<script>
export default {
    props: {
        texto: {
            type: String,
            default: '',
        }
    },
}
</script>

<style>
button {
    color: white; 
    border: transparent;
    background-color: #006192;
    cursor: pointer;
    border-radius: 3px;
    margin-top: 20px;
    width: 185px;
    height: 45px;
    letter-spacing: 4.6px;
    padding: 5px;
    text-align: center;
    border-radius: 23.5px;
    margin: auto;
    margin-top: auto;
    margin-top: 10px;

}
</style>