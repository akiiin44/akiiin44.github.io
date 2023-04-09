const duaElements = document.querySelectorAll('.dua');

duaElements.forEach((dua) => {
  const duaHeader = dua.querySelector('.dua-header');
  const duaToggle = dua.querySelector('.dua-toggle');
  const duaContent = dua.querySelector('.dua-content');

  // Eine Funktion, die das Ein- und Ausklappen steuert
  function toggleDua() {
    dua.classList.toggle('dua-active');

    if (dua.classList.contains('dua-active')) {
      duaToggle.innerHTML = '<i class="fas fa-minus"></i>';
      // Die Höhe des Inhalts dynamisch anpassen
      const contentHeight = duaContent.scrollHeight;
      duaContent.style.maxHeight = contentHeight + 'px';
    } else {
      duaToggle.innerHTML = '<i class="fas fa-plus"></i>';
      // Die Höhe des Inhalts auf null setzen
      duaContent.style.maxHeight = '0px';
    }
  }

  // Nur einen Event-Listener pro Element hinzufügen
  duaHeader.addEventListener('click', toggleDua);
});