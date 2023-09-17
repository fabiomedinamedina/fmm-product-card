module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  // setupFiles: ['./jest.setup.js']
  transformIgnorePatterns: [],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/fileTransformer.cjs',
  },
  moduleNameMapper: {
    // "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "identity-obj-proxy",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    }
  
}