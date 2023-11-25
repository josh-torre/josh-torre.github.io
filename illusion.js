let mouseX;
let mouseY;

const el = document.getElementById('illusion1');
    // Function to update mouse coordinates
    function updateMouseCoordinates(event) {
        //Get the current position of the canvasd
        var position = el.getBoundingClientRect();
        var divX = position.left;
        var divY = Math.ceil(position.top);

        //set the position of the mouse relative to the div
        mouseX = event.clientX - divX;
        mouseY = event.clientY - divY;

        console.log(`Mouse Coordinates: (${mouseX}, ${mouseY})`);
    }

    // Attach mousemove event listener to track mouse movements
    el.addEventListener("mousemove", updateMouseCoordinates);
