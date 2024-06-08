import React from 'react';
import './../assets/styling.css';
import favoriteThings from '../assets/favoriteThings';

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedButton: null
        };
    }

    handleButtonClick = (buttonName) => {
        this.setState({ selectedButton: buttonName });
    }

    componentDidMount() {
        this.setState({ selectedButton: null });
    }

    generateList = () => {
        const { selectedButton } = this.state;
        if (!selectedButton) return null;
    
        const thingData = favoriteThings.find(thing => thing.name === selectedButton);
        if (!thingData) return null;
    
        return (
            <div>
                <p>{thingData.blurb}</p>
                <ul className="lcars-list">
                    {thingData.items.map((item, index) => (
                        <React.Fragment key={index}>
                            <li>{item.text}</li>
                            <p>{item.description}</p>
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        );
    }

    render() {
        return (
            <div >
                <div >
                    <div className="content">
                        <div className="flexbox">

                            <div className="col">
                                <img style={{width: "90%", height: "90%", objectFit: 'contain'}} src={process.env.PUBLIC_URL + '/pipes_alone.png'} alt="your humble web developer" />
                            </div>

                            <div className="col">
                                <p className="go-big">
                                    <span className="go-space-white">
                                My continuing mission: to pioneer unparalleled quality in digital products; to design and develop test suites comprehensive in their scope, depth, and supporting documentation; to boldly ensure consistency and confidence like never before.</span>
                                </p>
                                <p>I'm my mind, I'm a Code Integrity Officer, though in my near ten years of ensuring software products best meet the needs of its end users I've held such titles as Software Tester, Software (Development) Engineer in Test, and Quality Assurance Engineer.</p>
                                <p>Irrespective of the name of the role, I help software teams in their pursuit of that most elusive of goals, quality, through the noble and maligned art of testing.</p>
                            </div>
                        </div>

                        <div className="lcars-text-bar the-end">
                            <span>Off Duty</span>
                        </div>

                        <p>When not chasing down abstract notions in abstract places I try to keep things a little more real. To me, this primarily entails reading books, learning new things (or rather, trying to), and doing my damndest to live the good life. If you want to learn a more about what I'm all about I've taken the liberty of cataloguing some of my favorite things. I even riff a little bit on the 'why' behind these selections.</p>

                        <div className="buttons">
                            <a onClick={() => this.handleButtonClick('Movies')}>Movies</a>
                            <a onClick={() => this.handleButtonClick('Albums')}>Albums</a>
                            <a onClick={() => this.handleButtonClick('Pokémon')}>Pokémon</a>
                            <a onClick={() => this.handleButtonClick('Spaceships')}>Spaceships</a>
                            <a onClick={() => this.handleButtonClick('Books')}>Books</a>
                        </div>
                        {this.generateList()}
                    </div>
                </div>
            </div> 
        )
    }
}

export default AboutMe;