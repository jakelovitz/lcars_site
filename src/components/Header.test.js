import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import Pdf from './../assets/Lovitz-Resume.pdf';

describe('Header Component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  test('renders banner text', () => {
    const banner = screen.getByText('Jake Lovitz');
    expect(banner).toBeInTheDocument();
  });

  test('renders LinkedIn link with correct attributes', () => {
    const linkedInLink = screen.getByText('LinkedIn');
    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute(
      'href',
      'https://linkedin.com/in/jakelovitz/'
    );
    expect(linkedInLink).toHaveAttribute('target', '_blank');
    expect(linkedInLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('renders Medium link with correct attributes', () => {
    const mediumLink = screen.getByText('Medium');
    expect(mediumLink).toBeInTheDocument();
    expect(mediumLink).toHaveAttribute(
      'href',
      'https://medium.com/@jakelovitz'
    );
    expect(mediumLink).toHaveAttribute('target', '_blank');
    expect(mediumLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('renders GitHub link with correct attributes', () => {
    const gitHubLink = screen.getByText('GitHub');
    expect(gitHubLink).toBeInTheDocument();
    expect(gitHubLink).toHaveAttribute('href', 'https://github.com/jakelovitz');
    expect(gitHubLink).toHaveAttribute('target', '_blank');
    expect(gitHubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('renders Resume link with correct attributes', () => {
    const resumeLink = screen.getByText('Resume');
    expect(resumeLink).toBeInTheDocument();
    expect(resumeLink).toHaveAttribute('href', Pdf);
    expect(resumeLink).toHaveAttribute('target', '_blank');
    expect(resumeLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
