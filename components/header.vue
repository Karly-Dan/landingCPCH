<template>
  <header>
    <div class="contenedor-header">
        <div class="div-czya">
            <img src="../assets/logoCZYA2.jpeg" alt="">
        </div>
        <nav class="contenedor-menu">
            <input type="checkbox" id="menu" class="input-menu">
            <label class="label-menu" for="menu"> <img src="../assets/menu.png" alt="" style="filter: invert(100%) sepia(6%) saturate(7433%) hue-rotate(241deg) brightness(114%) contrast(91%);"> </label>
            <ul>
                <li>Acerca de nosotros</li>
                <li>Contacto</li>
                <li>Mision y Vision</li>
                <li>Servicios</li>
            </ul>
        </nav>
    </div>
    <div class="contenedor">
        <div class="div-cpch">
            <img src="../assets/logocpch.jpeg" alt="">
        </div>
        <div>
            <h1 class="titulo-cpch">CENTRO DE PROFESIONALIZACIÓN DE CAPITAL HUMANO</h1>
        </div>
        <div class="div-redconocer">
            <img src="../assets/index-2.png" alt="">
        </div>
    </div>
  </header>
</template>

<script>
</script>

<style>
.contenedor-header {
    background-color: #021373;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}
.div-cpch {
    background-color: white;
}
.imagen-menu {
    cursor: pointer;
    filter: invert(100%) sepia(6%) saturate(7433%) hue-rotate(241deg) brightness(114%) contrast(91%);
}
.lista-menu {
    background-color: #021373;
    position: absolute;
}
.a-menu {
    color: white;
    text-decoration: none;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
}



ul{
  display: none;
}

input:checked  ~ ul{
  display:block;
  margin-top: 32px;

}

.input-menu {
  display: none;
}
.label-menu {
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-weight: bold;
  text-align: center;
  user-select: none;
  float: right;
  padding-right: 40px;
}

ul{
  margin-top:0;
  padding: 0;
  width: 200px;

}
li {
  display: block;
  background: #021373;
  margin: 0;
  padding: 10px;
  list-style: none;
  border-bottom: 1px solid white;
  color: white;
  float: inline-end;
}

li:hover {
  filter: brightness(110%);
}

@media (max-width: 776px) {
  .contenedor {
    display: flex;
  }
  .titulo-cpch {
    text-align: center;
    font-size: 12px;
  }
}

@media (min-width: 1024px) {
    .contenedor {
        display: flex;
        justify-content: space-evenly;
    }
    .titulo-cpch {
    text-align: center;
    font-size: 20px;
    }
    .contenedor-menu {
        display: none;
    }
}
</style>