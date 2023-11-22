import { describe,it,expect } from "vitest";
import { render, screen } from '@testing-library/react';
import HomePage from "./HomePage.jsx";

describe("HomePage", () => {
    it("should render", () => {
        expect(HomePage).toBeDefined();
    });
});
