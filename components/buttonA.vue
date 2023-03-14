<template>
    <div class="contenido-b-a">
        <a class="button-a" :href="href">{{ nombre }}</a>
    </div>
</template>

<script>
export default {
    props :{
        nombre: {
            type: String,
            default: '',
        },
        href: {
            type: String,
            default: '',
        }
    },
}
</script>

<style>
.button-a {
    color: #0d0d0d; 
    border: 2px solid #021373;
    background-color: white;
    cursor: pointer;
    border-radius: 3px;
    margin-top: 20px;
    height: 45px;
    letter-spacing: 4.6px;
    padding: 5px;
    text-align: center;
    border-radius: 23.5px;
    display: block;
    width: 225px;
    height: 25px;
    text-decoration: none;
    padding-top: 10px;
    text-align: center;
}

@media (max-width: 776px) {
    .button-a {
        margin-top: 19px;
        margin-bottom: 20px;
        border: transparent;
        background-color: #D90404;
        color: white;
    }
    .contenido-b-a {
        display: flex;
        justify-content: center;
    }
}

@media (min-width: 1024px) {
    .button-a {
        margin-top: 5px;
    }
    .contenido-b-a {
        display: flex;
        justify-content: flex-end;
        margin-top: -40px;
    }
    .button-a {
        margin-top: 18px;
        margin-bottom: -29px;
        margin-right: 20px;
        background: #D90404;
        border: transparent;
        color: white;
    }
    
}
</style>