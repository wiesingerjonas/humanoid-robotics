window.addEventListener('load', () => {
    const scenes = document.getElementsByClassName('scene');
    for (const scene of scenes) {
        new Parallax(scene)
    }
});