import images from '../utils/importImages';

const favoriteThings = [
  {
    name: 'Cookies',
    blurb: `Nothing quite like a good cookie, right? Small little bundles of joy, when made right. Which mine occassionally are.`,
    items: [
      {
        text: `Pumpkin with Cream Cheese Frosting`,
        description: `I'll concede to an abiding love for Autumn and most of the things it brings, including, yes, Pumpkins. These cookies, so soft as to be foldable, deliver the seasonal essence of the gourd with a contrasting nip from the Cream Cheese. A decade and a half serving these bad boys and I've never seen them fail to please a crowd.`,
        image: images[`pumpkin_two.jpg`],
      },
      {
        text: 'Black and White',
        description: `I had always loved the Black and White, and not simply for it's elegance and Seinfeld cameo. Everyone has an opinion on which side tastes better, and I'm here to tell you that regardless of where you find yourself on that divide—you're right.`,
        image: images[`blackwhite.jpg`],
      },
      {
        text: `Anginetti`,
        description: `I had a classmate in Elementary school who would bring these in around the holidays, and I spent the ensuing years trying to find them in any bakery I entered. After a two or so decades of emulating Ahab I realized I could copy my classmate's parent and make them myself. My understanding after a full quarters hour research into the subject is that Angettie is traditionally lemon flavored, but when that's swapped in with Anise it becomes an Italian Christmas Cookie. I never developed a taste for anise, however, so tend to substitute it with almond extract instead.`,
        image: images[`anginetti_two.jpg`],
      },
      {
        text: `Chocolate Chip`,
        description: `Perhaps the quintessential cookie, I admit with some embarrassment I actually never much cared for them until I started making them for my fiance. It was then I realized that, as with many things, the triple-C is a deeply personal thing. Some people prefer them chewey, some crispy, some mega-chipped, and some oddballs like me harbor a secret weakness for chipless ones. I think that's because ultimately, the secret of a great chocolate chip cookie is a bit of cider vinegar to give a bit of lift to the leavening and really bring out the flavor of the brown sugar.`,
        image: images[`chips_two.jpg`],
      },
      {
        text: `Glazed Sugar`,
        description: `No one had to bring me home to the Sugar Cookie—I've always enjoyed eating them. Quality in these cookies, however, require a deft hand with decorating. If you have any good tips please send them my way.`,
        image: images[`sugar.png`],
      },
    ],
  },
  {
    name: `Albums`,
    blurb: `In recent years I've developed a deep fondness for reading about Rock history and Rock music in general, which has deepened my appreciation for the genre. These are some oft-played records from this Disciple of the Electric Church.`,
    items: [
      {
        text: `Typhoon - White Lighter`,
        description: `When I first heard 'Artificial Fathers' two years after it came out, it was jaw-dropping. Even more surprising was discovering later that day that it wasn't even the best song on the album. I don't think I've ever found another record quite like 'White Lighter,' but it hasn't been for lack of trying.`,
        image: images[`white_lighter.png`],
      },
      {
        text: `Tim: Let It Bleed Edition - The Replacements`,
        description: `The original version of 'Tim' is incredible on its own, but the pop and crackle of Ed Stasium's remaster adds nuance and dynamism to each song, making it clear why the 'Mats are among the greatest rockers America ever produced.`,
        image: images[`let_it_bleed.png`],
      },
      {
        text: `Unplugged in New York - Nirvana`,
        description: `I could probably start off every day listening to this album, but to experience it fully, I'd strongly recommend finding any way to watch the concert in its entirety. Fourteen songs, six of which are covers, all showcase the depths of musicality Nirvana drew from, even if that's not always immediately apparent from tracks like 'Radio Friendly Unit Shifter.' In the latter half, the Kirkwood Brothers join to play three Meat Puppets songs before the last Nirvana original of the show, 'All Apologies.' The concert ends with a hair-raising, heartbreaking cover of 'Where Did You Sleep Last Night' that hits particularly hard after spending the last 50 minutes right there with the audience.`,
        image: images[`unplugged.png`],
      },
      {
        text: `Double Nickels on the Dime - Minutemen`,
        description: `1984 was a standout year for the American alternative scene: The Replacements' 'Let It Be,' Hüsker Dü's 'Zen Arcade,' Black Flag's 'My War,' and the Meat Puppets' eponymous second album, 'II,' just to name a few. Of the lot, though, I'll always keep coming back to 'Double Nickels on the Dime. If you're only going to listen to one song on this album, please make it History Lesson, Part II.`,
        image: images[`nickels.jpg`],
      },
      {
        text: `Pod - Breeders`,
        description: `Kim Deal's vocals on Oh! and the Beatles covers are highlights of an album that's amazing in its entirety. Perhaps not my favorite Albini recording, but it's up there.`,
        image: images[`pod.png`],
      },
    ],
  },
  {
    name: `Pokémon`,
    blurb: `Like many a youth of my generation, when I turned 7 I was gifted with the holy grail of handheld entertainment technology for a society on the cusp of a new millenium: a Gameboy Color. Disappointingly, my parents accompanied this with Super Mario Bros, but luckily another well-wishing relative rectified that with the only other cartridge that Gameboy would ever know: Pokémon Red. A deep and abiding love of Pokémon has remained with me ever since. These are some of the 'mon that I've always been particularly fond of.`,
    items: [
      {
        text: `Dragonite`,
        description: `Sure, it looks kind of dopey, but Dragons are the best and this is the coolest one in the club. It was also the only one in the club, for awhile there, and you didn't need to trade it's pre-evolutionary form to get, which you can't say for two of the later entries on this list.`,
        image: images[`dragonite.png`],
      },
      {
        text: `Gengar`,
        description: `For this shady (ha) little Ghost/Poison type with a big Cheshire cat grin it was aand remains worth it to track down a buddy willing to go through a trade and back in order to upgrade a Haunter to a Gengar.`,
        image: images['gengar_two.png'],
      },
      {
        text: `Arcanine`,
        description: `A conundrum of the first game was my burning (ha) desire to have both a Charizard and an Arcanine on my team, despite the superfluousness of that decision. Nowadays I would force myself to choose between them for the sake of balance, and in a one-to-one match up I'd have to Arcanine, because I really like dogs and Charizard looks like a meaner Dragonite, which I'll admittedly always have.`,
        image: images[`arcanine.png`],
      },
      {
        text: `Ampharos`,
        description: `One of the few non-first Generation pokemon I always try to get my hands on. I caught a Mareep on first sight when initially playing Silver version as a youth, if only for an appreciation of sheep, but my face really lit up (ha) when it eventually reached its final form.`,
        image: images[`ampharos.png`],
      },
      {
        text: `Mewtwo`,
        description: `Over-use of this 'Mon at the age of 7 led to a level 100 terror and I've remained fond of Mewtwo ever since.`,
        image: images[`mewtwo.png`],
      },
    ],
  },
  {
    name: `Spaceships`,
    blurb: `As most fan of the genre would likely agree, it's hard not to indulge in Science Fiction (across mediums) and not pick up a few favorite ships.`,
    items: [
      {
        text: `The Millenium Falcon`,
        description: `The spacecraft personified: Modified Corellian Freighter, YT-1300. The connection between a Captain or Crew and their ship, has been explored time and again, but the Falcon always struck me as the third part of a three legged stool — every bit as fundamental part of the trio as Han and Chewbacca.`,
        image: images[`falcon_gold.png`],
      },
      {
        text: `The Enteprise-D`,
        description: `Whilst Scotty once demanded to see the bridge of the "Enterprise, no bloody A, B, C, or D", but I would pick the NCC-1701-D every time. `,
        image: images[`underside_d.png`],
      },
      {
        text: `The Yggdrasil`,
        description: `Its a tree flying through space, protected by a field projected by a semi-sentient alien. The concept is nothing short of fantastic, and the views doubtless even better.`,
        image: images[`treeship.png`],
      },
      {
        text: 'The Heart of Gold',
        description: `I meant everything I said about the Falcon, but concede that the Infinite Probability Drive's ability to get you from A to B without all that "tedious mucking about in hyperspace" is very appealing.`,
        image: images[`heart_of_gold_doodle.jpg`],
      },
    ],
  },
  {
    name: `Episodes`,
    blurb: `In case you hadn't already ascertained this, I'm something of a fan of the Star Trek franchise, and have spent a not-incosiderable amount of time watching the various series. Given the amount of time I gave myself to work on this list, these are the ones I identified as my standouts.`,
    items: [
      {
        text: `Bar Association // DS9, s4e16`,
        description: `Rom starts a Union and kindles a lifelong romance. We also learn a bit about Miles O'Brien's ancestry`,
        image: images[`bar_association.jpeg`],
      },
      {
        text: `Lower Decks // TNG, s7e15`,
        description: `We spend some time with Enterprise Ensigns, redeem Sito Jaxa, and find out Worf is a surprisingly good boss`,
        image: images[`lower_decks_three.png`],
      },
      {
        text: `The Offspring // TNG, s3e16`,
        description: `The Enterprise is searching for new life and finds it here. One of the all time great episodes for Picard and Data.`,
        image: images[`offspring.png`],
      },
      {
        text: `Prophet Motive // DS9, s3e16`,
        description: `Here we have Wallace Shawn as Grand Negus Zek, self sealing stem bolts, and Star Trek making fun of Star Trek`,
        image: images[`prophet_motive_two.png`],
      },
      {
        text: `Nemesis // VOY, s4e4`,
        description: `The plot is largely forgettable, but the aliens of the week speak in such an engaging manner it remains one of Voyager's standouts`,
        image: images[`nemesis_two.jpg`],
      },
      {
        text: `Thirty Days // VOY, s5e9`,
        description: `Tom Paris expresses a never before love of the sea as motivation for saving an (admittedly cool) ocean world, and we finally meet the Delancy sisters.`,
        image: images[`thirty_days_three.jpg`],
      },
      {
        text: `Balance of Terror // TOS, s1e15`,
        description: `Star Trek as a Submarine movie. The vibes of this episode are behind compare, leading to it being reimagined to great effect 50+ years after its air date.`,
        image: images[`balance_of_terror.png`],
      },
      {
        text: 'In a Mirror, Darkly // ENT, s4e18/19',
        description: `We dispatch with all the plot dressing around crossing over to the Mirror Universe and instead just spend a couple of episodes spending some time there`,
        image: images[`mirror.png`],
      },
    ],
  },
];

export default favoriteThings;
