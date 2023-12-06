let mouseX;
let mouseY;

const el1 = document.getElementById('illusion1-outer-shell');
const el2 = document.getElementById('illusion2-outer-shell');

  function updateBallPosition(ballID){
    var ball = document.getElementById(ballID);
    const ballAttributes = getComputedStyle(ball);
    var ballWidth = Number.parseInt(ballAttributes.width.substring(0, ballAttributes.width.indexOf("p")));
    var ballHeight  = Number.parseInt(ballAttributes.height.substring(0, ballAttributes.height.indexOf("p")));

    ball.style.top = ((mouseY - (ballHeight/2)) -450)+ "px";
    ball.style.left = (mouseX - (ballWidth/2)) + "px";
  }

  //Updates mouse coordinates   
  function updateMouseCoordinatesEL1(event) {
    //Get the current position of the canvasd
    var position = el1.getBoundingClientRect();
    var divX = position.left;
    var divY = Math.ceil(position.top);

    //set the position of the mouse relative to the div
    mouseX = event.clientX - divX;
    mouseY = event.clientY - divY;

    updateBallPosition("ball-il1");
}

  //Updates mouse coordinates   
  function updateMouseCoordinatesEL2(event) {
    //Get the current position of the canvasd
    var position = el2.getBoundingClientRect();
    var divX = position.left;
    var divY = Math.ceil(position.top);

    //set the position of the mouse relative to the div
    mouseX = event.clientX - divX;
    mouseY = event.clientY - divY;

    updateBallPosition("ball-il2");
}

  function getColorArray(canvasArray){
    for(i = 0; i < canvasArray.data.length; i+=4){
      const colorScalar = Math.round(Math.random());
      canvasArray.data[i] = colorScalar * 255;  // red   color
      canvasArray.data[i + 1] = colorScalar * 255;  // green color
      canvasArray.data[i + 2] = colorScalar * 255;  // blue  color
      canvasArray.data[i + 3] = 255/2;
    }
  }
  
  function makeCanvasBackgroundBinary(id){
    var canvas = document.getElementById(id);
    var context = canvas.getContext("2d");

    var canvasArray = context.createImageData(300, 300);

    for(i = 0; i < canvasArray.data.length; i+=4){
      const randomChance = Math.random();
      var colorScalar = 0;
      if(randomChance <= 0.2)
        colorScalar = 0;
      else
        colorScalar = 1;

      canvasArray.data[i] = colorScalar * 255;  // red   color
      canvasArray.data[i + 1] = colorScalar * 255;  // green color
      canvasArray.data[i + 2] = colorScalar * 255;  // blue  color
      if(colorScalar == 1)
        canvasArray.data[i + 3] = 0;
      else
        canvasArray.data[i + 3] =255;
    }
    canvas.style.width = "450 px";
    canvas.style.height = "450 px";
    canvasArray.height = 20;
    canvasArray.width = 20;
    context.putImageData(canvasArray, 0, 0);
  }

  function makeCanvasBackground255(id){
    var canvas = document.getElementById(id);
    var context = canvas.getContext("2d");

    var canvasArray = context.createImageData(300, 300);

    for(i = 0; i < canvasArray.data.length; i+=4){
      const randomChance = Math.random();
      var colorScalar = randomChance;
     /* if(randomChance <= 0.2)
        colorScalar = 0
      else
        colorScalar = 1*/
      canvasArray.data[i] = colorScalar * 255;  // red   color
      canvasArray.data[i + 1] = colorScalar * 255;  // green color
      canvasArray.data[i + 2] = colorScalar * 255;  // blue  color
      canvasArray.data[i + 3] =255*(1-colorScalar);
    }
    canvas.style.width = "450 px";
    canvas.style.height = "450 px";
    canvasArray.height = 20;
    canvasArray.width = 20;
    context.putImageData(canvasArray, 0, 0);
  }

    // Attach mousemove event listener to track mouse movements
    el1.addEventListener("mousemove", updateMouseCoordinatesEL1);
    el2.addEventListener("mousemove", updateMouseCoordinatesEL2);

    makeCanvasBackgroundBinary("illusion1-canvas");
    makeCanvasBackgroundBinary("illusion1-canvas-ball");

    makeCanvasBackground255("illusion2-canvas");
    makeCanvasBackground255("illusion2-canvas-ball");

