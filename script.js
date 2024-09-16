function toggleContent(index) {
    const content = document.getElementById(`content-${index}`);
    const arrow = document.querySelector(`#content-${index}`).previousElementSibling.querySelector('.arrow');

    if (content.style.display === "block") {
        content.style.display = "none";
        arrow.innerHTML = "&#9662;"; // seta para baixo
    } else {
        content.style.display = "block";
        arrow.innerHTML = "&#9652;"; // seta para cima
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Evita o comportamento padrão de rolar para o âncora
            
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('nav').offsetHeight,
                behavior: 'smooth'
            });
        });
    });
});

