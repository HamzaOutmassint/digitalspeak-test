

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