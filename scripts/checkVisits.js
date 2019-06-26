window.addEventListener('load', () => {
    if (window.localStorage.getItem('visits') === null) {
        window.localStorage.setItem('visits', 0);
    } else {

        let visits = parseInt(window.localStorage.getItem('visits'));

        if (visits % 20 !== 0) {
            scrollToNews();
        }

        window.localStorage.setItem('visits', visits + 1);
    }
});

function scrollToNews() {
    const goal = 722;

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