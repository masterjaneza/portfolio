const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.getElementById('dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen ?"fa-solid fa-xmark" : 'fa-solid fa-bars'
}



// Custom Cursor


const cursorDot = document.querySelector("[data-cursor-dot]")
    const cursorOutline = document.querySelector("[data-cursor-outline]")
    
    window.addEventListener('mousemove', function(e) {
      const posX = e.clientX;
      const posY = e.clientY;
      
      cursorDot.style.left = `${posX}px`
      cursorDot.style.top = `${posY}px`

      // cursorOutline.style.left = `${posX}px`
      // cursorOutline.style.top = `${posY}px`
      cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, {duration: 500, fill: 'forwards'})


    })


// Auto type effect
let typed = new Typed('.auto_type', {
    strings : ['FULL-STACK DEVELOPER👨‍💻🌐', 'UI DESIGNER🎨💻', 'GRAPHIC DESIGNER✏️🖼️', 'MENTOR👨‍🏫'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
    backDelay: 1500,
    showCursor: true
})


// Sheen button effect

let anims = [...document.querySelectorAll("[data-anim]")];
console.log(anims);
let click = (el, cb) => el.addEventListener("click", cb);
let toggle = (el) => el.classList.toggle("toggled");
let clickTog = (el) => click(el, () => toggle(el));
anims.map(clickTog);




// scroll animation across to whole website

// Registered plugin

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


// Gsap smooth scroll behavior with anchor links

// Smooth scroll for anchor links using GSAP
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      gsap.to(window, {
          duration: 1, // Control the scroll duration
          scrollTo: {
              y: this.getAttribute('href'), // Target element
              offsetY: 20 // Optional offset from the top
          },
          ease: "power2.out" // Easing for smooth effect
      });
  });
});



// Img animation 

gsap.from(".img_anim", {
scrollTrigger: {
    trigger: ".img_anim",
    start: "top 80%", // Adjust this value as needed
    end: "bottom 20%",
    toggleActions: "play none none reverse",
    

},
duration: 0.7,
x: -1000,
scaleX: 2.5,
scaleY: 0.2,
transformOrigin: "100% 50%",
filter: "blur(40px)",
opacity: 0,
ease: "cubic-bezier(0.230, 1.000, 0.320, 1.000)"
});


// Animation for p_text_anim
gsap.from(".p_text_anim", {
scrollTrigger: {
    trigger: ".p_text_anim",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
    

},
duration: 0.7,
filter: "blur(12px)",
opacity: 0,
ease: "cubic-bezier(0.550, 0.085, 0.680, 0.530)"
});


// Animation for text_anim
gsap.from(".text_anim", {
scrollTrigger: {
    trigger: ".text_anim",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
    

},
duration: 0.7,
letterSpacing: "-0.5em",
opacity: 0,
ease: "cubic-bezier(0.215, 0.610, 0.355, 1.000)"
});
        

// Animation for btn_anim
gsap.from(".btn_anim", {
scrollTrigger: {
    trigger: ".btn_anim",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
    

},
duration: 0.7,
scaleX: 0,
opacity: 1,
ease: "cubic-bezier(0.250, 0.460, 0.450, 0.940)"
});


// Animation for sheen-button
gsap.from(".sheen-button", {
scrollTrigger: {
    trigger: ".sheen-button",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
    

},
duration: 0.7,
x: -100,
opacity: 0,
ease: "power1.out"
});



gsap.from(".my_skill_text", {
    scrollTrigger: {
        trigger: ".my_skill_text",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        

    },
    duration: 0.7,
    x: -100,
    opacity: 0,
    ease: "power1.out"

})

gsap.fromTo(".first_progress_bar_anim", 
    { 
      x: -120, 
      opacity: 0 
    }, 
    { 
      x: 0, 
      opacity: 1, 
      duration: 0.7, 
      ease: "ease-out",
      scrollTrigger: {
        trigger: ".first_progress_bar_anim",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        

      }
    }
);

gsap.fromTo(".second_progress_bar_anim", 
    { 
      y: 120, 
      opacity: 0 
    }, 
    { 
      y: 0, 
      opacity: 1, 
      duration: 0.7, 
      ease: "ease-out",
      scrollTrigger: {
        trigger: ".second_progress_bar_anim",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        

      }
    }
  );


 
gsap.fromTo(".third_progress_bar_anim", 
    { 
      y: -120, 
      opacity: 0 
    }, 
    { 
      y: 0, 
      opacity: 1, 
      duration: 0.7, 
      ease: "ease-out",
      scrollTrigger: {
        trigger: ".third_progress_bar_anim",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        

      }
    }
  );
  

  // Extra space problem fixed!
  gsap.fromTo(".fourth_progress_bar_anim", 
    { 
      x: 20, 
      opacity: 0 
    }, 
    { 
      x: 0, 
      opacity: 1, 
      duration: 0.7, 
      ease: "ease-out",
      scrollTrigger: {
        trigger: ".fourth_progress_bar_anim",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        
      }
    }
  );


  // Project Section animation


  // Project title animation "My Projects"

  gsap.fromTo('.my_projects_title_anim', {opacity:0, scaleX: 0.5}, {
    duration: 0.5,
    opacity: 1,
    scaleX: 1,
    ease: "power1.out",
    scrollTrigger: {
      trigger: '.my_projects_title_anim',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      
    }
  })
  


  // Bank Projcet Animation

  gsap.fromTo('.project_div_1', {x: -200, opacity:0}, {
    x: 0,
    duration: 2,
    opacity: 1,
    scrollTrigger: {
      trigger: '.project_div_1',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      
    }
  })

  
  // Travel Website Projcet Animation

  gsap.fromTo('.project_div_2', {y: 200, opacity:0}, {
    y: 0,
    duration: 2.2,
    opacity: 1,
    scrollTrigger: {
      trigger: '.project_div_2',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      
    }
  })

    // Amazon Projcet Animation

    gsap.fromTo('.project_div_3', {x: 40, opacity:0}, {
      x: 0,
      delay: 0.8,
      duration: 2.4,
      opacity: 1,
      scrollTrigger: {
        trigger: '.project_div_3',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        
      }
    })


    // Gallery Section Animation

    // Gallery text anim

    gsap.fromTo('.gallery_text_anim', {x: 50, opacity: 0},
      {
        x: 0,
        duration: 1,
        opacity: 1,
        // ease: 'power2.in',
        scrollTrigger: {
          trigger: '.gallery_text_anim', 
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          
        } 
      }
     )


    //  Image text animation

    
    gsap.fromTo('.img_text_anim', {x: -50, opacity: 0},
      {
        x: 0,
        duration: 1,
        opacity: 1,
        // ease: 'power2.in',
        scrollTrigger: {
          trigger: '.gallery_text_anim', 
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          
        } 
      }
     )


    // Image animation with timeline

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.img_text_anim',
        start: 'top 80%',
        end: '+=1000',
        toggleActions: 'play none none reverse',
        scrub: 10,
        
      }
    })

    tl.fromTo('.img1', {opacity: 0}, {opacity: 1, duration: 1})
    .fromTo('.img6', {opacity: 0}, {opacity: 1, duration: 1})
    .fromTo('.img4', {opacity: 0}, {opacity: 1, duration: 1})
    .fromTo('.img3', {opacity: 0}, {opacity: 1, duration: 1})
    .fromTo('.img5', {opacity: 0}, {opacity: 1, duration: 1})
    .fromTo('.img2', {opacity: 0}, {opacity: 1, duration: 1})
    .fromTo('.img7', {opacity: 0}, {opacity: 1, duration: 1.5})
    

// My Vision & Mission Section animation

// title reveal animatiom

// Mission title animation
gsap.to('.reveal', {
  duration: 2,
  width: '100%',
  scrollTrigger: {
    trigger: '.reveal',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
    
  }
});

// Mission text animation (line-by-line)

gsap.to('.mission_txt_anim', {
  duration: 0.7,
  width: '100%',
  scrollTrigger: {
    trigger: '.mission_txt_anim',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
    
  }
});



// Contact me section animation

// contact me title animation

gsap.fromTo('.contact_me_anim', {scale: 0.5}, {scale: 1, duration: 0.3, ease: 'bounce',scrollTrigger: {
  trigger: '.contact_me_anim',
  start: 'top 80%',
  end: 'bottom 20%',
  toggleActions: 'play none none reverse',
  
}})

// email div animation

gsap.fromTo('.email_div_anim', {x: -100, opacity: 0}, {
  duration: 1, 
  x: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: '.email_div_anim',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
    
  }
})

// location div animation

gsap.fromTo('.location_div_anim', {x: 20, opacity: 0}, {
  duration: 1, 
  delay: 0.5,
  x: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: '.location_div_anim',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
    
  }
})

// phone div animation


gsap.fromTo('.phone_div_anim', {x: -100, opacity: 0}, {
  duration: 1, 
  x: 0,
  delay: 0.5,
  opacity: 1,
  scrollTrigger: {
    trigger: '.phone_div_anim',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
    
  }
})


// Form animation

gsap.fromTo('.form_anim', { scale: 0, transformOrigin: "100% 0", opacity: 1 }, // Starting state
  { scale: 1, transformOrigin: "100% 0", opacity: 1, duration: 1, delay: 1.3,
    scrollTrigger: {
      trigger: '.form_anim',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      
    }
   } )


   
   
   gsap.fromTo('.form_anim', { scale: 0, transformOrigin: "100% 0", opacity: 1 }, // Starting state
    { scale: 1, transformOrigin: "100% 0", opacity: 1, duration: 1, delay: 1.3,
      scrollTrigger: {
        trigger: '.form_anim',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        
      }
    } )
    
    
    // Footer animation
    
    gsap.fromTo('.footer_anim', {opacity: 0},{
      duration: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: '.footer_anim',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        
      }
    })
    
    // MasterJaneza animation 

        
    // gsap.fromTo('.masterjaneza_anim', {opacity: 0},{
    //   duration: 1,
    //   opacity: 1,
    //   scrollTrigger: {
    //     trigger: '.footer_anim',
    //     start: 'top 80%',
    //     end: 'bottom 20%',
    //     toggleActions: 'play none none reverse',
    //     
    //   }
    // })

    // // hr animation

    // gsap.fromTo('.hr_anim', {opacity: 0},{
    //   duration: 1,
    //   opacity: 1,
    //   scrollTrigger: {
    //     trigger: '.footer_anim',
    //     start: 'top 80%',
    //     end: 'bottom 20%',
    //     toggleActions: 'play none none reverse',
    //     
    //   }
    // })

    
    
    
    // JS Lenis smooth animation (under the animation code)
    
    // Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


// Progress bar percent count 


let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let number3 = document.getElementById('number3');
let number4 = document.getElementById('number4');

let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;


setInterval(() => {
    if(counter1 == 96) {
        clearInterval()
    } else {
        counter1 += 1;
        number1.innerHTML = counter1 + '%';
    }
}, 20 )

setInterval(() => {
    if(counter2 == 30) {
        clearInterval()
    } else {
        counter2 += 1;
        number2.innerHTML = counter2 + '%';
    }
}, 25 )


setInterval(() => {
    if(counter3 == 50) {
        clearInterval()
    } else {
        counter3 += 1;
        number3.innerHTML = counter3 + '%';
    }
}, 18 )


setInterval(() => {
    if(counter4 == 99) {
        clearInterval()
    } else {
        counter4 += 1;
        number4.innerHTML = counter4 + '%';
    }
}, 28 )






document.addEventListener("DOMContentLoaded", function() {
    // First progress bar
    let gradientStart1 = document.querySelector('#GradientColor1 stop:first-child');
    let gradientEnd1 = document.querySelector('#GradientColor1 stop:last-child');
    let circle1 = document.querySelector('#progress1 circle');

    // Second progress bar
    let gradientStart2 = document.querySelector('#GradientColor2 stop:first-child');
    let gradientEnd2 = document.querySelector('#GradientColor2 stop:last-child');
    let circle2 = document.querySelector('#progress2 circle');

    // Third progress bar
    let gradientStart3 = document.querySelector('#GradientColor3 stop:first-child');
    let gradientEnd3 = document.querySelector('#GradientColor3 stop:last-child');
    let circle3 = document.querySelector('#progress3 circle');

    // Fourth progress bar

    let gradientStart4 = document.querySelector('#GradientColor4 stop:first-child');
    let gradientEnd4 = document.querySelector('#GradientColor4 stop:last-child');
    let circle4 = document.querySelector('#progress4 circle');

    // Function to change gradient colors
    function changeGradientColors(gradientStart, gradientEnd, startColor, endColor) {
        gradientStart.setAttribute('stop-color', startColor);
        gradientEnd.setAttribute('stop-color', endColor);
    }

    // Example usage: Change gradient colors for the first progress bar
    changeGradientColors(gradientStart1, gradientEnd1, '#8E44AD', '#0000ff');

    // Example usage: Change gradient colors for the second progress bar
    changeGradientColors(gradientStart2, gradientEnd2, '#1F584A', '#4DB6A8');
    
    // Example usage: Change gradient colors for the third progress bar
    changeGradientColors(gradientStart3, gradientEnd3, '#136F63', '#297373');

    changeGradientColors(gradientStart4, gradientEnd4, '#00C853', '#66BB6A')

});





// GSAP - SCROLLTRIGGER - INFO




// gsap.registerPlugin(ScrollTrigger);



// tweens - არის რამოდენიმე ტიპის tween. ეს ტიპებია 
// 1. gsap.to() - ეს განსაზღვრავს თუ ელემენტი სად უნდა მივიდეს.
// 2. gsap.from() - ეს ელემენტს წამოიღებს ჩვენ მიერ მინიჭებული ადგილიდან default - ადგილზე - ანუ მაღლა მარცხენა კუთხეში
// 3. gsap.fromTo() - ეს ელემენტს წამოიღებს კონკრეტული ადგილიდან, კონკრეტულ ადგილზე.



// gsap.to('.square', {
//     // rotation: -360,
//     x: 700,
//     // y: 500,
//     duration: 5,
//     // ease: 'bounce',
//     // scaleX: 6,
//     // scaleY: 4.5,
//     // skewX: 45,
//     // skewY: 30,
//     // scale: 5,
//     // rotationX: 100,
//     // rotationY: 300,
//     // rotation: 360,
//     // transformOrigin: 'top center',
//     // opacity: 0.3, 
//     // z: 200,
//     // repeat: 3,
//     // yoyo: true, 
//     scrollTrigger: {
//         trigger: '.square',
//         start: 'top 60%',
//         end: 'top 40%',
//         // end: () => `+=${document.querySelector('.square').offsetHeight}`,
//         
//         scrub: 4,
//         // pin: true
//         // fastScrollEnd: true  // Jump to the end of animation on fast scroll

//         // toggleClass: 'change'
//         // toggleActions: "complete reverse pause restart"
//       //                onEnter   onLeave     onEnterBack   onLeaveBack
//       //   play pause resume reverse restart reset complete none

//       // play - ანიმაცის უკრავს
//       // pause - ანიმაციას აპაუზებს
//       // resume - დაპაუზებულ ანიმაციას ანახლებს
//       // restart - სულ თავიდან იწყებს ანიმაციას
//       // reset - მთლიან ანიმაციას აწყებინებს თავიდან
//       // reverse - საპირისპირო მიმართულებით უკრავს
//       // complete - ანიმაციას ასრულებს
//       // none - არაფერს აკეთებს(მნიშვნელობის მინიჭებიდან თავს გვარიდებს)
//     } 
// })

// markers: - გვეხმარება,რომ დავინახოთ ვიზუალურად დამწყები/დამამთავრებელი ხაზი

// scrub - სქროლვის პროცესში, კონკრეტული ელემენტიც მოქმედებს, სქროლვის გაჩერების შემთხვევაში ელემენტიც ჩერდება, საპირისპირო მიმართულებით ასქროლვის შემთხვევაში კი ელემენტი საპირისპიროდ წავა, ეს ყველაფერი თუ ჩვენ true გავუწერთ(true შემთხვევაში ეს ქმედებები არ იქნება გლუვი(smooth), თუ გვინდა, რომ უფრო smooth იყოს, მაშინ საჭიროა, რომ გავუწეროთ ჩვენ რიცხვითი მნიშვნელობა, მაგ: scrub: 4)

// scale/scaleX/scaleY - scale ადიდებს/აპატარავებს ელემენტს ორივე მიმართულებით(x,y), scaleX ადიდებს/აპატარავებს ელემენტს მხოლოდ x მიმართულებით, scaleY ადიდებს/აპატარავებს ელემენტს მხოლოდ y მიმართულებით, 1 ნიშნავს არ გაზრდას, 2 ნიშნავს ორმაგი ზომა, 0.5 ნიშნავს ნახევარი ზომა

// skewX/skewY - skewX ხრის/ამახინჯებს ელემენტს x მიმართულებით, skewY საპირისპირო მიმართულებით

// rotationX/rotationY - rotationX აბრუნებს ელემენტს x მიმართულებით, rotationY -აბრუნებს ელემენტს y მიმართულებით - ეს ორივე მიმართულებით ტრიალი წარმოქმნის 3D Effect - ს

// transformOrigin - აბრუნებს ელემენტს სხვა ელემენტის გარშემო.

// opacity - ელემენტს ხდის გამჭირვალეს, 0 - არის საერთოდ გამჭირვალე, 1 - არის მთლიანად ხილვადი - შესაძლებელია რიცხვის ამორჩევა 0 - დან 1 - მდე.

// repeat - ამეორებს ანიმაციას

// yoyo - ანიმაციას აბრუნებს დასაწყისზე, როდესაც ის დასრულდება და შემდეგ მეორდება(repeat - თან ერთად კაია)

// fastScrollEnd: true - თუ სწრაფად ჩავსქროლავთ, მაშინ ანიმაციაც ძალიან სწრაფად მორჩება

// stagger - თანმიმდევრობით ანიმირებს ელემენტებს

// fill - ანიმაცისს პროცესში, ელემენტს ვუცვლით ფერს 


// repeat + yoyo - თუ ჩვენ გამოვიყენებთ ამ ორივე მნიშვნელობას, შევქმნით ანიმაციას, რომელიც მიდის დასასრულიდან დასაწყისში, თუ ჩვენ repeat - ს მივანიჭებთ -1, მაშინ ეს ყველაფერი გაგრძელდება სამუდამოდ

// ease - გამოიყენება იმისთვის, რომ ელემენტებს შევუცვალოთ სიჩქარე ან მოძრაობა, მაგ: თუ დავუწერთ ease: 'bounce' - მაშინ ელემენტი ბოლოს ახტომის მოძრაობას შექმნის, თუ დავუწერთ 'bounce.in' მაშინ უკვე დასაწყისში შექმნის ახტომის ეფექტს, ხოლო თუ დავუწერთ 'bounce.inOut' მაშინ უკვე დასაწყისშიც და დასასრულშიც შექმნის ახტომის ეფექტს. ასევე არის სხვა მნიშვნელობებიც.

// stagger - გამოიყენება იმისთვის, რომ განვსაზღვროთ თუ რა დროს და რა მიმართულებით შეიცვალოს ან მიიღოს ეფექტი ელემენტმა, მაგ: თუ დავწერთ stragger: 1, ეს იმას ნიშნავს, რომ ელემენტები 1 წამის შემდეგ ამოვა თანმიმდევრობით, ასევე ჩვენ შეგვიძლია გადავცეთ ობიექტი, ობიექტში გადაეცემა რამოდენიმე თვისება, პირველი არის each: 1, რომელიც განსაზღვრავს იგივეს რაც ჩვეულებრიბი stragger, შემდეგი არის from რომელიც განსაზღვრავს თუ საიდან უნდა დაიწყოს ელემენტების ადგილის შეცვლა, from - ს გადაეცემა რამოდენიმე მნიშვნელობა, ესენია top, end, center, edges. top - დაიწყებს თავიდან, end - დაიწყებს ბოლოდან, center დაიწყებს ცენტრიდან, ხოლო edges - დაიწყებს კუთხეებიდან.


// timeline 
// tl.gsap('div1', {x: 100, duration: 5})
//   .gsap('div2', {x: 100, duration: 4})
//   .gsap('div3', {x: 100, duration: 2})
// როდესაც ვიყენებთ timeline - აღარ მომიწევს delay გამოყენება და ერთმანეთზე დალოდება, timeline დახმარებით ეგ მოქმედებები შესრულდება თანმიმდევრობით, 
// ===
// ამ შემთხვევაში მეორე ელემენტი 1 წამის შემდეგ დაიწყებს მოქმედებას, რადგან ბრჭყალებში მივუთითე, მაგას ეწოდება 'relative position', ასევე შემიძლია დავუწერო '-=1' რომელიც 1 წამით ადრე დაიწყებს მოქმედებას 
// tl.gsap('div1', {x: 100, duration: 5})
//   .gsap('div2', {x: 100, duration: 3},"+=1")
// თუ დავუწერ ნაკლებობის სიმბოლოს, მაგ შემთხვევაში მესამე ელემენტი დაიწყებს მოქმედებას მეორე ელემენტის შემდეგ, ხოლო თუ დავუწერ "<0.5" ეს იმას ნიშნავს, რომ მეორე ელემენტის დაწყებიდან 0.5 წამში დაიწყოს მოქმედება მესამე ელემენტმა
//   .gsap('div3', {x: 100, duration: 2}, "<")
//  
// ===
// თუ დავუწერ ეგრევე რიცხვს, მაშინ გამოდის, რომ ვეუბნები დაიწყოს მოქმედება ამ დროს, ყოველგვარი დალოდების გარეშე, ამას ეწოდება 'absolute position' 
// tl.gsap('div1', {x: 100, duration: 5})
//   .gsap('div2', {x: 100, duration: 3}, 1)
//   .gsap('div3', {x: 100, duration: 2}, 3)
