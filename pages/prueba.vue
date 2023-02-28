<template>
    <main style=" font-family: Arial, Helvetica, sans-serif;">
        <div style="width: 95%; margin: auto;">
            <headerVue/>
                <img src="../assets/index-2.png" alt="" style="float: right; margin-top: -62px;">
            <div style="margin-top: 32px;">
                <h1 style="font-size: 25px; text-align: justify;">ECO217 Impartición de cursos de formación del capital humano de manera presencial grupal</h1>
            </div>
            <div class="imagen">
                <img src="../assets/puesta-en-marcha.png" alt="" style="transform: translate(17%, 30%);">
            </div>
            <div style="text-align: justify; position: relative;">
                <p>
                    Descripción del Estándar de Competencia: 
                    <br>
                    <br>
                    El estándar de competencia impartición de cursos de formación del capital humano de manera presencial y grupal contempla las funciones sustantivas de preparar, conducir y evaluar cursos de capacitación. Preparar la sesión mediante la planeación de la sesión y la comprobación de la existencia y el funcionamiento de los recursos requeridos para la sesión. Conducir la sesión realizando el encuadre, desarrollo y cierre, empleando técnicas instruccionales y grupales que faciliten el proceso de aprendizaje. Evaluar el aprendizaje antes, durante y al final del curso, considerando la satisfacción de los participantes/capacitandos.
                    <br>
                    <br>
                    El presente EC se fundamenta en criterios rectores de legalidad, competitividad, libre acceso, respeto, trabajo digno y responsabilidad social.
                    <br>
                    <br>
                    El presente EC actualiza al EC0217 “Impartición de cursos de formación del capital humano de manera presencial grupal”, publicado en el Diario Oficial de la Federación el 6 de julio de 2012.
                </p>
            </div>
        </div>
        <div style="background-color: #dcdcdc8a; height: 470px; padding-top: 20px;">
            <div style="display: grid; width: 85%; margin: auto; box-shadow: rgba(46, 113, 240, 0.4) -5px 5px, rgba(46, 140, 240, 0.3) -10px 10px, rgba(46, 131, 240, 0.2) -15px 15px, rgba(46, 122, 240, 0.1) -20px 20px, rgba(46, 140, 240, 0.05) -25px 25px; padding: 5px; background-color: white;">
                <h1 style="margin-left: 11px; color: #686464;">Registro</h1>
                <label for="">
                    
                    <input type="text" name="" id="" placeholder="NOMBRE">
                </label>
                <label for="">
                    
                    <input type="email" name="" id="" placeholder="CORREO">
                </label>
                <label for="">
                    
                    <input type="text" name="" id="" placeholder="NÚMERO TELEFONICO">
                </label>
                <label for="cars">¿Con que perfil laboral te identificas?</label>
                <select name="cars" id="cars">
                    <option value="" hidden>Selecciona una opción</option>
                    <option value="">Soy dueño de negocio</option>
                    <option value="">Soy instructor</option>
                    <option value="">Soy docente</option>
                    <option value="">Soy profesional independiente</option>
                    <option value="">Otro</option>
                </select>
                <p style="margin-bottom: 20px;  margin-left: 11px; color: #686464;">Tus datos están 100% seguros no los compartiremos con nadie.</p>
            </div>
        </div>
        <footer-vue
        />
    </main>
</template>

<script>
import headerVue from '../components/header.vue'
import footerVue from '../components/footer.vue'
export default {
  components: { 
    headerVue,
    footerVue, 
    },
}
</script>

<style>
body {
    margin: 0;
}
label {
    margin-bottom: 10px;
    margin-left: 11px;
    color: #686464;
}
input {
    margin-top: 5px;
    outline: none !important; 
}
.imagen {
    background-repeat: no-repeat;
    position: absolute;
    opacity: 0.4;
}
select {
    border-radius: 23.5px;
    border: transparent;
    background: #f7f7f7;
    height: 47px;
    padding: 0 24px;
    color: gray;
    border-right: 8px solid transparent;
}
</style>