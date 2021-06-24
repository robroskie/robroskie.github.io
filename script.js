
const p = document.querySelectorAll('.panel');

removeAll = (p) => {
    p.forEach(el => {
        el.classList.remove('active');
    });
};

p.forEach(el => {
    el.addEventListener('click', () => {

        if(!el.classList.contains('active')){
            removeAll(p);
            el.classList.add('active');
        }
        console.log(`clicked${el.innerHTML}`);
    });
});