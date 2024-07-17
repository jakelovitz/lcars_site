import React from 'react';
import './../assets/styling.css';
import favoriteThings from '../assets/favoriteThings';

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedButton: null,
    };
  }

  handleButtonClick = buttonName => {
    this.setState({ selectedButton: buttonName });
  };

  componentDidMount() {
    this.setState({ selectedButton: null });
  }

  generateList = () => {
    const { selectedButton } = this.state;
    if (!selectedButton) return null;

    const thingData = favoriteThings.find(
      thing => thing.name === selectedButton
    );
    if (!thingData) return null;

    const leftColumnItems = [];
    const rightColumnItems = [];
    thingData.items.forEach((item, index) => {
      const columnItem = (
        <div key={index} className="item" style={{ marginBottom: '20px' }}>
          <h3>{item.text}</h3>
          <img
            src={item.image}
            alt={item.text}
            style={{
              objectFit: 'contain',
            }}
          />
          <p>{item.description}</p>
        </div>
      );
      if (index % 2 === 0) {
        leftColumnItems.push(columnItem);
      } else {
        rightColumnItems.push(columnItem);
      }
    });

    return (
      <div>
        <p>{thingData.blurb}</p>
        <div className="flexbox">
          <div className="col">{leftColumnItems}</div>
          <div className="col">{rightColumnItems}</div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <div>
          <div className="content">
            <div className="flexbox">
              <div className="col">
                <img
                  style={{ width: '90%', height: '90%', objectFit: 'contain' }}
                  src={process.env.PUBLIC_URL + '/pipes_alone.png'}
                  alt="your humble web developer"
                />
              </div>

              <div className="col">
                <p className="go-big">
                  <span className="go-space-white">
                    My continuing mission: to pioneer unparalleled quality in
                    digital products; to design and develop test suites
                    comprehensive in their scope, depth, and supporting
                    documentation; to boldly ensure consistency and confidence
                    like never before.
                  </span>
                </p>
                <p>
                  I'm my mind, I'm a Code Integrity Officer, though in my near
                  ten years of ensuring software products best meet the needs of
                  its end users I've held such titles as Software Tester,
                  Software (Development) Engineer in Test, and Quality Assurance
                  Engineer.
                </p>
                <p>
                  Irrespective of the name of the role, I help software teams in
                  their pursuit of that most elusive of goals, quality, through
                  the noble and maligned art of testing.
                </p>
              </div>
            </div>

            <div className="lcars-text-bar the-end">
              <span>Off Duty</span>
            </div>

            <p>
              When not chasing down abstract notions in abstract places I try to
              keep things a little more real. To me, this primarily entails
              reading books, learning new things (or rather, trying to), and
              doing my damndest to live the good life. If you want to learn a
              more about what I'm all about I've taken the liberty of
              cataloguing some of things I've spent an above-average amount of
              time reflecting on.
            </p>

            <div className="buttons">
              <a onClick={() => this.handleButtonClick('Cookies')}>Cookies</a>
              <a onClick={() => this.handleButtonClick('Albums')}>
                Alt Rock Albums
              </a>
              <a onClick={() => this.handleButtonClick('Pokémon')}>Pokémon</a>
              <a onClick={() => this.handleButtonClick('Spaceships')}>
                Spaceships
              </a>
              <a onClick={() => this.handleButtonClick('Episodes')}>
                Star Trek Episodes
              </a>
            </div>
            {this.generateList()}
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
