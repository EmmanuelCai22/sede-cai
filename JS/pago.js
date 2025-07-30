document.addEventListener('DOMContentLoaded', () => {
  
  // FORMULARIO DE TIENDA (pagostore.html)
  const formStore = document.querySelector('.formulario-pago'); // selecciona el form de la tienda
  
  if (formStore) {
    formStore.addEventListener('submit', () => {
      // Muestra alerta al enviar el formulario
      alert('¡Gracias por tu compra en la tienda!\nRecibirás un correo con la confirmación.');
    });
  }

  // FORMULARIO DE ENTRADAS (pago-entradas.html)
  const formEntradas = document.querySelector('main.formulario-container form'); // selecciona el form de entradas
  
  if (formEntradas) {
    formEntradas.addEventListener('submit', () => {
      // Muestra alerta al enviar el formulario
      alert('¡Gracias por tu compra de entradas!\nTu recibo y código QR llegarán por correo.');
    });
  }
});
