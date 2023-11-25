//    <!--#19048---#7752FE---#8E8FFA---#C2D9FF-->

let mouseX;
let mouseY;

const el = document.getElementById('illusion1');

  function updateBallPosition(){
    var ball = document.getElementById("ball");
    const ballAttributes = getComputedStyle(ball);
    var ballWidth = Number.parseInt(ballAttributes.width.substring(0, ballAttributes.width.indexOf("p")));
    var ballHeight  = Number.parseInt(ballAttributes.height.substring(0, ballAttributes.height.indexOf("p")));

    ball.style.top = (mouseY - (ballHeight/2)) + "px";
    ball.style.left = (mouseX - (ballWidth/2)) + "px";

    console.log(ballWidth);
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

      console.log(`Mouse Coordinates: (${mouseX}, ${mouseY})`);
  }

  // Attach mousemove event listener to track mouse movements
el.addEventListener("mousemove", updateMouseCoordinates);