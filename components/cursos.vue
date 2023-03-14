<template>
  <div class="contenedor-cursos">
    <img class="imagen-cursos" src="../assets/cursos.jpg" alt="imagen">
    <h1 class="texto-tarjeta">Introduccion del curso</h1>
    <button-vue
    texto="!Ver mas¡" 
    class="button-tarjeta"
    />
  </div>
</template>

<script>
import buttonVue from './button.vue'

export default {
    components: {
        buttonVue,
    }
}
</script>

<style>
.contenedor-cursos {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    width: 26%;
}
.imagen-cursos {
    width: 354px;
}
.texto-tarjeta {
    text-align: center;
}
.button-tarjeta {
    width: 190px;
    display: block;
}
</style>