var typed = new Typed(".auto-Typed",{
strings : ["Flutter Developer","UI/UX Designer","Web Developer"],
typeSpeed:150,
backSpeed:150,
loop:true,
});


/*--------About Section---------*/

var tablinks = document.getElementsByClassName("tab-Links");
var tabcontents = document.getElementsByClassName("tab-content")

function opentab(tabname){
      for(Tablink of tablinks){
        Tablink.classList.remove("active-link");
      }
      for(Tabcontent of tabcontents){
        Tabcontent.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");

}