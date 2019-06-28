window.addEventListener('load', () =>{
  let pressContent = "## 2018\n- Bildungs TV: [RoboCupJunior Austrian Open 2018 zu Gast in Linz](https://www.youtube.com/watch?v=Y0yOACwzvC0), April 20, 2018\n- Tips Linz Land: [Internationaler Roboter-Wettbewerb](Media/2018/Tipps.png), April 16, 2018\n- Bezirksrundschau: [Schüler lassen in Linz Roboter gegeneinander antreten](https://www1.meinbezirk.at/linz/c-lokales/schueler-lassen-in-linz-roboter-gegeneinander-antreten_a2501149), April 13, 2018\- OÖ Heute: [Robober-Wettkampf an der HTL-Leonding](Media/2018/OoeHeute_2018-04-13.mp4), April 13, 2018"

  const newContent = document.createElement('div');
  const contentWrapper = document.getElementById('pressWrapper');

  for (let i = 0; i < pressContent.split('\n').length; i++) {

      let part = pressContent.split('\n')[i];

      let textBox;

    if (part.charAt(0) === '#' && part.charAt(1) === '#') {
      textBox = document.createElement('h3');

      if (part.charAt(2) === ' ') {
        part = part.substring(3, part.length);
      } else {
        part = part.substring(2, part.length);
      }

    } else if (part.charAt(0) === '#') {
      textBox = document.createElement('h2');

      if (part.charAt(1) === ' ') {
        part = part.substring(2, part.length);
      } else {
        part = part.substring(1, part.length);
      }
    } else {
      textBox = document.createElement('p');
    }

    if (part.charAt(0) === '-') {
      textBox = document.createElement('a');

      let link = part.split('(')[1].split(')')[0];

      textBox.href = link;
      textBox.target = "_blank";

      part = '- ' + part.split('[')[1].split(']')[0];
    }

    textBox.textContent = part;
    newContent.appendChild(textBox);
    newContent.appendChild(document.createElement('br'));

    contentWrapper.appendChild(newContent);

  }
});
