<template>
    <main style=" font-family: Arial, Helvetica, sans-serif;">
        <div style="width: 92%; margin: auto;">
            <headerVue/>
            <div>
                <h1 style="font-size: 25px; text-align: justify;">ECO217 Impartición de cursos de formación del capital humano de manera presencial grupal</h1>
            </div>
            <div class="imagen">
                <img src="../assets/puesta-en-marcha.png" alt="" style="transform: translate(17%, 35%);">
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
        <div style="background-color: #dcdcdc8a; height: 530px; padding-top: 20px; margin-bottom: 20px;">
            <div style="display: grid; width: 85%; margin: auto; box-shadow: rgba(46, 113, 240, 0.4) -5px 5px, rgba(46, 140, 240, 0.3) -10px 10px, rgba(46, 131, 240, 0.2) -15px 15px, rgba(46, 122, 240, 0.1) -20px 20px, rgba(46, 140, 240, 0.05) -25px 25px; padding: 5px; background-color: white;">
                <h1 style="margin-left: 11px; color: #686464;">Registro</h1>
                <input-vue 
                placeholderInput="NOMBRE*"
                />
                <input-vue 
                placeholderInput="CORREO*"
                />
                <input-vue 
                placeholderInput="NÚMERO TELEFONICO*"
                />
                <label for="cars" style="margin-left: 11px;">¿Con que perfil laboral te identificas?</label>
                <select name="cars" id="cars">
                    <option value="" hidden>Selecciona una opción</option>
                    <option value="">Soy dueño de negocio</option>
                    <option value="">Soy instructor</option>
                    <option value="">Soy docente</option>
                    <option value="">Soy profesional independiente</option>
                    <option value="">Otro</option>
                </select>
                <button-vue
                texto="ENVIAR" 
                />
                <p style="margin-bottom: 20px;  margin-left: 11px; color: #201e1e; font-size: 10px;">Tus datos están 100% seguros no los compartiremos con nadie.</p>
            </div>
        </div>
        <footer-vue
        />
    </main>
</template>

<script>
import headerVue from '../components/header.vue'
import footerVue from '../components/footer.vue'
import inputVue from '../components/input.vue'
import buttonVue from '../components/button.vue'
export default {
  components: { 
    headerVue,
    footerVue, 
    inputVue,
    buttonVue,
    },
}
</script>

<style>
body {
    margin: 0;
}
label {
    margin-bottom: 10px;
    color: #686464;
}
.imagen {
    background-repeat: no-repeat;
    position: absolute;
    opacity: 0.5;
}
select {
    border-radius: 23.5px;
    border: transparent;
    background: #f7f7f7;
    height: 47px;
    padding: 0 24px;
    color: gray;
    border-right: 8px solid transparent;
    max-width: 94%;
}
</style>