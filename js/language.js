document.addEventListener('DOMContentLoaded', function() {
    const langSelect = document.querySelector('.lang-select');
    const langLists = document.querySelector('.lang-lists');
    const listItems = document.querySelectorAll('.list-item');


    langSelect.addEventListener('click', function(e) {
        e.stopPropagation();
        langLists.classList.toggle('active');
    });




    listItems.forEach(item => {
        item.addEventListener('click', function() {
            const selectedLang = this.textContent;
            const langFirst = document.querySelector('.lang-first');
            langFirst.innerHTML = `${selectedLang}`;



            console.log('Selected language:', selectedLang);
        });
    });



    document.addEventListener('click', function(e) {
        if (!langSelect.contains(e.target)) {
            langLists.classList.remove('active');
        }
    });
}); 