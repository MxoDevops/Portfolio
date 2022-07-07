const demo = document.getElementById('portfolio');

const arrProject = [
  {
    name: 'Kontrol+ Alt',
    devInfo: 'Thokozani',
    description: 'A website of a hackathon event.',
    languages: ['html', 'css', 'javascript'],
    image: 'images/Capture666.PNG',
    liveVersion: 'See Live',
    sourceLink: 'See Source',
    description1: 'A website of a hackathon event.',
    id: 'open',
  },

  {
    name: 'Multi-Post Stories',
    devInfo: 'Thokozani',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text.",
    languages: ['html', 'css', 'javascript'],
    image: 'images/SnapshootPortfolio2.png',
    liveVersion: 'See Live',
    sourceLink: 'See Source',
    description1: 'A website of a hackathon event',
    class: 'float2',
  },

  {
    name: 'Facebook',
    devInfo: 'Thokozani',
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
    devInfo: 'Thokozani',
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
              <li>Frontend developer</li>
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

const popup = document.querySelectorAll('#open');
const container = document.getElementById('modal-container');
const container2 = document.getElementById('modal-container2');
const container3 = document.getElementById('modal-container3');
const container4 = document.getElementById('modal-container4');
const closebtn = document.getElementById('close');
const closebtn2 = document.getElementById('close2');
const closebtn3 = document.getElementById('close3');
const closebtn4 = document.getElementById('close4');

popup[0].addEventListener('click', () => {
  container.classList.add('active');
});

popup[1].addEventListener('click', () => {
  container2.classList.add('active');
});
popup[2].addEventListener('click', () => {
  container3.classList.add('active');
});
popup[3].addEventListener('click', () => {
  container4.classList.add('active');
});

closebtn.addEventListener('click', () => {
  container.classList.remove('active');
});

closebtn2.addEventListener('click', () => {
  container2.classList.remove('active');
});

closebtn3.addEventListener('click', () => {
  container3.classList.remove('active');
});

closebtn4.addEventListener('click', () => {
  container4.classList.remove('active');
});
