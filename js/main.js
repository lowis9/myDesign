// 
let plans_i = document.querySelectorAll(".mumber-plan .holder .checbox");
plans_i.forEach(function(e){
  e.onclick = function() {
    plans_i.forEach(function(e){
      e.classList.remove("slected");
    });
    this.classList.add("slected")
  }
})