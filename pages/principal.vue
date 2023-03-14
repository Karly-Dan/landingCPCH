<template>
  <main>
    <header-vue />
    <barra-vue />
    <div class="contenedor-informativo">
        <div class="texto-informativo">
            <h1 class="titulo-informativo">EC0217.01 Impartición de cursos de formación del capital humano de manera presencial grupal</h1>
            <p>Descripción del Estándar de Competencia:
                El estándar de competencia impartición de cursos de formación del capital humano de manera presencial y grupal contempla las funciones sustantivas de preparar, conducir y evaluar cursos de capacitación. Preparar la sesión mediante la planeación de la sesión y la comprobación de la existencia y el funcionamiento de los recursos requeridos para la sesión. Conducir la sesión realizando el encuadre, desarrollo y cierre, empleando técnicas instruccionales y grupales que faciliten el proceso de aprendizaje. Evaluar el aprendizaje antes, durante y al final del curso, considerando la satisfacción de los participantes/capacitandos.
                <br>
                <br>
                El presente EC se fundamenta en criterios rectores de legalidad, competitividad, libre acceso, respeto, trabajo digno y responsabilidad social.
                <br>
                <br>
                El presente EC actualiza al EC0217 “Impartición de cursos de formación del capital humano de manera presencial grupal”, publicado en el Diario Oficial de la Federación el 6 de julio de 2012.
            </p>
        </div>
        <div class="contenedor-i-p">
            <img src="../assets/administradora.jpg" alt="imagen" class="imagen-principal">
        </div>
    </div>
     <div class="button">
        <button-vue
        texto="!Ver todos los cursos¡" 
        />
    </div>
    <footer-vue />
  </main>
</template>

<script>
import barraVue from '../components/barra.vue'
import buttonVue from '../components/button.vue'
import footerVue from '../components/footer.vue'
import headerVue from '../components/header.vue'

export default {
    components: {
        barraVue,
        buttonVue,
        headerVue,
        footerVue,
    },
}
</script>

<style>
body {
    margin: 0;
}
.lineas {
    border-radius: 2px;
    height: 2px;
    background-color: black;
}
.button {
    margin-bottom: 20px;
    text-align: center;
}


@media (max-width: 776px) {
  .texto-informativo {
    width: 90%;
    margin: auto;
    text-align: justify;
  }
  .titulo-informativo {
    text-align: initial;
  }
  .imagen-principal {
    width: 350px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
}

@media (min-width: 1024px) {
    .contenedor-informativo {
        display: flex;
        height: 436px;
    }
    .texto-informativo {
        height: 311px;
        width: 64%;
    }
    .imagen-principal {
        margin-top: 23px;
    }

}
</style>