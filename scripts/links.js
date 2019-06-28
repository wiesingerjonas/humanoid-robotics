window.addEventListener('load', () =>{
  let linksContent = "## RoboCup\n- [RoboCup Official Website](http://www.robocup.org)\n- [RoboCup Austrian Open](https://robocupjunior.at)\n- [Standard Platform League](http://spl.robocup.org)\n## Robotics\n- [Softbank Robotics](https://www.ald.softbankrobotics.com/en/robots/nao)"

  const newContent = document.createElement('div');
  const contentWrapper = document.getElementById('linkWrapper');

  for (let i = 0; i < linksContent.split('\n').length; i++) {

      let part = linksContent.split('\n')[i];

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
