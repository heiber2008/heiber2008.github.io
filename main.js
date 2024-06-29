function hideProyecto() {
    console.log("ocultando proyectos");
    document.querySelector('.Proyecto1').style.display = 'none';
    document.querySelector('.Proyecto2').style.display = 'none';
    document.querySelector('.Proyecto3').style.display = 'none';
}


document.querySelector(".proyecto1-boton").onclick=function(){
  
  console.log("tocaste el boton");
  hideProyecto();
  
  document.querySelector('.Proyecto1').style.display = 'block';

}

document.querySelector(".proyecto2-boton").onclick=function(){
   
    console.log("tocaste el boton");
    hideProyecto();
    
    document.querySelector('.Proyecto2').style.display = 'block';
  
  }

document.querySelector(".proyecto3-boton").onclick=function(){
    
    console.log("tocaste el boton");
    hideProyecto();
    
    document.querySelector('.Proyecto3').style.display = 'block';
  
  }
