<template>
  <header>
    <div class="contenedor-header">
        <div class="div-czya">
            <img src="../assets/logoCZYA.png" alt="" class="logo-c">
        </div>
        <nav class="contenedor-menu">
            <input type="checkbox" id="menu" class="input-menu">
            <label class="label-menu" for="menu"> <img src="../assets/menu.png" alt=""  class="menu-lista" style="filter: invert(100%) sepia(6%) saturate(7433%) hue-rotate(241deg) brightness(114%) contrast(91%);"> </label>
            <ul>
                <li class="m-l"><a href="/acercaDeNosotros"></a>Acerca de nosotros</li>
                <li class="m-l"><a href="/contacto"></a>Contacto</li>
                <li class="m-l"><a href="/misionVision"></a>Mision y Vision</li>
                <li class="m-l"><a href="/servicios"></a>Servicios</li>
            </ul>
        </nav>
    </div>
    <div class="contenedor">
        <div class="div-cpch">
            <img src="../assets/logoCPCH.jpg" alt="" class="logo-capitalhumano">
        </div>
        <div>
            <h1 class="titulo-cpch">CENTRO DE PROFESIONALIZACIÓN DE CAPITAL HUMANO</h1>
        </div>
        <div class="div-redconocer">
            <img src="../assets/logoRC.jpeg" alt="" class="logo-red">
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

}
.contenedor {
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

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
.menu-lista {
  padding-top: 8px;
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
.m-l {
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
  .contenedor {
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  margin-bottom: 20px;
  padding: 10px;
  }
  .logo-conde {
    display: none;
  }
  .logo-red {
      height: 77px;
  }
  .logo-c {
    height: 50px;
  }
  .logo-capitalhumano {
  height: 90px;  
  }
  .contenedor-header {
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
    .contenedor {
        display: flex;
        padding: 5px;
    }
    .logo-capitalhumano {
      height: 95px;
    }
    .logo-red {
      height: 110px;
    }
    .titulo-cpch {
      text-align: center;
    }
    .logo-conde {
      height: 80px;
      padding: 15px;
    }
    .contenedor-header {
      display: none;
    } 
    .div-cpch {
      display: contents;
    }
    .titulo-cpch {
      font-size: 20px;
    }
}

@media (min-width: 1024px) {
    .contenedor {
      display: flex;
      justify-content: space-around;
    }
    .titulo-cpch {
    text-align: center;
    font-size: 20px;
    padding-top: 20px;
    }
    .contenedor-menu {
    display: none;
    }
    .contenedor {
    margin-bottom: 20px;
    }
    .contenedor-header {
      display: none;
    }
    .logo-conde {
      width: 176px;
      padding: 15px;
    }
    .logo-red {
      height: 102px;
    }
    .logo-capitalhumano {
      padding: 4px;
      height: 102px;
    }
}
</style>