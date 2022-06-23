const demo = document.getElementById('portfolio');

const arrProject = [
  {
    name: 'Tonic',
    devInfo: 'Canopy',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text.",
    languages: ['html', 'css', 'javascript'],
    image: 'images/SnapshootPortfolio.png',
    liveVersion: 'See Live',
    sourceLink: 'See Source',
    description1:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    id: 'open',
  },

  {
    name: 'Multi-Post Stories',
    devInfo: 'Canopy',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text.",
    languages: ['html', 'css', 'javascript'],
    image: 'images/SnapshootPortfolio2.png',
    liveVersion: 'See Live',
    sourceLink: 'See Source',
    description1:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
  },

  {
    name: 'Facebook',
    devInfo: 'Canopy',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text.",
    languages: ['html', 'css', 'javascript'],
    image: 'images/SnapshootPortfolio3.png',
    liveVersion: 'See Live',
    sourceLink: 'See Source',
    description1:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
  },

  {
    name: 'Uber Navigation',
    devInfo: 'Canopy',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text.",
    languages: ['html', 'css', 'javascript'],
    image: 'images/SnapshootPortfolio.png',
    liveVersion: 'See Live',
    sourceLink: 'See Source',
    description1:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    class: 'float-2',
  },
];

function addProjects(n) {
  const { name, devInfo, description1, languages, image } = arrProject[n];

  demo.innerHTML += `
  <div class="cards">
        <div class="projects">
          <img class="img-cards" alt="" src=${image} />
          <div class="float">
            <h2>${name}</h2>
            <ul class="info">
              <li>${devInfo}</li>
              <li><img class="dot" alt="" src="images/Counter.png" /></li>
              <li>Backend dev</li>
              <li><img class="dot" alt="button" src="images/Counter.png" /></li>
              <li>2022</li>
            </ul>
            <p class="info-2">
              ${description1}
            </p>
            <ul class="languages">
              <li>${languages[0]}</li>
              <li>${languages[1]}</li>
              <li>${languages[2]}</li>
            </ul>
            <button type="button" id="open" class="project-btn" type="submit">
              See Project
            </button>
          </div>
        </div>
  `;
}

for (let i = 0; i < arrProject.length; i += 1) {
  addProjects(i);
}

const popup = document.getElementById('open');
const container = document.getElementById('modal-container');
const close = document.getElementById('close');

popup.addEventListener('click', () => {
  container.classList.add('active');
});

close.addEventListener('click', () => {
  container.classList.remove('active');
});
