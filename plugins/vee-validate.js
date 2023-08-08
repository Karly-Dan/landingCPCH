import { extend } from "vee-validate";
import { required, numeric, length, email, alpha } from "vee-validate/dist/rules"

extend('requerido', {
    ...required,
    message: 'Este campo es requerido'
});

extend('numeros', {
    ...numeric,
    message: 'El campo solo puede contener caracteres numéricos'
});

extend('longitud', {
    ...length,
    message: 'El campo debe tener 12 numeros'
});

extend('correo', {
    ...email,
    message: 'El campo debe ser un correo electrónico válido'
});

extend('letras', {
    ...alpha,
    message: 'El campo solo puede contener caracteres alfabéticos'
});

extend('otra', {
    validate: value => value.length > 10 && value.length < 12  ,
    message: 'ingresa mas de 10 digitos y menos de 12 '
});

extend('secret', {
    validate: value => value === 'example',
    message: 'This is not the magic word'
  });

