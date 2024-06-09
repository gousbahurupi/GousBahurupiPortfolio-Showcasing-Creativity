var typed = new Typed('#element', {
  strings: ['Student.', 'Coder.', 'web Developer.', 'Web Designer.', 'Engineer.'],
  typeSpeed: 100,
});

const sections = document.querySelectorAll("#EducationSection .Education >div");
const prev = document.querySelectorAll("#EducationSection .left-arr");
const next = document.querySelectorAll("#EducationSection .right-arr");
var n = 0;
function change_Slide() {
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }
  sections[n].style.display = "block";

}

prev.addEventListener("click", function(e) {
  if (n > 0) {
    n--;
  }
  else {
    n++;
  }
  change_Slide();
})

next.addEventListener("click", function(e) {
  if (n < 1) {
    n++;
  }
  else {
    n--;
  }
  change_Slide();
})