import projectsData from './data.js';
import popup from './popup.js';

/* Feature project */
const project = projectsData.find((project) => project.id === 1);
const projectListItems = project.technologies
  .map((item) => `<li class="dev-tool">${item}</li>`)
  .join('');
const portfolioTitle = document.createElement('div');
portfolioTitle.className = 'works-title';
portfolioTitle.innerHTML = `<h1>My Recent Works</h1>
<div class="vector-container">
  <img src="images/recent-works-vector.svg" />
</div>`;
const mainProject = document.createElement('div');
mainProject.className = 'main-project';
mainProject.innerHTML = `
  <div class="image-container">
    <img
      src=${project.img}
      alt="Picture of ${project.name}"
    />
  </div>
  <div class="project-name">
    <h2>${project.name}</h2>
    <p class="project-description">
      ${project.description}
    </p>
    <ul class="languages">
      ${projectListItems}
    </ul>
    <div class="button-container-project">
      <button class="btn">See Project</button>
    </div>
  </div>`;

/* WORKS CARD */

const workCards = document.createElement('div');
workCards.className = 'works-cards';

const workCardData = (project, index) => {
  const workCard = document.createElement('div');
  workCard.className = `works-card works-card--${index}`;

  const workCardItems = project.technologies
    .map((item) => `<li class="dev-tool">${item}</li>`)
    .join('');

  workCard.innerHTML = `<div class="works-card-details">
  <h2>${project.name}</h2>
  <p>
    ${project.description}
  </p>
  <ul class="languages">
    ${workCardItems}
  </ul>
</div>
<div class="button-container-works-cards">
  <button class="btn">See project</button>
</div>`;

  return workCard;
};
const section = document.querySelector('#portfolio');
section.appendChild(portfolioTitle);
section.appendChild(mainProject);
section.appendChild(workCards);

projectsData.forEach((project, index) => {
  if (index === 0) return;
  workCards.appendChild(workCardData(project, index));
});

const buttonOpenProject = document.querySelectorAll('.works-section .btn');
buttonOpenProject.forEach((item, index) => {
  item.addEventListener('click', () => {
    const project = projectsData[index];
    const popupDiv = popup(project);
    section.insertAdjacentHTML('beforeend', popupDiv);
  });
});

/* CHECKING FOR DOM AFTER ADDING OVERLAY */

function openURL(event) {
  const button = event.target.closest('.popup-btn');
  if (button) {
    const href = button.getAttribute('href');
    if (href) {
      window.open(href, '_blank');
    }
  }
}

const observer = new MutationObserver(() => {
  const overlay = document.querySelector('.overlay');
  if (overlay) {
    const seeSourceButton = overlay.querySelector('.popup-btn--source');
    seeSourceButton.addEventListener('click', openURL);

    const seeLiveButton = overlay.querySelector('.popup-btn--live');
    seeLiveButton.addEventListener('click', openURL);

    const exitButton = overlay.querySelector('.icon-cancel');
    exitButton.addEventListener('click', () => overlay.remove());
  }
});
observer.observe(document.querySelector('#portfolio'), {
  childList: true,
  subtree: true,
});
