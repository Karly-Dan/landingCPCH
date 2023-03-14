<template>
  <div class="contenedor-barra">
    <a class="contenido-a" href="">Acerca de nosotros</a>
    <a class="contenido-a" href="">Contacto</a>
    <a class="contenido-a" href="">Misión y Visión</a>
    <a class="contenido-a" href="">Servicios</a>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.contenedor-barra {
    background-color: #D90404;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 20px;
}
.contenido-a {
    color: white;
    text-decoration: none;
    border-right: 2px solid white;
    padding-right: 25px;
    border-left: 2px solid white;
    padding-left: 25px;
    padding-top: 5px;
    padding-bottom: 5px;
}


@media (max-width: 776px) {
    .contenedor-barra {
        display: none;
    }
}

@media (min-width: 1024px) {

}
</style>