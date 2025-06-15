function showSection(sectionId) {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
        section.classList.remove("active");
    });
    document.getElementById(sectionId).classList.add("active");

    if (sectionId === "competences") {
        animateProgressBars();
    }
}

function animateProgressBars() {
    setTimeout(() => {
        const progressBars = document.querySelectorAll(".progress-fill");
        progressBars.forEach((bar) => {
            const width = bar.getAttribute("data-width");
            bar.style.width = width + "%";
        });
    }, 300);
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // 

    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const sujet = document.getElementById("sujet").value;
    const message = document.getElementById("message").value;

    const mailtoLink =
      "mailto:alandiarrassouba@gmail.com" + 
      "?subject=" +
      encodeURIComponent(sujet) +
      "&body=" +
      encodeURIComponent(
        `Nom : ${nom}\nEmail : ${email}\n\nMessage :\n${message}`
      );

    window.location.href = mailtoLink;
  });

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = "block";
}

function hideError(elementId) {
    const errorElement = document.getElementById(elementId);
    errorElement.style.display = "none";
}

window.addEventListener("load", function () {
    const hero = document.querySelector(".hero");
    hero.style.opacity = "0";
    hero.style.transform = "translateY(50px)";

    setTimeout(() => {
        hero.style.transition = "all 1s ease";
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";
    }, 100);

    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(() => {
            card.style.transition = "all 0.6s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 200 + index * 100);
    });
});

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", function () {
        this.style.transform = "scale(0.95)";
        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 150);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress-fill");
    progressBars.forEach((bar) => {
        bar.style.width = "0%";
    });
});