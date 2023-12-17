document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.dropdown-toggle a');
    const contentItems = document.querySelectorAll('.content');
    const answerButtons = document.querySelectorAll('[data-modal]');
  
    // Обработчик клика на пункты бургер-меню
    menuLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Получаем ID из атрибута href
  
        // Скрываем все элементы контента
        contentItems.forEach(item => {
          item.style.display = 'none';
        });
  
        // Показываем только контент с соответствующим ID
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
          targetContent.style.display = 'block';
        }
  
        // Скрыть бургер-меню после выбора ID
        const dropdown = document.querySelector('.dropdown');
        dropdown.classList.remove('show');
      });
    });
  
    // Обработчик клика на кнопки Answer
    answerButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const targetModal = this.getAttribute('data-modal').substring(1); // Получаем ID модального окна из data-modal
  
        // Скрываем все модальные окна
        contentItems.forEach(item => {
          if (item.classList.contains('modal')) {
            item.style.display = 'none';
          }
        });
  
        // Показываем только модальное окно с соответствующим ID
        const targetModalContent = document.getElementById(targetModal);
        if (targetModalContent) {
          targetModalContent.style.display = 'block';
        }
      });
    });
  });

  
  document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const dropdown = document.querySelector('.dropdown');
    const menuLinks = document.querySelectorAll('.menu-link');
    const contentItems = document.querySelectorAll('.content');
  
    menuIcon.addEventListener('click', function() {
      this.classList.toggle('active');
      dropdown.classList.toggle('show');
    });
  
    menuLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
  
        contentItems.forEach(item => {
          item.style.display = 'none';
        });
  
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
          targetContent.style.display = 'block';
        }
  
        menuIcon.classList.remove('active');
        dropdown.classList.remove('show');
      });
    });
  });


  
  