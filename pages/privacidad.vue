<template>
  <main>
    <header-vue />
    <h1 class="titulo-AP">AVISO DE PRIVACIDAD</h1>
    <div class="contenedor-AP">
      <p>El Centro de Profesionalización de Capital Humano (CPCH), con domicilio en calle Camino a la Presa Mza.1 Lote 6, San Isidro La Paz, Nicolás Romero, Estado de México, 54477, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:
      Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita: 
      </p>
      <b>
        <li>Establecer contacto con usted</li> 
        <li>Realizar el registro de las personas interesadas en participar en las Certificaciones de Competencia Laboral.</li>
        <li>Enviar mensaje de Aceptación del curso de capacitación.</li>
        <li>Realizar la lista de asistencia al curso de capacitación.</li>
        <li>Enviar la Constancia de Participación en la Certificación de Competencia Laboral. </li>
        <li>Realizar el Registro en la página del Consejo de Normalización y Certificación de Competencias Laborales (CONOCER), en caso de resultar competente para obtener su Certificado de Competencia Laboral. </li>
      </b>
      <p>De manera adicional, utilizaremos su información personal para las siguientes finalidades que <b> no son necesarias</b> para el servicio solicitado, pero que nos permiten y facilitan brindarle una mejor atención: </p>
      <b>
        <li>Informar sobre nuevos estándares de competencia laboral. </li>
      </b>
      <p>En caso de que no desee que sus datos personales sean tratados para estos fines adicionales, desde este momento usted nos puede comunicar lo anterior, No consiento que mis datos personales se utilicen para los siguientes fines:
      <br><br>
      Establecer contacto. <br> 
      Informar sobre nuevos estándares de competencia laboral. 
      <br><br>
      La negativa para el uso de sus datos personales para estas finalidades no podrá ser un motivo para que le neguemos los servicios que solicita o contrata con nosotros.
      Para conocer mayor información sobre los términos y condiciones en que serán tratados sus datos personales, como los terceros con quienes compartimos su información personal y la forma en que podrá ejercer sus derechos ARCO (Derechos de acceso, rectificación, cancelación y oposición o la revocación del consentimiento), puede consultar el aviso de privacidad integral en <b>cza.cevaluacion@gmail.com</b> o a los siguientes números telefónicos 55 21685290, 55 12543594.
      </p>
    </div>
  </main>
</template>

<script>
import headerVue from '../components/header.vue'


export default {
    components: {
        headerVue,
    },
}
</script>

<style>
body {
    margin: 0;
}
main {
    font-family: Arial, Helvetica, sans-serif;
}
.contenedor-menu {
  display: none;
}
.contenedor {
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
}
.titulo-AP {
  text-align: center;
  font-size: 20px;
}
.contenedor-AP {
  text-align: justify;
  margin: auto;
}

@media (max-width: 776px) {
  .contenedor-AP {
    width: 85%;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .contenedor-AP {
    width: 90%;
  }
}


@media (min-width: 1024px) {
  .contenedor-AP {
    width: 65%;
  }
}
</style>