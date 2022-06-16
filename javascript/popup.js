const popup = document.getElementById('open');
const popup2 = document.getElementById('open2');
const popup3 = document.getElementById('open3');
const popup4 = document.getElementById('open4');
const container = document.getElementById('modal-container');
const container2 = document.getElementById('modal-container2');
const container3 = document.getElementById('modal-container3');
const container4 = document.getElementById('modal-container4');
const close = document.getElementById('close');
const close2 = document.getElementById('close2');
const close3 = document.getElementById('close3');
const close4 = document.getElementById('close4');

//open modal

popup.addEventListener('click', () => {
  container.classList.add('active');
});
popup2.addEventListener('click', () => {
  container2.classList.add('active');
});
popup3.addEventListener('click', () => {
  container3.classList.add('active');
});
popup4.addEventListener('click', () => {
  container4.classList.add('active');
});

//close modal

close.addEventListener('click', () => {
  container.classList.remove('active');
});
close2.addEventListener('click', () => {
  container2.classList.remove('active');
});
close3.addEventListener('click', () => {
  container3.classList.remove('active');
});
close4.addEventListener('click', () => {
  container4.classList.remove('active');
});
