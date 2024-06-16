

const secret1 = document.getElementById("secret1");
const secret2 = document.getElementById("secret2");
const secret3 = document.getElementById("secret3");
const secretBox1 = document.getElementById("secret-box1")
const secretBox2 = document.getElementById("secret-box2")
const secretBox3 = document.getElementById("secret-box3")


secretBox1.addEventListener('mousemove',()=>{
    secret1.style.color = "#D2B938";
})
secretBox2.addEventListener('mousemove',()=>{
    secret2.style.color = "#D2B938";
})
secretBox3.addEventListener('mousemove',()=>{
    secret3.style.color = "#D2B938";
})
secretBox1.addEventListener('mouseout',()=>{
    secret1.style.color = '#fff';
})
secretBox2.addEventListener('mouseout',()=>{
    secret2.style.color = '#fff';
})
secretBox3.addEventListener('mouseout',()=>{
    secret3.style.color = '#fff';
})

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", function() {
      window.location.href = "ThankYouPage.html"; 
    });
  });

$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        autoplaySpeed: 5000,
        infinite: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "0",
        dots: true,
      });
});

