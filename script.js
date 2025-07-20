let currentIndex = 0;

const slides = document.querySelectorAll('.divprix-all');
const totalSlides = slides.length;
const sliderContainer = document.getElementById('sliderContainer');

function updateSlider() {
  if (!sliderContainer) return;

  const slideWidth = sliderContainer.querySelector('.divprix-all').offsetWidth;
  sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function scrollL() {
  currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
  updateSlider();
}

function scrollR() {
  currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
  updateSlider();
}

document.getElementById("login-form").classList.add("dn")
// document.querySelector(".form-container").style.display="none"


function login() {
    document.getElementById("registdiv").style.display="none"
    document.getElementById("login-form").style.display="block"
}

function zareg(){
    document.getElementById("registdiv").style.display="block"
    document.getElementById("login-form").style.display="none"
}


let users = {
    user: {
        fio: 'admin',
        parol: 'admin',
    }
}

let newuser = {
        login: ' ',
        parol: ' ',
        fio: ' ',
        tel: ' ',
        email: ' '
}

let q=0;
let user_name = 'user'

function reg() {
    q+=1
    a=document.getElementById("login1").value
    b=document.getElementById("pasw").value
    c=document.getElementById("mail").value
    d=document.getElementById("fio").value
    f=document.getElementById("num").value
    newobject=Object.create(newuser)
    newobject.name=a
    newobject.parol=b
    newobject.email=c
    newobject.fio=d
    newobject.tele=f

    let v=String(q)
    let n=user_name+v
    
    users[n]=newobject
    console.log(users)
    window.localStorage.setItem("login222", a)
    alert("Вы зарегистрировались!");
}

function vhod() {
    j=0
    a2=document.getElementById("login2").value
    b2=document.getElementById("pasw2").value
    for (let j in users) {
        if(users[j].name==a2 && users[j].parol==b2) {
            alert("Вы вошли!")
            window.localStorage.setItem("login222", a2)
            console.log()
        }
        else {
          alert("Неправильный логин или пароль.")
        }
        j+=1
    }
}
