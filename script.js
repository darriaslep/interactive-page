// Показываем превью при наведении на QR-код
const qrPreview = document.getElementById('qr-preview');
const qrCodeArea = document.querySelector('.main-image');

qrCodeArea.addEventListener('mousemove', (event) => {
  // Условно определяем положение QR-кода
  if (event.offsetX > 500 && event.offsetY > 400) {
    qrPreview.style.display = 'block';
  } else {
    qrPreview.style.display = 'none';
  }
});

// Показываем всплывающее окно при наведении на текст
const tooltip = document.getElementById('tooltip');
const triggerText = document.getElementById('trigger-text');

triggerText.addEventListener('mouseover', () => {
  tooltip.style.display = 'block';
});

triggerText.addEventListener('mouseout', () => {
  tooltip.style.display = 'none';
});