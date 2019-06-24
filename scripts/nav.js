window.addEventListener('load', () => {
    const nav = document.getElementById('nav');
    const navElements = nav.getElementsByTagName('ul')[0].getElementsByTagName('li');
    const num = 468;

    setInterval(() => {
        if (scrollY >= 0 && scrollY < num) {
            navElements[1].classList.remove('active');
            navElements[0].classList.add('active');
        } else if (scrollY >= num && scrollY < num + 1 * 720) {
            navElements[0].classList.remove('active');
            navElements[2].classList.remove('active');
            navElements[1].classList.add('active');
        } else if (scrollY >= num && scrollY < num + 2 * 720) {
            navElements[1].classList.remove('active');
            navElements[3].classList.remove('active');
            navElements[2].classList.add('active');
        } else if (scrollY >= num && scrollY < num + 3 * 720) {
            navElements[2].classList.remove('active');
            navElements[4].classList.remove('active');
            navElements[3].classList.add('active');
        } else if (scrollY >= num && scrollY < num + 4 * 720) {
            navElements[3].classList.remove('active');
            navElements[5].classList.remove('active');
            navElements[4].classList.add('active');
        } else if (scrollY >= num && scrollY < num + 5 * 720) {
            navElements[4].classList.remove('active');
            navElements[6].classList.remove('active');
            navElements[5].classList.add('active');
        } else if (scrollY >= num && scrollY < num + 6 * 720) {
            navElements[5].classList.remove('active');
            navElements[6].classList.add('active');
        }           
    }, 10);

    for (let i = 0; i < navElements.length; i++) {
        navElements[i].addEventListener('click', () => {
            scrollToSection(i);
        });
    }

    function scrollToSection(index) {

        const goal = index * 720;

        const interval = setInterval(() => {

            if (goal <= scrollY) {
                scrollTo(0, scrollY - 30);
            } else if (goal > scrollY) {
                scrollTo(0, scrollY + 30);
            }

            if (goal === scrollY) {
                clearInterval(interval);
            }

        }, 10);
    }

});