module.exports = {
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', '<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(pdf)$': '<rootDir>/__mocks__/pdfMock.js',
  },
};
