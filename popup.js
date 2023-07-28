const popup = (project) => {
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.innerHTML = `<div class="overlay">
  <div class="popup">
  <div class="popup-primary">
    <div class="popup-title-container">
      <h2>${project.name}</h2>
      <a class="icon-container icon-cancel">
      <img src="images/cancel-icon.svg"/>
      </a>
    </div>
    <ul class="languages popup-languages">
    ${project.technologies
      .map(
        (tech) => `
    <li>${tech}</li>
    `
      )
      .join("")}
    </ul>
  </div>
  <div class="popup-description">
  <div class="image-container">
  <img src=${project.img} alt="Picture of project ${project.name}"/>
  </div>
  <div class="popup-description-block">
  <p>
    ${project.description}
  </p>
  <div class="popup-buttons-container">
    <div class="button-container">
      <button class="btn popup-btn popup-btn--live"  href=${
        project.linkLiveVersion
      }>
        See live <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 12C5 8.13401 8.13401 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12ZM16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H17.5858L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H16Z" fill="currentColor"/>
</svg>
      </button>
    </div>
    <div class="button-container">
      <button class="btn popup-btn popup-btn--source" href=${
        project.linkSourceVersion
      }>
        See source  <svg
          class="popup-btn-icon"
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Frame" clip-path="url(#clip0_48_835)">
            <g id="Group">
              <path
                id="Vector"
                d="M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z"
                fill="currentColor"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_48_835">
              <rect width="18" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
    </div>
  </div>
  </div>
</div>
</div>`;

  return overlay.innerHTML;
};

export default popup;
