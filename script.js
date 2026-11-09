const buyButton = document.querySelector('#buy-button');
const toast = document.querySelector('#cart-toast');
let toastTimer;

buyButton.addEventListener('click', () => {
  toast.classList.add('visible');
  buyButton.innerHTML = 'Añadida al carrito <span>✓</span>';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('visible');
    buyButton.innerHTML = 'Añadir al carrito <span>→</span>';
  }, 2800);
});

const feedbackForm = document.querySelector('#feedback-form');
const formMessage = document.querySelector('#form-message');

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.textContent = '¡Gracias! Esta demo no envía ni guarda tu opinión.';
  feedbackForm.reset();
});
