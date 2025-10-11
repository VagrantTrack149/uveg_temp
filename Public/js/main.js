// Quiz interactivo
const quizButtons = document.querySelectorAll('.quiz-btn');
const result = document.getElementById('quiz-result');

quizButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.textContent === 'Jk#7uT!9pL') {
      result.textContent = '✅ Correcto: es una contraseña fuerte.';
      result.className = 'text-green-600 font-semibold mt-2';
    } else {
      result.textContent = '❌ Incorrecto: intenta de nuevo.';
      result.className = 'text-red-600 font-semibold mt-2';
    }
  });
});

// Mostrar/Ocultar consejos
const toggleBtn = document.getElementById('toggle-btn');
const tips = document.getElementById('tips');

toggleBtn.addEventListener('click', () => {
  tips.classList.toggle('hidden');
});
