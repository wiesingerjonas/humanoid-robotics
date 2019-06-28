window.addEventListener('load', () =>{
  let publicationContent = "## Repostitories\n- [RoboDucks Code](https://gitlab.htl-leonding.ac.at/Roboducks/qualification.git)\n- [Shop Assistant](https://gitlab.htl-leonding.ac.at/stefnotch/nao-humanoid-challenge.git)\n## Papers\n- [Team Report 2017](TeamReports/StatusReport2017.pdf)\n- [Team Report 2016](TeamReports/StatusReport2016.pdf)"

  const newContent = document.createElement('div');
  const contentWrapper = document.getElementById('publicationsWrapper');

  for (let i = 0; i < publicationContent.split('\n').length; i++) {

      let part = publicationContent.split('\n')[i];

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
