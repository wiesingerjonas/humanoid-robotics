window.addEventListener('load', () => {
    const activities = [
        {date: '06to10-09-2018', text: 'Naos @ Ars Electronica Festival 2018. The Naos were present at all five days of the Ars Electronica Festival and we showed young coders how to program humanoid robots.'},
        {date: '29-06-2018', text: 'Presentation at the Closing Ceremony of the "Jahr der digitalen Bildung" of the province of Upper Austria.'},
        {date: '25-06-2018', text: 'Presentation at the opening ceremony at the OCCE (Open Conference on Computers in Education) held at the Ars Electronica Center Linz.'},
        {date: '18-05-2019', text:'Presentation at the We Are Developers Conference, Vienna'},
        {date: '21-04-2018', text:'Presentation at the Global Azure Bootcamp, Linz'},
        {date: '20-04-2018', text:'Presentation at the CoderDojo, Linz'},
        {date: '13to14-04-2018', text:'1st Price at the Demo Humanoid Challenge 2018'},
        {date: '26to29-03-2018', text:'Robotic Camp at Fabasoft'},
        {date: '19to21-02-2018', text:'Robotic Camp at Fabasoft'},
        {date: '25to26-01-2018', text:'Tag der offenen Tür'},
        {date: '03to06-01-2018', text:'Robotic Camp at Fabasoft'},
        {date: '08to09-12-2017', text:'Robotic Camp at Fabasoft'},
    ];

    
    for (let i = 0; i < activities.length; i++) {
        
        let date = formatDate(activities[i].date);
        let text = activities[i].text;

        const contentWrapper = document.getElementById('activitiesWrapper');
        const newActivity = document.createElement('div');

        let dateBox = document.createElement('h2');
        let textBox = document.createElement('p');

        let eintragData = [date, text];
        let outputArr = [dateBox, textBox];

        for (let i = 0; i < outputArr.length; i++) {
            outputArr[i].textContent = eintragData[i];
            newActivity.appendChild(outputArr[i]);
        }
        newActivity.setAttribute('class', 'activity');
        contentWrapper.appendChild(newActivity);
    }
});

function formatDate(date) {
    let parts = date.split('-');
    let day = parts[0];
    let month = parseInt(parts[1]);
    let year = parseInt(parts[2]);

    if (day.includes('to')) {
        parts = day.split('to');
        let from = parseInt(parts[0]);
        let to = parseInt(parts[1]);

        return `${from}. - ${to}. ${convertMonth(month)} ${year}`;
    } else {
        return `${day}. ${convertMonth(month)} ${year}`;
    }
}

function convertMonth(month) {
    switch (month) {
        case 01: return 'January'
            break;

        case 02: return 'Frebruary'
            break;
        
        case 03: return 'March'
            break;

        case 04: return 'April'
            break;

        case 05: return 'May'
            break;
        
        case 06: return 'June'
            break;

        case 07: return 'July'
            break;

        case 08: return 'August'
            break;

        case 09: return 'September'
            break;

        case 10: return 'October'
            break;

        case 11: return 'November'
            break;
        
        case 12: return 'December'
        break;
    }
}