// toggle icon navbar 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
// scroll secitons 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
  // move navbar links with curent section 
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
      })
    }
  })

  // stay header on Top 
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
}
// portfolio section 
const filterButtons = document.querySelectorAll('.filter-button');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filterValue = button.getAttribute('data-filter');
        projects.forEach(project => {
            if (filterValue === 'all') {
                project.style.display = 'block';
            } else {
                const projectType = project.getAttribute('data-type');
                if (projectType === filterValue) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            }
        });
    });
});

// skills section generate skills 
const skillsSet = {
  "frontend": {
    "html5": "The HyperText Markup Language (HTML) is the standard markup language for creating web pages.",
    "CSS-CSS3": "Cascading Style Sheets (CSS) is a style sheet language used to control the presentation of HTML documents.",
    "Bootstrap": "A front-end CSS framework for developing responsive, mobile-first websites.",
    "javaScript": "JavaScript is a programming language that is used to add interactivity to web pages.",
    "React": "A JavaScript library for building user interfaces with reusable components."
  },
  "backend": {
    "nodejs": "Node is used for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code.",
    "Express": "Express is a NodeJS framework that helps manage servers and routes.",
    "Mongoose": "A MongoDB object modeling (ODM) library for Node.js that provides a simple and elegant way to interact with MongoDB databases.",
    "MongoDB": "A NoSQL document database that is flexible, scalable, and easy to use.",
    "FIREBASE":"Firebase is a mobile and web application development platform that provides a set of tools and services that front-end developers can use to build and deploy scalable and reliable applications."

    
  },
  "tools": {
    "git": "is a distributed version control system that tracks changes in any set of computer files.",
    "gitHub":"is a cloud-based hosting service that helps developers store and manage their code, as well as collaborate on projects with other developers.",
    "Figma": " is a cloud-based design platform that helps teams design and prototype digital products.",
    "command-Line": "is a text-based user interface that allows users to interact with a computer by typing commands.",
  }
}


const skillsList = document.querySelector('.skillsList');



skillsList.addEventListener('click', (e) => {

  let curentElement = e.target;
  let skillscontainer = curentElement.nextElementSibling;
 
  let curentSkils ;
  //  generate my skills based on type of skills category 
  if (curentElement.classList[1] === 'FrontEnd-skills') {
    curentSkils = skillsSet.frontend;
  }
  else if (curentElement.classList[1] === 'back-End')
    curentSkils = skillsSet.backend;
  else if (curentElement.classList[1] === 'tools')
    curentSkils = skillsSet.tools;
  else
    return;

    const appendSkills = (skill,detail)=>{
      let  li = document.createElement('li');
      let  div = document.createElement('div');
      let sikillDetailcontainer = document.createElement('div');
      sikillDetailcontainer.classList.add('skillDetail');
      let  p = document.createElement('p');
      let hr = document.createElement('hr');
      let img = document.createElement('img');
      img.setAttribute("src",`Assets/image/skillsImages/${skill}.png`);
      img.classList.add('skills-img');
      li.classList.add('skill-content');
      div.classList.add('skill');
      p.classList.add('detail');
      div.textContent = skill;
      p.textContent = detail;
      sikillDetailcontainer.appendChild(div);
      sikillDetailcontainer.appendChild(p);
      li.appendChild(img);
      li.appendChild(sikillDetailcontainer);
      skillscontainer.appendChild(li);
      li.after(hr);
    }

  if (skillscontainer.innerHTML == '')
    for (const [key, value] of Object.entries(curentSkils)) 
      appendSkills(key,value);
     else 
    skillscontainer.innerHTML = '';
  curentElement.firstElementChild.classList.toggle('bx-chevron-up')
})



let year = document.querySelector("footer  .footer-text .year");

year.innerHTML = new Date().getFullYear();

