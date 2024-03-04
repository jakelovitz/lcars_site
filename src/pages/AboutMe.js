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
                        <li key={index}>{item}</li>
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

                        <div class="lcars-text-bar the-end">
                            <span>Off Duty</span>
                        </div>

                        <p>When not chasing down abstract notions in abstract places...something something</p>
                        <blockquote>
                            More and more I've come to think…that to call plays or stories or poems “good” or “bad” is often not very illuminating, whereas it can at times be extremely helpful to notice that “right now, when I read this particular poems, I feel well, I feel happy, I feel that I am getting something that I have needed”. It's not that these poems are “the best” poems or that they're “better” than certain others, but that for you, now, they are important and right.
                        </blockquote>
                        <p className='go-right'>Wallace Shawn</p>
                        <p>
                            I love how this quote lays bare how personal the relationship between a piece of art and the person experiencing it is. It's not to say that almost any object of art doesn't belong to a specific school which has it's own criteria for what might constite a 'good' work of art in said school.
                            Which also called to mind another saying I once heard nad has lived rent free in my head ever since
                        </p>
                        <blockquote>
                            No person ever steps in the same river twice, for it's not the same river and they're not the same person.
                        </blockquote>
                        <p className='go-right'>Heraclitus</p>

                        <div class="buttons">
                            <a onClick={() => this.handleButtonClick('Movies')}>Movies</a>
                            <a onClick={() => this.handleButtonClick('Albums')}>Albums</a>
                            <a onClick={() => this.handleButtonClick('Something')}>button 03</a>
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