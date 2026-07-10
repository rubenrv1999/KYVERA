const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {

    menu.classList.toggle("active");

});



// Inicializar EmailJS
emailjs.init({
    publicKey: "uZ73wKmJtDDdcnWaF",
});


console.log(document.getElementById("contactForm"));
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const submitButton = contactForm.querySelector("button");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();
    submitButton.disabled = true;
    submitButton.textContent = "Enviando...";
    formMessage.innerHTML = "";
    submitButton.style.opacity = "0.7";
    submitButton.style.cursor = "not-allowed";

    emailjs.sendForm(
    "service_b2rg0rn",
    "template_t887ism",
    this,
    "uZ73wKmJtDDdcnWaF"
)
    .then(() => {

    formMessage.innerHTML =
        "✅ ¡Gracias! Hemos recibido tu solicitud. Te responderemos en menos de 24 horas.";

    formMessage.style.color = "#16a34a";
    formMessage.style.fontWeight = "600";
    formMessage.style.marginTop = "20px";

    submitButton.disabled = false;
    submitButton.textContent = "Solicitar presupuesto";
    submitButton.style.opacity = "1";
    submitButton.style.cursor = "pointer";

    contactForm.reset();

})
    .catch((error) => {

    console.error(error);

    formMessage.innerHTML =
        "❌ Ha ocurrido un error. Inténtalo de nuevo.";

    formMessage.style.color = "#dc2626";
    formMessage.style.fontWeight = "600";
    formMessage.style.marginTop = "20px";

    submitButton.disabled = false;
    submitButton.textContent = "Solicitar presupuesto";
    submitButton.style.opacity = "1";
    submitButton.style.cursor = "pointer";

});

});