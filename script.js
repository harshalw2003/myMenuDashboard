 const buttons = document.querySelectorAll('.nav-btn');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                buttons.forEach(btn => {
                    btn.classList.remove('active-btn');
                });
               button.classList.add('active-btn');
            });

        });