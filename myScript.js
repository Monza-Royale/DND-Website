// Accordion, for the nav bar x2
function togglePlayerDropdown() {
  var x = document.getElementById("playerDropdown");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

function toggleDmDropdown() {
  var x = document.getElementById("dmDropdown");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

  // Click on the "Player's Corner or Dm's master page" link on page load to open the accordion
  document.getElementById("playerBtn").click();
  document.getElementById("dmBtn").click();

  // Open and close sidebar, for small screens
  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }