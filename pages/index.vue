<template>
  <div>
    <header-vue />
    <ValidationObserver v-slot="{ handleSubmit }">
    <div class="registro">
        <div class="div-registro">
            <h1 class="titulo-registro">Contactanos</h1>
        </div>
        <div class="input-registro">
            <ValidationProvider rules="letras|requerido" v-slot="{ errors }">
                <input-vue
                placeholderInput="Ingresa tu nombre"
                titulo="Nombre*"
                v-model="form.name"
                />
                <span class="mensaje">{{ errors[0] }}</span>
            </ValidationProvider>

            <ValidationProvider rules="requerido|correo" v-slot="{ errors }">
                <input-vue
                placeholderInput="Ingresa tu correo electronico"
                titulo="Correo electronico*"
                class="input-correo"
                v-model="form.email"
                />
                <span class="mensaje">{{ errors[0] }}</span>
            </ValidationProvider>

            <ValidationProvider rules="numeros|longitud:12|requerido" v-slot="{ errors }">
                <input-vue
                placeholderInput="Ingresa tu número telefonico"
                titulo="Telefono*"
                v-model="form.phone"
                />
                <span class="mensaje">{{ errors[0] }}</span>
            </ValidationProvider>

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
            placeholderInput="Ingresa tu perfil laboral"
            v-show="form.jobProfile === 'Otro'"
            v-model="form.otherJobProfile"
            />
            <label class="label-select" for="">Certificación o curso de tu interés</label>
            <select  class="select" name="" id="" v-model="form.standard">
                <option value="" hidden>Selecciona una opción</option>
                <option value="EC0217.01 Impartición de cursos de formación del capital humano de manera presencial grupal">ECO217.01 Impartición de cursos de formación del capital humano de manera presencial grupal.</option>
                <option value="EC0054 Venta de productos ópticos">EC0054 Venta de productos ópticos</option>
                <option value="C0305 Prestación de servicios de atención a clientes">EC0305 Prestación de servicios de atención a clientes</option>
                <option value="EC0435 Prestación de servicios para la atención, cuidado y desarrollo integral de las niñas y los niños en Centros de Atención Infantil">EC0435 Prestación de servicios para la atención, cuidado y desarrollo integral de las niñas y los niños en Centros de Atención Infantil</option>
                <option value="EC0076 Evaluación de la competencia de candidatos con base en Estándares de Competencia">EC0076 Evaluación de la competencia de candidatos con base en Estándares de Competencia</option>
                <option value="EC0154 Prestación de los servicios de limpieza">ECO154 Prestación de los servicios de limpieza</option>
                <option value="Microsoft Excel">Microsoft Excel</option>
                <option value="Microsoft Word">Microsoft Word</option>
                <option value="Equipos de alto desempeño">Equipos de alto desempeño</option>
                <option value="Gestión de residencia en las organizaciones">Gestión de residencia en las organizaciones</option>
                <option value="Gestión de estrés laboral">Gestión de estrés laboral</option>
                <option value="Inteligencia emocional en el trabajo">Inteligencia emocional en el trabajo</option>
                <option value="Gestión del tiempo">Gestión del tiempo</option>
                <option value="Comunicación asertiva y habilidades sociales">Comunicación asertiva y habilidades sociales</option>
                <option value="Los 10 colores del talento">Los 10 colores del talento</option>
                <option value="Diagnóstico de necesidades de capacitación (DNS)">Diagnóstico de necesidades de capacitación (DNS)</option>
            </select>
            <div style="display: flex; justify-content: center;">
                <loading-vue
                v-show="loading"
                />
            </div>
            <div class="contenedor-b-registro">
                <button-vue
                @click="handleSubmit(sendForm)"
                texto="Enviar"
                class="button-registro"
                />
            </div>
        </div>
    </div>
    <footer-vue />
    </ValidationObserver>
  </div>
</template>

<script>
import loadingVue from '../components/loading.vue'
import buttonVue from '../components/button.vue'
import footerVue from '../components/footer.vue'
import headerVue from '../components/header.vue'
import inputVue from '../components/input.vue'
import { firestore } from '../plugins/firebase'
import { doc, setDoc } from 'firebase/firestore'
import Swal from 'sweetalert2'
import { ValidationProvider } from 'vee-validate'
import { ValidationObserver } from 'vee-validate'

export default {
    components: {
        buttonVue,
        headerVue,
        footerVue,
        inputVue,
        loadingVue,
        ValidationProvider,
        ValidationObserver,

    },
    data: function () {
        return {
            form: {
                name: '',
                phone: '',
                email: '',
                jobProfile: '',
                otherJobProfile: '',
                standard: '',
            },
            loading: false,
        }
    },
    methods: {
        async sendForm() {
            this.loading = true;
            const ref = doc(firestore, 'leads', self.crypto.randomUUID())
            this.sendMessageToTelegramGroup()
            await setDoc(ref, this.form)
            Swal.fire({
                title: 'Recibimos tus datos',
                text: 'Pronto te contactaremos',
                icon: 'success',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#D90404'
            })
            .then(() => window.location.href = 'https://cpcapitalhumano.com.mx')
            this.loading = false;
        },
        async sendMessageToTelegramGroup() {
            await this.$axios.$post(`${this.$config.apiTelegram}/bot${this.$config.accessTokenTelegram}/sendMessage`,{
                    text: `Nombre: ${this.form.name}\n`
                        + `Correo: ${this.form.email}\n`
                        + `Telefono: ${this.form.phone}\n`
                        + `Perfil laboral: ${this.form.jobProfile}\n`
                        + `Otro perfil laboral: ${this.form.otherJobProfile}\n`
                        + `Estandar de interes: ${this.form.standard}\n`,
                    chat_id: this.$config.chatIdTelegram,
                })    
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
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
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
.mensaje {
    font-size: 12px;
    color: red;
    margin-left: 10px;
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
    display: flex;
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
        display: flex;
        flex-direction: column;
    }
    .registro {
        width: 50%;
        margin: auto;
        height: 768px;
        margin-top: 50px;
    }
    .input-registro {
        padding: 15px;
        display: flex;
        flex-direction: column;
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
        padding: 20px;
        display: flex;
        flex-direction: column;
    }
    .contenedor-input {
        display: flex;
        flex-direction: column;
    }
    .registro {
        width: 30%;
        margin: auto;
        height: 750px;
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