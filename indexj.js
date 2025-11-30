document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('active');
});

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "Git & GitHub", "UI/UX Design"];
const skillsContainer = document.querySelector('.skills-container');
skills.forEach(skill => skillsContainer.innerHTML += `<div class="skill-box">${skill}</div>`);

const projects = ["E-Commerce Website", "Government Website", "Sales Funnel"];
const projectsContainer = document.querySelector('.projects-container');
projects.forEach(project => projectsContainer.innerHTML += `<div class="box">${project}</div>`);

document.querySelector('.contact-form').addEventListener('submit', e => {
    e.preventDefault();
    alert(`Message sent!`);
    e.target.reset();
});
