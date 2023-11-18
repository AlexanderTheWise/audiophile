import nextJest from "next/jest";
import type { Config } from "jest";

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig: Config = {
  coverageProvider: "v8",
  collectCoverageFrom: ["components/**/*.{ts, tsx}", "app/**/*.{ts, tsx}"],
  coverageReporters: ["lcov"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
};

export default createJestConfig(customJestConfig);
