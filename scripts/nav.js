window.addEventListener('load', () => {
    const nav = document.getElementById('nav');
    const navElements = nav.getElementsByTagName('ul')[0].getElementsByTagName('li');
    const num = 468;
    const scrollHeight = 722;    

    setInterval(() => {

        // for (let i = 0; i < navElements.length; i++) {
        //     if (scrollY >= num && scrollY < num + i * scrollHeight) {

        //         if (navElements[i-1] !== undefined) {
        //             navElements[i-1].classList.remove('active');
        //         }

        //         if (navElements[i+1] !== undefined) {
        //             navElements[i+1].classList.remove('active');
        //         }

        //         navElements[i].classList.add('active');    
        //     }
        // }

        if (scrollY >= 0 && scrollY < num) {
            navElements[1].classList.remove('active');
            navElements[0].classList.add('active');
        } else if (scrollY >= num && scrollY < num + 1 * scrollHeight) {
            navElements[0].classList.remove('active');
            navElements[2].classList.remove('active');
            navElements[1].classList.add('active');
        } else if (scrollY >= num && scrollY < num + 2 * scrollHeight) {
            navElements[1].classList.remove('active');
            navElements[3].classList.remove('active');
            navElements[2].classList.add('active');
        } else if (scrollY >= num && scrollY < num + 3 * scrollHeight) {
            navElements[2].classList.remove('active');
            navElements[4].classList.remove('active');
            navElements[3].classList.add('active');
        } else if (scrollY >= num && scrollY < num + 4 * scrollHeight) {
            navElements[3].classList.remove('active');
            navElements[5].classList.remove('active');
            navElements[4].classList.add('active');
        } else if (scrollY >= num && scrollY < num + 5 * scrollHeight) {
            navElements[4].classList.remove('active');
            navElements[6].classList.remove('active');
            navElements[5].classList.add('active');
        } else if (scrollY >= num && scrollY < num + 6 * scrollHeight) {
            navElements[5].classList.remove('active');
            navElements[7].classList.remove('active');
            navElements[6].classList.add('active');
        } else if (scrollY >= num && scrollY < num + 7 * scrollHeight) {
            navElements[6].classList.remove('active');
            navElements[7].classList.add('active');
        }          
    }, 10);

    for (let i = 0; i < navElements.length; i++) {
        navElements[i].addEventListener('click', () => {
            scrollToSection(i);
        });
    }

    function scrollToSection(index) {

        const goal = index * scrollHeight;

        const interval = setInterval(() => {

            if (goal <= scrollY) {
                scrollTo(0, scrollY - 30);
            } else if (goal > scrollY) {
                scrollTo(0, scrollY + 30);
            }

            if (goal <= scrollY + 30 && goal >= scrollY - 30) {
                clearInterval(interval);
                scrollTo(0, goal);
            }

        }, 10);
    }
});