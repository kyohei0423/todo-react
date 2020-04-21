module.exports = {
  roots: ["<rootDir>/__tests__"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  collectCoverage: true,
  collectCoverageFrom: ["./src/**/*.{ts, tsx}"]
};
