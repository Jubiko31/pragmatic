
/*-------------------------------ACCORDION-------------------------------------*/
var acc = document.getElementsByClassName("tc-row-head");
var i;
  
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle(".open");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

/*--------------------------------------SLIDER--------------------------------*/
var splide = new Splide( '.splide' );
var bar    = splide.root.querySelector( '.my-slider-progress-bar' );
  
  // Update the bar width:
splide.on( 'mounted move', function () {
  var end = splide.Components.Controller.getEnd() + 1;
  bar.style.width = String( 100 * ( splide.index + 1 ) / end ) + '%';
});
  
splide.mount();

/*------------------------------DISPLAY HIDDEN WHEN CLICKED SECOND TAB--------------------------*/
$(document).ready(function(){
  $(".tab-clickable:nth-child(2)").click(function() {
    $(".tab-clickable").addClass("tab-active");
    $(".tab-clickable:first").removeClass("tab-active");
    $("#lock").remove();
    $(".hide").removeClass("hide");
    $(".date-active").removeClass("date-active").addClass("date");
    $(".date:nth-child(2)").css({"background":"#2E9EA1 0% 0% no-repeat padding-box", "border-radius": "13px 13px 0px 0px", "width":"140px", "height":"40px"})
    $("#bet-info").text("*სპინზე ფსონის მინ. რაოდენობა შეზღუდული არ არის.")
  });
});

