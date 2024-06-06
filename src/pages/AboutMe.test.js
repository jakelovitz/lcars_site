import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AboutMe from './AboutMe';
import favoriteThings from '../assets/favoriteThings';

describe('AboutMe Component', () => {
    beforeEach(() => {
        render(<AboutMe />);
    });

    test('renders initial content correctly', () => {
        // Check initial content before the buttons
        expect(screen.getByText('My continuing mission: to pioneer unparalleled quality in digital products; to design and develop test suites comprehensive in their scope, depth, and supporting documentation; to boldly ensure consistency and confidence like never before.')).toBeInTheDocument();
        expect(screen.getByText("I'm my mind, I'm a Code Integrity Officer, though in my near ten years of ensuring software products best meet the needs of its end users I've held such titles as Software Tester, Software (Development) Engineer in Test, and Quality Assurance Engineer.")).toBeInTheDocument();
        expect(screen.getByText('Irrespective of the name of the role, I help software teams in their pursuit of that most elusive of goals, quality, through the noble and maligned art of testing.')).toBeInTheDocument();
        expect(screen.getByText('Off Duty')).toBeInTheDocument();
        expect(screen.getByText("When not chasing down abstract notions in abstract places I try to keep things a little more real. To me, this primarily entails reading books, learning new things (or rather, trying to), and doing my damndest to live the good life. If you want to learn a more about what I'm all about I've taken the liberty of cataloguing some of my favorite things. I even riff a little bit on the 'why' behind these selections.")).toBeInTheDocument();
    });

    test('renders buttons correctly', () => {
        favoriteThings.forEach(thing => {
            expect(screen.getByText(thing.name)).toBeInTheDocument();
        });
    });

    favoriteThings.forEach(thing => {
        test(`clicking ${thing.name} button updates state and displays list`, () => {
            const button = screen.getByText(thing.name);
            fireEvent.click(button);

            // Query the generated list container for specific elements
            const listContainer = screen.getByRole('list', { hidden: true }).parentElement;

            expect(listContainer).toHaveTextContent(thing.blurb);
            thing.items.forEach(item => {
                expect(listContainer).toHaveTextContent(item.text);
                expect(listContainer).toHaveTextContent(item.description);
            });
        });
    });
});
