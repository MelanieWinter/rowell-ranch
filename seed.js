require('dotenv').config();
require('./config/database');

const Event = require('./models/event');

(async function() {

  await Event.deleteMany({});
  const events = await Event.create([
    { 
      title: "Rockin' Bull Bash", 
      description: 'Professional bull riding', 
      recurring: false, 
      date: new Date('2024-05-17'), 
      price: 2500,
      image: './assets/bull-bash.jpeg'
    },
    { 
      title: 'PRCA Pro Rodeo', 
      description: 'Rowell Ranch Rodeo - Day 1', 
      recurring: false, 
      date: new Date('2024-05-18'), 
      price: 2500,
      image: './assets/saturday-prca.jpeg'
    },
    { 
      title: 'PRCA Pro Rodeo', 
      description: 'Rowell Ranch Rodeo Day 2', 
      recurring: false, 
      date: new Date('2024-05-19'), 
      price: 2500,
      image: './assets/sunday-prca.jpeg'
    },
    { 
      title: 'Parade', 
      description: 'The official Rowell Ranch Rodeo parade', 
      recurring: false, 
      date: new Date('2024-05-11'), 
      price: 2500,
      image: './assets/parade.jpeg'
    },
    { 
      title: 'Cecil Jones Cowboy Challenge', 
      description: '3 person team cowboy challenge', 
      recurring: false, 
      date: new Date('2024-05-15'), 
      price: 2500,
      image: './assets/cowboy-challenge.jpeg' 
    },
    { 
      title: 'BBQ & Dance', 
      description: 'Food and fun', 
      recurring: false, 
      date: new Date('2024-05-15'), 
      price: 2500,
      image: './assets/bbq-dance.jpeg'
    },
    { 
      title: 'Cowgirl Picnic', 
      description: 'Cowgirls only luncheon', 
      recurring: false, 
      date: new Date('2024-05-16'), 
      price: 2500,
      image: './assets/cowgirl-picnic.jpeg'
    },
    { 
      title: 'Team Roping', 
      description: 'A team competition event', 
      recurring: false, 
      date: new Date('2024-05-16'), 
      price: 2500,
      image: './assets/splash-hero.jpeg'
    },
    { 
      title: 'Special Partners', 
      description: 'For children with challenges', 
      recurring: false, 
      date: new Date('2024-05-18'), 
      price: 2500,
      image: './assets/special-partners.jpeg'
    },
    { 
      title: 'Special Partners', 
      description: 'For children with challenges', 
      recurring: false, 
      date: new Date('2024-05-19'), 
      price: 2500,
      image: './assets/special-partners.jpeg'
    },
    { 
      title: 'Cowboy Experience', 
      description: 'Fun learning event prior to rodeo', 
      recurring: false, 
      date: new Date('2024-05-18'), 
      price: 2500,
      image: './assets/cowboy-experience.jpeg'
    },
    { 
      title: 'Cowboy Experience', 
      description: 'Fun learning event prior to rodeo', 
      recurring: false, 
      date: new Date('2024-05-19'), 
      price: 2500,
      image: './assets/cowboy-experience.jpeg'
    },
  ]);

  console.log(events)

  process.exit();

})();