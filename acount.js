function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Validar que los campos no estén vacíos
  if (!name || !email || !password || !confirmPassword) {
      alert('Todos los campos son obligatorios.');
      return false;
  }

  // Validar que las contraseñas coincidan
  if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return false;
  }

  // Validar formato del correo electrónico
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
      alert('Por favor ingresa un correo electrónico válido.');
      return false;
  }

  alert('Cuenta creada con éxito!');
  return true;
}
