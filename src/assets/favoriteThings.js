import images from '../utils/importImages';

const favoriteThings = [
  {
    name: 'Movies',
    blurb:
      'These are the films I always find my way back to, and know will continue to grace my screen for many years to come.',
    items: [
      {
        text: 'Star Wars Episode V',
        description: `The quintessential Star Wars, Empire Strikes Back is my favorite of the franchise. From the opening battle on Hoth, the dual narrative of Luke's training alongside Han and Leia's flight, and culminating with the disasters in Cloud City`,
        image: images['empire_strikes_back.jpeg'],
      },
      {
        text: 'The Shawshank Redemption',
        description: `Redemption`,
        image: images['shawshank.png'],
      },
      {
        text: 'The Big Lebowski',
        description: `I am a guy of a certain age so it's probably not all that surprising this one made the cut.`,
        image: images['lebowski.png'],
      },
      {
        text: 'My Dinner with Andre',
        description:
          'Every time I watch this movie I fixate on something different, which provides a whole new lens through which to view the entire film.',
        image: images['dinner_four.png'],
      },
      {
        text: 'The Birdcage',
        description: `"Oh, yes. Another jibe, another joke at my expense. Well, why not? I'm not young, I'm not new, and everyone laughs at me. I'm quite aware of how ridiculous I am. The only solution is to go to where nobody is ridiculous, and everyone is equal." — Albert Goldman ${(<br />)} If the line above strikes you as out of place in a comedy, please go watch Nathan Lane and Robin Williams transorm the `,
        image: images['the_birdcage.png'],
      },
    ],
  },
  {
    name: 'Albums',
    blurb: 'eyo albums',
    items: [
      {
        text: 'Typhoon - White Lighter',
        description: 'Description for Item 1',
        image: images['white_lighter.png'],
      },
      {
        text: 'London Calling - The Clash',
        description: 'Description for Item 2',
        image: images['london_calling.png'],
      },
      {
        text: 'Unplugged in New York - Nirvana',
        description: 'Description for Item 2',
        image: images['unplugged.png'],
      },
      {
        text: 'Tim: Let It Bleed Edition - The Replacements',
        description: 'Description for Item 2',
        image: images['let_it_bleed.png'],
      },
    ],
  },
  {
    name: 'Pokémon',
    blurb: `Like many a youth of my generation, when I turned 7 I was gifted with the holy grail of handheld entertainment technology for a society on the cusp of a new millenium: a Gameboy Color. Disappointingly, my parents accompanied this with Super Mario Bros, but luckily another well-wishing relative rectified that with the only other cartridge that Gameboy would ever know: Pokémon Red. A deep and abiding love of Pokémon has remained with me ever since. These are some of the 'mon that I've always been particularly fond of.`,
    items: [
      {
        text: 'Dragonite',
        description: `Sure, it looks kind of dopey, but Dragons are the best and this is the coolest one in the club. It was also the only one in the club, for awhile there, and you didn't need to trade it's pre-evolutionary form to get, which you can't say for two of the later entries on this list.`,
        image: images['dragonite.png'],
      },
      {
        text: 'Gengar',
        description: 'Description for Item 2',
        image: images['gengar.png'],
      },
      {
        text: 'Arcanine',
        description: 'Description for Item 2',
        image: images['arcanine.png'],
      },
      {
        text: 'Alakazam',
        description: 'Description for Item 2',
        image: images['alakazam.png'],
      },
      {
        text: 'Ampharos',
        description: 'Description for Item 2',
        image: images['ampharos.png'],
      },
      {
        text: 'Mewtwo',
        description: `Over-use of my Mewtwo at the age of 7 led to a level 100 terror and I've remained fond of Mewtwo ever since`,
        image: images['mewtwo.png'],
      },
    ],
  },
  {
    name: 'Spaceships',
    blurb: 'eyo spaceships',
    items: [
      {
        text: 'The Millenium Falcon',
        description: `The spacecraft personified: Modified Corellian Freighter, YT-1300.`,
        image: images['falcon_gold.png'],
      },
      {
        text: 'The Enteprise D',
        description: 'TNG started ',
        image: images['underside_d.png'],
      },
      {
        text: 'The Yggdrasil',
        description:
          'It`s a tree flying through space, protected by a field projected by an erg.',
        image: images['treeship.png'],
      },
      {
        text: 'The Heart of Gold',
        description: 'Infinite Probability Drive.',
        image: images['heart_of_gold_doodle.jpg'],
      },
    ],
  },
  {
    name: 'Books',
    blurb: `My favorite of the genre broadly.`,
    items: [
      {
        text: `Hitchhiker's Guide to the Galaxy`,
        description: 'Description for Item 1',
        image: images['fortytwo.jpg'],
      },
      {
        text: 'Hyperion',
        description: 'Description for Item 2',
        image: images['hyperion.png'],
      },
      {
        text: 'The Scar',
        description:
          'Technically but not really a sequel to his also terrific Perdido Street Station, The Scar stands out as my favorite Mieville book (a distinction that perhaps only matters.',
        image: images['the_scar.jpg'],
      },
      {
        text: 'Transmetropolitan',
        description: 'Description for Item 2',
        image: images['spider.png'],
      },
      {
        text: 'Neuromancer',
        description: 'Description for Item 2',
        image: images['neuromancer.jpg'],
      },
      {
        text: 'Jonathan Strange and Mr Norrell',
        description: 'Description for Item 2',
        image: images['strange_norrell.png'],
      },
      {
        text: 'Year of our War',
        description: 'Description for Item 2',
        image: images['year_war.jpg'],
      },
    ],
  },
];

export default favoriteThings;
