import images from '../utils/importImages';

const favoriteThings = [
  {
    name: 'Movies',
    blurb: `I'm not a fervent film aficionado, as one can probably discern from the fact that these are the films I somehow can't resist continously popping on.`,
    items: [
      {
        text: 'The Birdcage',
        description: `"Oh, yes. Another jibe, another joke at my expense. Well, why not? I'm not young, I'm not new, and everyone laughs at me. I'm quite aware of how ridiculous I am. The only solution is to go to where nobody is ridiculous, and everyone is equal." — Albert Goldman. The Bird`,
        image: images['the_birdcage.png'],
      },
      {
        text: 'My Dinner with Andre',
        description: `My introduction to this movie was the Dinner with Andre action figures at the tail end of Waiting for Guffman. It took me no small amount of time to realize that the man behind the titular pronoun was not only the screenwriter of this movie specifically and plays more generally, he was the guy who kept saying 'Inconcievable!' in the Princess Bride. Once said realization came upon me, there was nothing doing until I watched the movie, which I've then proceeded to do time and again. While the dialogue often veers into monologue (particularly in the first half) the details and reservations in Andre Gregory's performance add a depth that changes my opinion of his character (and thus the film) each time I watch it. The conversation, scripted based on weeks of recorded conversations between Shawn and Gregory, is loose but lovely, contrasting without being combative. Perhaps my favorite touch, though, is how the movie is Satie''Gymnopédies', pushing you into a quiet reflection of Wally's Dinner with Andre.`,
        image: images['dinner_four.png'],
      },
      {
        text: 'The Shawshank Redemption',
        description: `While I appreciate Morgan Freeman's work in almost everything, 'The Shawshank Redemption' has always been my favorite Freeman vehicle. Despite the grimness that comprises the bulk of the film, the Stoic Theme leading the intro and one of the loveliest endings in cinematic history ensure 'The Shawshank Redemption' stuns me every time.`,
        image: images['shawshank.png'],
      },
      {
        text: 'The Big Lebowski',
        description: `I actually struggle to articulate why I've always loved this movie so much, but I am a guy of a certain age so I suppose it's probably not all that surprising.`,
        image: images['lebowski.png'],
      },
      {
        text: 'Star Wars Episode V',
        description: `The quintessential Star Wars movie (great spaceship scenes, lightsaber fights, and sassy droids), 'The Empire Strikes Back' is my favorite of the franchise.`,
        image: images['empire_strikes_back.jpeg'],
      },
    ],
  },
  {
    name: 'Albums',
    blurb: 'eyo albums',
    items: [
      {
        text: 'Typhoon - White Lighter',
        description: `When I first heard 'Artificial Fathers' two years after it came out, it was jaw-dropping. Even more surprising was discovering later that day that it wasn't even the best song on the album. I don't think I've ever found another record quite like 'White Lighter,' but it hasn't been for lack of trying.`,
        image: images['white_lighter.png'],
      },
      {
        text: 'Tim: Let It Bleed Edition - The Replacements',
        description: `The original version of 'Tim' is incredible on its own, but the pop and crackle of Ed Stasium's remaster adds nuance and dynamism, making it clear why the 'Mats are among the greatest rockers America ever produced.`,
        image: images['let_it_bleed.png'],
      },
      {
        text: 'Unplugged in New York - Nirvana',
        description: `I could probably start off every day listening to this album, but to experience it fully, I'd strongly recommend finding any way to watch the concert in its entirety. Fourteen songs, six of which are covers, all showcase the depths of musicality Nirvana drew from, even if that's not always immediately apparent from tracks like 'Radio Friendly Unit Shifter.' In the latter half, the Kirkwood Brothers join to play three Meat Puppets songs before the last Nirvana original of the show, 'All Apologies.' The concert ends with a hair-raising, heartbreaking cover of 'Where Did You Sleep Last Night' that hits particularly hard after spending the last 50 minutes right in front of that stage.`,
        image: images['unplugged.png'],
      },
      {
        text: 'Double Nickels on the Dime - Minutemen',
        description: `1984 was a standout year for the American alternative scene: The Replacements' 'Let It Be,' Hüsker Dü's 'Zen Arcade,' Black Flag's 'My War,' and the Meat Puppets' eponymous second album, 'II,' just to name a few. Of the lot, though, I'll always keep coming back to 'Double Nickels on the Dime.`,
        image: images['nickels.jpg'],
      },
      {
        text: 'London Calling - The Clash',
        description: `Rudie can't fail`,
        image: images['london_calling.png'],
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
        description: `For this shady (ha) little Ghost/Poison type with a big Cheshire cat grin it was aand remains worth it to track down a buddy willing to go through a trade and back in order to upgrade a Haunter to a Gengar.`,
        image: images['gengar.png'],
      },
      {
        text: 'Arcanine',
        description: `A conundrum of the first game was my burning (ha) desire to have both a Charizard and an Arcanine on my team, despite the superfluousness of that decision. Nowadays I would force myself to choose between them for the sake of balance, and in a one-to-one match up I'd have to Arcanine, because I really like dogs and Charizard looks like a meaner Dragonite, which I'll always have.`,
        image: images['arcanine.png'],
      },
      {
        text: 'Ampharos',
        description:
          'One of the few non-first Generation pokemon I always try to get my hands on. I caught a Mareep on first sight when initially playing Silver version as a youth, if only for an appreciation of sheep, but my face really lit up (ha) when it eventually reached its final form.',
        image: images['ampharos.png'],
      },
      {
        text: 'Mewtwo',
        description: `Over-use of this 'Mon at the age of 7 led to a level 100 terror and I've remained fond of Mewtwo ever since.`,
        image: images['mewtwo.png'],
      },
    ],
  },
  {
    name: 'Spaceships',
    blurb: `As most fan of the genre would likely agree, it's hard not to indulge in Science Fiction (across mediums) and not pick up a few favorite ships.`,
    items: [
      {
        text: 'The Millenium Falcon',
        description: `The spacecraft personified: Modified Corellian Freighter, YT-1300. The connection between a Captain or Crew and their ship, has been explored time and again, but the Falcon always struck me as the third part of a three legged stool — every bit as fundamental part of the trio as Han and Chewbacca.`,
        image: images['falcon_gold.png'],
      },
      {
        text: 'The Enteprise D',
        description: `Scotty may have demanded to see the bridge of the "Entperprise, no bloody A, B, C, or D", but I would pick the NCC-1701-D every time.`,
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
    blurb: `As you might be able to guess from my Library page, I rather enjoy books and reading, so much so I had to find some constraint on this list. I generally gravitate more towards non-fiction, but the times I don't I'll opt for the truly fantastic. Here are some of my favorite books of Speculative Fiction, broadly.`,
    items: [
      {
        text: `Hitchhiker's Guide to the Galaxy`,
        description: `Description for Hitchhiker's guide`,
        image: images['fortytwo.jpg'],
      },
      {
        text: 'Hyperion',
        description: 'Description for Item 2',
        image: images['hyperion.png'],
      },
      {
        text: 'The Scar',
        description: `description for the scar`,
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
