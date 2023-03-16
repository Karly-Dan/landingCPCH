<template>
  <div>
    <header-vue />
    <div class="registro">
        <div class="div-registro">
            <h1 class="titulo-registro">Contactanos</h1>
        </div>
        <div class="input-registro">
            <input-vue
            placeholderInput="Ingresa tu nombre"
            titulo="Nombre*" 
            />
            <input-vue
            placeholderInput="Ingresa tu correo electronico"
            titulo="Correo electronico*"
            class="input-correo" 
            />
            <input-vue
            placeholderInput="Ingresa tu número telefonico"
            titulo="Telefono*"
            />
            <label class="label-select" for="">¿Con que perfil laboral te identificas?</label>
            <select  class="select" name="" id="">
                <option value="" hidden>Selecciona una opción</option>
                <option value="">Soy dueño de negocio</option>
                <option value="">Soy instructor</option>
                <option value="">Soy docente</option>
                <option value="">Soy profesional independiente</option>
                <option value="">Otro</option>
            </select>
            <div class="contenedor-b-registro">
                <button-vue
                texto="Enviar"
                class="button-registro"
                />
            </div>
        </div>
    </div>
    <footer-vue />
  </div>
</template>

<script>
import buttonVue from '../components/button.vue'
import footerVue from '../components/footer.vue'
import headerVue from '../components/header.vue'
import inputVue from '../components/input.vue'

export default {
    components: {
        buttonVue,
        headerVue,
        footerVue,
        inputVue,
    },
}
</script>

<style>
body {
    margin: 0;
}
div {
  font-family: Arial, Helvetica, sans-serif;
}
.titulo-registro {
    background-color: #021373;
    color: white;
    margin: 0;
}
.input-registro {
    border: 1px solid gray;
}
.select {
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  border: transparent;
  background: #f7f7f7;
  padding-left: 11px;
  outline: none;
  height: 49px;
  color: #686464;
  margin-top: 5px;
  margin-bottom: 10px;
}
.input-registro {
    padding-top: 10px;
}

@media (max-width: 776px) {
  .registro {
    width: 90%;
    margin: auto;
    height: 495px;
  }
  .titulo-registro {
    text-align: center;
  }
  .select {
    display: block;
    width: 94%;
    margin-left: auto;
    margin-right: auto;
  }
  .label-select {
    margin-left: 12px;
  }
  .button-registro {
    width: 190px;
    margin-bottom: 10px;
  }
  .contenedor-b-registro {
    display: flex;
    justify-content: center;
  }
  
}

@media (min-width: 1024px) {
    .input-registro {
        padding: 30px;
        display: grid;
    }
    .contenedor-input {
        display: grid;
    }
    .registro {
        width: 30%;
        margin: auto;
        height: 595px;
        margin-top: 35px;
    }
    .titulo-registro {
        padding-left: 30px;
    }
    .button-registro {
        float: right;
        width: 265px;
        
    }
    
    

}
</style>