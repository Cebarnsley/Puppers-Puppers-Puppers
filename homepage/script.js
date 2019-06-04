function toggleMode() {
    
    document.getElementById("body" ).classList.toggle("dayMode");
    document.getElementById("p-main").classList.toggle("main-day");
    document.getElementById("button").classList.toggle("button-day");
    
    var fonts = document.getElementsByClassName("mainFont")
    for (var i = 0; i < fonts.length; i++) {
        fonts[i].classList.toggle("main-day")
      }
    
}
