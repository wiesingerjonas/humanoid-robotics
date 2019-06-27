window.addEventListener('load', () => {
    const member = [
        {name: 'Quirin Ecker', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.', img: './img/user.jpg'},
        {name: 'Philipp Edlinger', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.At vero eos et accusam et justo duo dolores et ea rebum.', img: './img/user.jpg'},
        {name: 'Vanessa Primetzhofer', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.', img: './img/user.jpg'},
        {name: 'Samuel Kowatschek', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.', img: './img/user.jpg'},
        {name: 'Jonas Dorfinger', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.At vero eos et accusam et justo duo dolores et ea rebum.', img: './img/user.jpg'},
        {name: 'Sebastian Scholl', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.', img: './img/user.jpg'},
        {name: 'Jonas Wiesinger', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.At vero eos et accusam et justo duo dolores et ea rebum.At vero eos et accusam et justo duo dolores et ea rebum.', img: './img/user.jpg'},
    ];

    for (let i = 0; i < member.length; i++) {
        
        let name = member[i].name;
        let text = member[i].text;
        let imgSrc = member[i].img;

        const contentWrapper = document.getElementById('teamWrapper');
        const newMember = document.createElement('div');

        let nameBox = document.createElement('h2');
        let textBox = document.createElement('p');
        let textWrapper = document.createElement('div');
        let imgBox = document.createElement('div');
        let img = document.createElement('img');

        img.src = imgSrc;
        img.alt = 'cannot display image';

        imgBox.appendChild(img);

        imgBox.setAttribute('class', 'imgWrapper');

        newMember.appendChild(imgBox);

        let eintragData = [name, text];
        let outputArr = [nameBox, textBox];

        for (let i = 0; i < outputArr.length; i++) {
            outputArr[i].textContent = eintragData[i];
            textWrapper.appendChild(outputArr[i]);
            textWrapper.setAttribute('class', 'textWrapper');
            newMember.appendChild(textWrapper);
        }

        newMember.setAttribute('class', 'member');
        contentWrapper.appendChild(newMember);
    }
});