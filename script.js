gsap.to(".subhead", {
 text: "7 сентября 2025 года в 16:26 по Москве",
 duration: 3,
 repeat: -1,
 repeatDelay: 3,
 ease:"power1.in",
 yoyo: true,
 delay: 2,
});


function eclipseCountdown () {
    let eclipseDate = new Date ("September 7, 2025 16:26:00");
    const now = new Date();
    const diff = eclipseDate-now;

    const msInSecond = 1000;
    const msInMinute = 60*1000;
    const msInHour = 60*60*1000;
    const msInDay = 24*60*60*1000;

   

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = displayDay;

    const dayinRussia = function declOfNum(number, titles){
        cases = [2, 0, 1, 1, 1, 2];
        return titles [(number%100>4 && number%100<20) ? 2 : cases[(number%10<5) ? number%10:5]];
        }
    const dayinRussiaDisplay =  dayinRussia (displayDay,['день', 'дня', 'дней']);
    document.querySelector(".black1").innerHTML = `${dayinRussiaDisplay}`;

   

    const displayHour = Math.floor((diff%msInDay) / msInHour);
    document.querySelector(".hours").textContent = displayHour;

    const hourinRussia = function declOfNum(number, titles) {
        cases = [2, 0, 1, 1, 1, 2];
        return titles [(number%100>4 && number%100<20) ? 2 : cases[(number%10<5) ? number%10:5]];
        }
    const hourinRussiaDisplay = hourinRussia (displayHour,['час', 'часа', 'часов']);
    document.querySelector(".black2").innerHTML = `${hourinRussiaDisplay}`;



    
    const displayMinute = Math.floor((diff%msInHour) / msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const minuteinRussia = function declOfNum(number, titles) {
      cases = [2, 0, 1, 1, 1, 2];
      return titles [(number%100>4 && number%100<20) ? 2 : cases[(number%10<5) ? number%10:5]];
      } 
    const minuteinRussiaDisplay = minuteinRussia (displayMinute, ['минута', 'минуты', 'минут']);
    document.querySelector(".black3").innerHTML = `${minuteinRussiaDisplay}`;



    const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;

    const secondinRussia = function declOfNum(number, titles) {
      cases = [2, 0, 1, 1, 1, 2];
      return titles [(number%100>4 && number%100<20) ? 2 : cases[(number%10<5) ? number%10:5]];
      } 
    const secondinRussiaDisplay = secondinRussia (displaySecond, ['секунда', 'секунды', 'секунд']);
    document.querySelector(".black4").innerHTML = `${secondinRussiaDisplay}`;

    
    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
      

        clearInterval (timerID);
        replaceText ();
        replaceBlack1 ();
        replaceBlack2 ();
        replaceBlack3 ();
        replaceBlack4 ();
    }
}

let timerID = setInterval (eclipseCountdown, 1000);

function replaceText() {
    const heading = document.querySelector(".primary");
    heading.textContent = "Сегодня уникальный день! Полное лунное затмение свершилось!" 
}

function  replaceBlack1(){
  const black1 = document.querySelector(".black1");
  black1.textContent = "Ура!" 
}

function  replaceBlack2(){
  const black2 = document.querySelector(".black2");
  black2.textContent = "Этот" 
}

function  replaceBlack3(){
  const black3 = document.querySelector(".black3");
  black3.textContent = "День" 
}

function  replaceBlack4(){
  const black4 = document.querySelector(".black4");
  black4.textContent = "Настал" 
}
                  
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 110,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });