<template>
  <div class="contenedor-footer">
    <div class="contenido-direccion">
        <p class="direccion">Av. Camino a la presa #6, San Isidro la Paz, Nicolás Romero, Edo. Méx. C.P. 54477</p>
        <p class="numero">55-1254-5494</p>
        <p class="privacidad">Avisos de Privacidad</p>
    </div>
    <div class="redes">
        <img src="../assets/whatsapp.png" alt="whats">
        <img src="../assets/facebook(1).png" alt="facebook">
        <img src="../assets/twitter.png" alt="twiter">
        <img src="../assets/instagram.png" alt="">
        <img src="../assets/google-mas.png" alt="google">
        <img src="../assets/linkedin.png" alt="linked">
        <img src="../assets/youtube(1).png" alt="youtube">
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.contenedor-footer {
    background-color: #021373;
    color: white;
    text-align: center;
}
.redes {
  filter: invert(100%) sepia(6%) saturate(7433%) hue-rotate(241deg) brightness(114%) contrast(91%);
}


@media (min-width: 1024px) {
  .contenido-direccion {
    display: flex;
    justify-content: center;
  }
  .direccion, .privacidad {
    border-right: 2px solid white ;
    border-left: 2px solid white;
    padding-left: 12px;
    padding-right: 12px;
  }
  .numero {
    padding-left: 12px;
    padding-right: 12px;
  }
  .redes {
    padding-bottom: 10px;
  }
  .contenedor-footer {
    margin-top: 66px;
  }
}
</style>