<template>
  <div class="contenedor-footer">
    <div class="contenido-direccion">
        <p class="direccion">Av. Camino a la Presa #6, San Isidro la Paz, Nicolás Romero, Edo. Méx. C.P. 54477</p>
        <p class="numero">55-1254-5494</p>
        <a href="/privacidad" class="privacidad">Avisos de Privacidad</a>
    </div>
    <div class="redes">
        <a href="https://web.whatsapp.com/" target="_blank"><img src="../assets/whatsapp.png" alt="whats"></a>
        <a href="https://www.facebook.com/people/Centro-de-Profesionalizaci%C3%B3n-de-Capital-Humano/100086499862025/?mibextid=ZbWKwL" target="_blank"><img src="../assets/facebook(1).png" alt="facebook"></a>
        <a href="https://www.instagram.com/cpch._/?igshid=ZDdkNTZiNTM%3D" target="_blank"><img src="../assets/instagram.png" alt=""></a>
        <a href="https://www.youtube.com/channel/UCfPQmFWnZgEi5mCsbMowUBA" target="_blank"><img src="../assets/youtube(1).png" alt="youtube"></a>
        <a href="mailto:microsoft@cpcapitalhumano.com.mx" target="_blank"><img src="../assets/gmail.png" alt="gmail"></a>
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
    padding-top: 2px;
    font-family: Arial, Helvetica, sans-serif;

}
.redes {
  filter: invert(100%) sepia(6%) saturate(7433%) hue-rotate(241deg) brightness(114%) contrast(91%);
  cursor: pointer;
}
.privacidad {
  color: white;
}
.redes {
  margin-top: 15px;
}
@media (max-width: 776px) {
  .contenedor-footer {
    padding-top: 2px;
  }
  .numero {
    padding-left: 12px;
    padding-right: 12px;
  }
  .redes {
    padding-bottom: 10px;
  }
  .direccion {
    padding: 4px;
  }
}
@media (min-width: 1024px){
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
    .contenido-direccion {
      display: flex;
      justify-content: center;
    }
    .privacidad {
      margin-top: auto;
      margin-bottom: auto;
    }
  }
</style>