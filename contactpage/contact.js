function toggleMode() {
    
    document.getElementById("body").classList.toggle("dayMode");
    document.getElementById("button").classList.toggle("button-day");
    
    var fonts = document.getElementsByClassName("contactFont")
    for (var i = 0; i < fonts.length; i++) {
        fonts[i].classList.toggle("contact-day")
      }
    
}