const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const edad = document.getElementById('edad');
const enviar = document.getElementById('enviar');
const form = document.getElementById('registroForm');

// Validaciones individuales
function validarNombre() {
  const error = document.getElementById('nombreError');
  if (nombre.value.length < 3) {
    error.textContent = "Debe tener al menos 3 caracteres.";
    return false;
  }
  error.textContent = "";
  return true;
}

function validarCorreo() {
  const error = document.getElementById('correoError');
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(correo.value)) {
    error.textContent = "Correo no válido.";
    return false;
  }
  error.textContent = "";
  return true;
}

function validarPassword() {
  const error = document.getElementById('passwordError');
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;
  if (password.value.length < 8 || !regex.test(password.value)) {
    error.textContent = "Mínimo 8 caracteres, un número y un símbolo.";
    return false;
  }
  error.textContent = "";
  return true;
}

function validarConfirmPassword() {
  const error = document.getElementById('confirmPasswordError');
  if (password.value !== confirmPassword.value) {
    error.textContent = "Las contraseñas no coinciden.";
    return false;
  }
  error.textContent = "";
  return true;
}

function validarEdad() {
  const error = document.getElementById('edadError');
  if (edad.value < 18) {
    error.textContent = "Debes tener al menos 18 años.";
    return false;
  }
  error.textContent = "";
  return true;
}

function validarFormulario() {
  const esValido =
    validarNombre() &&
    validarCorreo() &&
    validarPassword() &&
    validarConfirmPassword() &&
    validarEdad();

  enviar.disabled = !esValido;
}

[nombre, correo, password, confirmPassword, edad].forEach((input) => {
  input.addEventListener('input', validarFormulario);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Formulario enviado correctamente 🎉');
});
