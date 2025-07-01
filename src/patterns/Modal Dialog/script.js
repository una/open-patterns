const modal = document.getElementById('myModal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');

openBtn.addEventListener('click', () => {
  modal.showModal();
});

closeBtn.addEventListener('click', () => {
  modal.close();
});