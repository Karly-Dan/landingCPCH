<template>
  <button class="button">
    {{texto}}
</button>
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
    color: #0d0d0d; 
    border: 2px solid #021373;
    background-color: white;
    cursor: pointer;
    border-radius: 3px;
    margin-top: 20px;
    height: 45px;
    letter-spacing: 4.6px;
    padding: 5px;
    text-align: center;
    border-radius: 23.5px;

}


@media (max-width: 776px) {
    .button {
        margin-top: 19px;
        margin-bottom: 20px;
    }
}

@media (min-width: 1024px) {
    .button {
        margin-top: 5px;
    }
}
</style>