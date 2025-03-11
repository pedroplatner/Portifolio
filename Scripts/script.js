/////////////////////////////ESCREVENDO SOZINHO//////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
    const texto = "Transformando ideias em interfaces incríveis com código limpo e design moderno.";
    const elemento = document.getElementById("descricao");
    let index = 0;

    function digitar() {
        if (index < texto.length) {
            elemento.innerHTML += texto.charAt(index);
            index++;
            setTimeout(digitar, 50); // Velocidade da digitação (50ms)
        }
    }

    digitar();
});


////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year automatically
    const copyright = document.querySelector('.copyright');
    if (copyright) {
      const year = new Date().getFullYear();
      copyright.textContent = copyright.textContent.replace(/\d{4}/, year);
    }
  
    // Add smooth hover transitions for social icons
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
      // Add ripple effect on click
      link.addEventListener('click', function(e) {
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
      });
    });
  });




/////////////////////////////////// NAVBAR BLOOR //////////////////////
  window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
////////////////////////////////////////////////////////////////////

/////////////////////SCROLL/////////////

document.addEventListener("DOMContentLoaded", function () {
  const sr = ScrollReveal({
      reset: false,
      distance: '50px',
      duration: 1500,
      delay: 200
  });

  sr.reveal('.header', {
      origin: 'top'
  });

  sr.reveal('.skill', {
    origin: 'left',
    delay: 500,
    viewFactor: 0.2,
});

  sr.reveal('.project', {
    origin: 'right',
    delay: 400,
    viewFactor: 0.2,
  });
});



