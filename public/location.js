console.log("==========triggred Script file")
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
  
function showPosition(position) {
    const { longitude, latitude } = position.coords;
    console.log(longitude,"==========longitude")
    console.log(latitude,"============latitude")
}
getLocation()