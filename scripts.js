// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    // get elements
    const btnTakeoff = document.getElementById("takeoff");
    const pFlightStatus = document.getElementById("flightStatus");
    const divBackground = document.getElementById("shuttleBackground");
    const pHeight = document.getElementById("spaceShuttleHeight");
    const btnLand = document.getElementById("landing");
    const btnAbort = document.getElementById("missionAbort");
    const btnUp = document.getElementById("up");
    const btnDown = document.getElementById("down");
    const btnRight = document.getElementById("right");
    const btnLeft = document.getElementById("left");
    const imgRocket = this.document.getElementById("rocket");

    // create variable for shuttle height
    let height = 0;

    // rocket coordinates
    let x = 0;
    let y = 0;

    function reset() {
        x = 0;
        y = 0;
        imgRocket.style.transform = `translate(${x}px, ${y}px)`;
        divBackground.style.backgroundColor = "green";
        height = 0;
        pHeight.innerHTML = String(height);
    }

    function move(moveX, moveY) {

        height -= moveY * 1000;
        x += moveX;
        y += moveY;
        imgRocket.style.transform = `translate(${x}px, ${y}px)`;
        pHeight.innerHTML = String(height);
    }

    btnTakeoff.addEventListener("click", function() {
        let isConfirmed = confirm("Confirm that the shuttle is ready for takeoff.");
        if (isConfirmed) {
            pFlightStatus.innerHTML = "Shuttle in flight";
            divBackground.style.backgroundColor = "blue";
            height += 10000;
            pHeight.innerHTML = String(height);
        }
    });

    btnLand.addEventListener("click", function() {
        alert("The shuttle is landing. Landing gear engaged.");
        pFlightStatus.innerHTML = "The shuttle has landed.";
        reset();
    });

    btnAbort.addEventListener("click", function() {
        let isConfirmed = confirm("Confirm that you want to abort the mission.");
        if (isConfirmed) {
            pFlightStatus.innerHTML = "Mission aborted.";
            reset();
        }
    });

    btnUp.addEventListener("click", () => move(0, -10));
    btnDown.addEventListener("click", () => move(0, 10));
    btnRight.addEventListener("click", () => move(10, 0));
    btnLeft.addEventListener("click", () => move(-10, 0));

});
