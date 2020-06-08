const gameListEl = document.getElementById('game-list');
const cloudEl = document.getElementById('cloud-link');

const gameList = [
  { title: 'シューティングゲーム', url: './js_game_practice/index.html' },
];

function createGameList() {
  gameList.forEach((game) => {
    const gameList = document.createElement('li');
    gameList.innerHTML = `
    <span>${game.title}</span><a href=${game.url}><i class="fas fa-arrow-right"></i></a>
    `;

    gameListEl.appendChild(gameList);
  });
}

function createLink() {
  gameList.forEach((game) => {
    const linkList = document.createElement('a');
    linkList.classList.add('cloud');
    linkList.setAttribute('href', `${game.url}`);
    linkList.innerHTML = `
      <img src="./img/cloud.png" alt="雲" />
      <span>${game.title}で遊ぶ</span>
    `;
    cloudEl.appendChild(linkList);
  });
}

createGameList();
createLink();
