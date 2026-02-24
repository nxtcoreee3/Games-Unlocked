const cards = document.querySelectorAll('.game-card');
const launcher = document.getElementById('launcher');
const frame = document.getElementById('gameFrame');
const backBtn = document.getElementById('backBtn');
const home = document.getElementById('home');
const credits = document.getElementById('credits');
const creditsBtn = document.getElementById('creditsBtn');
const search = document.getElementById('search');

cards.forEach(card => {
  card.onclick = () => {
    frame.src = card.dataset.url;
    launcher.classList.remove('hidden');
    home.classList.add('hidden');
    credits.classList.add('hidden');
  };
});

backBtn.onclick = () => {
  frame.src = '';
  launcher.classList.add('hidden');
  home.classList.remove('hidden');
};

creditsBtn.onclick = () => {
  home.classList.add('hidden');
  launcher.classList.add('hidden');
  credits.classList.remove('hidden');
};

search.oninput = () => {
  const q = search.value.toLowerCase();
  cards.forEach(card => {
    card.style.display = card.dataset.name.toLowerCase().includes(q)
      ? 'block'
      : 'none';
  });
};
