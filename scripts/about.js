window.addEventListener('load', () =>{
  let aboutContent = "Humanoid Robotics is a part of the HTL Leonding's *Program of Excellence* which offers a range of different intensive courses. The main aim of Humanoid Robotics is to motivate students of our school to solve complex problems in the field of\n\n- Computer Vision\n- Autonomous Systems\n- Voice Recognition\n- Artificial Intelligence\n\nThe course is open for all students from 2nd to 5th grade who are interested in the above mentioned areas. The prerequisites are a good knowledge in programming and a strong focus in solving complex technical problems.\n\nThe course offerst the following two tracks:\n\n1. Basic Humanoid Behavior\n2. Robo Soccer\n\nThe Basic Humanoid Behavior addresses basic problems in programming humanoid robots like autonomous movements, natural interaction with humans, face recognition, speech recognition, etc. It is closely connected to the [Demo Humanoid Challenge](https://robocupjunior.at/wp-content/uploads/2018/02/Demo-Humanoid-Competition-2018-V1-5-1-FINAL.pdf) yearly held during the Austrian Open of the RoboCup Junior.\n\nIn the Robo Soccer track the central aim is to build the software necessary to get a robo team for the [Standard Platform League](http://spl.robocup.org) of the RoboCup."

  const newContent = document.createElement('div');
  const span = document.createElement('span');
  const contentWrapper = document.getElementById('aboutWrapper');
  let isItalic = false;
  let isBold = false;
  let seperator;

  if (aboutContent.includes('*')) {
    for (let i = 0; i < aboutContent.length; i++) {
      if (aboutContent.charAt(i) === '*') {
        isItalic = true;
        seperator = '*';
        if (aboutContent.charAt(i+1) === '*') {
          isBold = true;
          i++;
          seperator = '**';
        }
      }
    }
  }

  if (isItalic) {
    let parts = aboutContent.split(seperator);
    let text = parts[0];
    let textToChange = parts[1];
    let text2 = parts[2];
    span.textContent = textToChange;

    if (isBold) {
      span.style.weight = 'bold'; 
    } else {
      span.style.fontStyle = 'italic'; 
    }
  }

  for (let i = 0; i < aboutContent.split('\n').length; i++) {
    
    let textBox = document.createElement('p');

    textBox.textContent = aboutContent.split('\n')[i];
    newContent.appendChild(textBox);
ö
    contentWrapper.appendChild(newContent);
  }
});
