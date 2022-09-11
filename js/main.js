// 
let plans_i = document.querySelectorAll(".mumber-plan .holder .checbox");
let planHolder = document.querySelectorAll(".mumber-plan .plan")

plans_i.forEach(function(e){
  e.onclick = function() {
    plans_i.forEach(function(e){
      e.classList.remove("slected");
    });
    this.classList.add("slected")
  }
})