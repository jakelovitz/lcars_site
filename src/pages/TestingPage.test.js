import React from 'react';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestingPage from './TestingPage';

describe('TestingPage', () => {
  const testCases = [
    { a: 3, b: 4, c: 5, expected: 'Scalene' },
    { a: 5, b: 5, c: 5, expected: 'Equilateral' },
    { a: 3, b: 3, c: 4, expected: 'Isosceles' },
    { a: 3, b: 4, c: 3, expected: 'Isosceles' },
    { a: 4, b: 3, c: 3, expected: 'Isosceles' },
    { a: 0, b: 4, c: 5, expected: 'Invalid: Triangle sides must be positive integers.' },
    { a: -3, b: 4, c: 5, expected: 'Invalid: Triangle sides must be positive integers.' },
    { a: 1, b: 2, c: 3, expected: 'Invalid: The provided lengths do not form a triangle.' },
    { a: 1, b: 3, c: 2, expected: 'Invalid: The provided lengths do not form a triangle.' },
    { a: 3, b: 1, c: 2, expected: 'Invalid: The provided lengths do not form a triangle.' },
    { a: 1, b: 2, c: 4, expected: 'Invalid: The provided lengths do not form a triangle.' },
    { a: 1, b: 4, c: 2, expected: 'Invalid: The provided lengths do not form a triangle.' },
    { a: 4, b: 1, c: 2, expected: 'Invalid: The provided lengths do not form a triangle.' },
    { a: 0, b: 0, c: 0, expected: 'Invalid: Triangle sides must be positive integers.' },
    { a: 'a', b: 2, c: 3, expected: 'Invalid: Triangle sides must be positive integers.' },
    { a: 2, b: 3, expected: 'Invalid: The provided lengths do not form a triangle.' },
  ];

  testCases.forEach(({ a, b, c, expected }) => {
    test(`Input: (${a}, ${b}, ${c}) => Output: ${expected}`, async () => {
      render(<TestingPage />);

      const inputA = screen.getByLabelText(/side a/i);
      const inputB = screen.getByLabelText(/side b/i);
      const inputC = screen.getByLabelText(/side c/i);
      const checkButton = screen.getByText(/check triangle type/i);

      if (a !== undefined) fireEvent.change(inputA, { target: { value: a } });
      if (b !== undefined) fireEvent.change(inputB, { target: { value: b } });
      if (c !== undefined) fireEvent.change(inputC, { target: { value: c } });

      fireEvent.click(checkButton);

      // Check for the main text
      const mainText = await screen.findByText(/The triangle is:/i);

      // Check for the expected result within the same container
      const resultText = new RegExp(expected, 'i');
      const resultElement = await within(mainText.closest('div')).findByText(resultText);

      expect(resultElement).toBeInTheDocument();
    });
  });
});
