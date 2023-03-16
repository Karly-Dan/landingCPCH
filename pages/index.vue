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
            v-model="form.name"
            />
            <input-vue
            placeholderInput="Ingresa tu correo electronico"
            titulo="Correo electronico*"
            class="input-correo"
            v-model="form.email"
            />
            <input-vue
            placeholderInput="Ingresa tu número telefonico"
            titulo="Telefono*"
            v-model="form.phone"
            />
            <label class="label-select" for="">¿Con que perfil laboral te identificas?</label>
            <select  class="select" name="" id="" v-model="form.jobProfile">
                <option value="" hidden>Selecciona una opción</option>
                <option value="Soy dueño de negocio">Soy dueño de negocio</option>
                <option value="Soy instructor">Soy instructor</option>
                <option value="Soy docente">Soy docente</option>
                <option value="Soy profesional independiente">Soy profesional independiente</option>
                <option value="Otro">Otro</option>
            </select>
            <input-vue
            titulo="Con que otro perfil laboral te identificas"
            v-show="form.jobProfile === 'Otro'"
            />
            <label class="label-select" for="">Selecciona el estándar de tu interés</label>
            <select  class="select" name="" id="">
                <option value="" hidden>Selecciona una opción</option>
                <option value="Soy dueño de negocio">ECO127.01 Impartición de cursos de formación del capital humano de manera presencial grupal.</option>
                <option value="Soy instructor">ECO154 Prestación de los servicios de limpieza</option>
                <option value="Soy docente">Microsoft</option>
            </select>
            <div class="contenedor-b-registro">
                <button-vue
                @click="sendForm"
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
import { firestore } from '../plugins/firebase'
import { doc, setDoc } from 'firebase/firestore'
import Swal from 'sweetalert2'

export default {
    components: {
        buttonVue,
        headerVue,
        footerVue,
        inputVue,
    },
    data: function () {
        return {
            form: {
                name: '',
                phone: '',
                email: '',
                jobProfile: '',
            },
        }
    },
    methods: {
        async sendForm() {
            const ref = doc(firestore, 'leads', self.crypto.randomUUID())
            await setDoc(ref, this.form)
            Swal.fire({
                title: 'Recibimos tus datos',
                text: 'Pronto te contactaremos',
                icon: 'success',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#D90404'
            })
            .then(() => window.location.href = 'https://cpcapitalhumano.com.mx')
        },
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
    height: 700px;
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

@media (min-width: 768px) and (max-width: 1023px) {
    .logo-c {
        height: 130px;
    }
    .contenedor-input {
        display: grid;
    }
    .registro {
        width: 50%;
        margin: auto;
        height: 768px;
        margin-top: 50px;
    }
    .input-registro {
        display: grid;
        padding: 15px;
        height: 560px;
    }
    .contenedor-b-registro {
        display: flex;
        justify-content: center;
    }
    .titulo-registro {
        padding-left: 15px;
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
    .contenedor-b-registro {
        display: flex;
        justify-content: center;
    }
    
    

}
</style>