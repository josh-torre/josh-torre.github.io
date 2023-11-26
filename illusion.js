//    <!--#19048---#7752FE---#8E8FFA---#C2D9FF-->

let mouseX;
let mouseY;

const el = document.getElementById('illusion1')

//giveDivTexture( document.getElementsByClassName('texture'), 20)

  function updateBallPosition(){
    var ball = document.getElementById("ball");
    const ballAttributes = getComputedStyle(ball);
    var ballWidth = Number.parseInt(ballAttributes.width.substring(0, ballAttributes.width.indexOf("p")));
    var ballHeight  = Number.parseInt(ballAttributes.height.substring(0, ballAttributes.height.indexOf("p")));

    console.log(ballAttributes.width + " " + ballAttributes.height)

    ball.style.top = (mouseY - (ballHeight/2)) + "px";
    ball.style.left = (mouseX - (ballWidth/2)) + "px";
  }

  //Updates mouse coordinates   
  function updateMouseCoordinates(event) {
      //Get the current position of the canvasd
      var position = el.getBoundingClientRect();
      var divX = position.left;
      var divY = Math.ceil(position.top);

      //set the position of the mouse relative to the div
      mouseX = event.clientX - divX;
      mouseY = event.clientY - divY;

      updateBallPosition();
  }

  function giveDivTexture(div, sizeOfSquares){

    const sizeOfDiv = getComputedStyle(div).width.substring(0, getComputedStyle(div).width.indexOf("p"));
    const numberOfSquares = Math.floor(sizeOfDiv/sizeOfSquares);
    
    for(var r = 0; r < numberOfSquares; r++){
      for(var c = 0; c < numberOfSquares; c++){
        var object = document.createElement('div');

        object.style.width = sizeOfSquares + "px";
        object.style.height = sizeOfSquares + "px";
        object.style.top = (sizeOfSquares * r) + "px";
        object.style.left = (sizeOfSquares * c) + "px";
        
        const shadeOfGrey = Math.floor(Math.random() * 255)
        object.style.backgroundColor ='rgb(' + shadeOfGrey + ',' + shadeOfGrey + ',' + shadeOfGrey + ')';;
      }
    }
  }

function giveTexture(object, size){
  var i = 10, 
  fragment = document.createDocumentFragment(), 
  div = document.createElement('div');

  while (i--) {
    fragment.appendChild(div.cloneNode(true));
  }

  $('#backdrop').append(fragment);
}


  // Attach mousemove event listener to track mouse movements
el.addEventListener("mousemove", updateMouseCoordinates);