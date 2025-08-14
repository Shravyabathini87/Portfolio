function toggleDescription(button) {
  const desc = button.nextElementSibling;
  if (desc.style.display === 'block') {
    desc.style.display = 'none';
    button.textContent = 'View Details';
  } else {
    desc.style.display = 'block';
    button.textContent = 'Hide Details';
  }
}
