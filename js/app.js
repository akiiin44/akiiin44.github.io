const duaElements = document.querySelectorAll('.dua');

duaElements.forEach((dua) => {
  const duaHeader = dua.querySelector('.dua-header');
  const duaToggle = dua.querySelector('.dua-toggle');
  const duaContent = dua.querySelector('.dua-content');

  duaHeader.addEventListener('click', () => {
    dua.classList.toggle('dua-active');

    if (dua.classList.contains('dua-active')) {
      duaToggle.innerHTML = '<i class="fas fa-minus"></i>';
    } else {
      duaToggle.innerHTML = '<i class="fas fa-plus"></i>';
    }
  });
});


const duaHeader = document.querySelector('.dua-header');

duaHeader.addEventListener('click', function() {
  const duaContent = this.nextElementSibling;
  const duaToggle = this.querySelector('.dua-toggle');
  
  duaContent.classList.toggle('open');
  duaToggle.classList.toggle('open');
});

const duaHeaders = document.querySelectorAll('.dua-header');

duaHeaders.forEach(function(header) {
  header.addEventListener('click', function() {
    const duaContent = this.nextElementSibling;
    const duaToggle = this.querySelector('.dua-toggle');
    const contentHeight = duaContent.scrollHeight;
    
    duaContent.style.maxHeight = contentHeight + 'px';
    duaContent.classList.toggle('open');
    duaToggle.classList.toggle('open');
  });
})