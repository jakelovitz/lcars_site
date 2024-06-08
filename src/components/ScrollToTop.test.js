import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ScrollToTopButton from './ScrollToTop';

describe('ScrollToTopButton Component', () => {
    beforeEach(() => {
        render(<ScrollToTopButton />);
    });

    test('does not render button initially', () => {
        const button = screen.queryByText('Scroll to Top');
        expect(button).not.toBeInTheDocument();
    });

    test('renders button after scrolling down', () => {
        // Simulate scrolling down
        fireEvent.scroll(window, { target: { scrollY: 101 } });
        const button = screen.getByText('Scroll to Top');
        expect(button).toBeInTheDocument();
    });

    test('hides button when scrolled back to top', () => {
        // Simulate scrolling down
        fireEvent.scroll(window, { target: { scrollY: 101 } });
        let button = screen.getByText('Scroll to Top');
        expect(button).toBeInTheDocument();

        // Simulate scrolling back to top
        fireEvent.scroll(window, { target: { scrollY: 0 } });
        button = screen.queryByText('Scroll to Top');
        expect(button).not.toBeInTheDocument();
    });

    test('scrolls to top when button is clicked', () => {
        // Mock scrollTo function
        window.scrollTo = jest.fn();

        // Simulate scrolling down
        fireEvent.scroll(window, { target: { scrollY: 101 } });
        const button = screen.getByText('Scroll to Top');
        expect(button).toBeInTheDocument();

        // Click the button
        fireEvent.click(button);
        expect(window.scrollTo).toHaveBeenCalledWith({
            top: 0,
            behavior: 'smooth',
        });
    });
});
