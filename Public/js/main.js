//
// ARCHIVO NO FUNCIONAL
//
//


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
/*const toggleBtn = document.getElementById('toggle-btn');
const tips = document.getElementById('tips');

toggleBtn.addEventListener('click', () => {
  tips.classList.toggle('hidden');
});*/


        
 // Password Strength Checker
document.getElementById('contra-input').addEventListener('input', function() {
        const password = this.value;
        console.log(password);
        let strength = 0;
        let strengthText = 'Débil';
        let strengthColor = 'bg-red-500';
        let width = 20;
        // Length check
        if (password.length >= 8) strength += 1;
        if (password.length >= 12) strength += 1;
            
        // Character variety checks
        if (/[a-z]/.test(password)) strength += 1;
        if (/[A-Z]/.test(password)) strength += 1;
        if (/[0-9]/.test(password)) strength += 1;
        if (/[^A-Za-z0-9]/.test(password)) strength += 1;
          
            // Determine strength level
        if (strength >= 5) {
            strengthText = 'Muy Fuerte';
            strengthColor = 'bg-green-500';
            width = 100;
        } else if (strength >= 4) {
            strengthText = 'Fuerte';
            strengthColor = 'bg-green-400';
            width = 80;
        } else if (strength >= 3) {
            strengthText = 'Moderada';
            strengthColor = 'bg-yellow-500';
            width = 60;
        } else if (strength >= 2) {
            strengthText = 'Débil';
            strengthColor = 'bg-orange-500';
            width = 40;
        }
            
            // Update UI
            document.getElementById('password-strength-text').textContent = strengthText;
            const fillElement = document.getElementById('password-strength-fill');
            fillElement.className = `password-strength-fill ${strengthColor}`;
            fillElement.style.width = `${width}%`;
        });
        
        // Drag and Drop functionality
        const draggables = document.querySelectorAll('.draggable');
        const dropAreas = document.querySelectorAll('.drag-area');
        
        draggables.forEach(draggable => {
            draggable.addEventListener('dragstart', () => {
                draggable.classList.add('dragging');
            });
            
            draggable.addEventListener('dragend', () => {
                draggable.classList.remove('dragging');
                dropAreas.forEach(area => area.classList.remove('active'));
            });
        });
        
        dropAreas.forEach(area => {
            area.addEventListener('dragover', e => {
                e.preventDefault();
                area.classList.add('active');
            });
            
            area.addEventListener('dragleave', () => {
                area.classList.remove('active');
            });
            
            area.addEventListener('drop', e => {
                e.preventDefault();
                area.classList.remove('active');
                
                const draggable = document.querySelector('.dragging');
                if (draggable) {
                    const concept = draggable.getAttribute('data-concept');
                    const targetConcept = area.querySelector('span').textContent.toLowerCase().trim();
                    
                    if (concept === targetConcept) {
                        area.innerHTML = '';
                        area.appendChild(draggable);
                        draggable.classList.remove('cursor-move');
                        draggable.setAttribute('draggable', 'false');
                        area.style.backgroundColor = '#d1fae5';
                        area.style.borderColor = '#10b981';
                    } else {
                        // Incorrect match - provide feedback
                        area.style.backgroundColor = '#fee2e2';
                        area.style.borderColor = '#ef4444';
                        setTimeout(() => {
                            area.style.backgroundColor = '';
                            area.style.borderColor = '';
                        }, 1000);
                    }
                }
            });
        });