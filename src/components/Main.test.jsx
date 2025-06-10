import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Main from "./Main";

describe("Main", () => {
	test("displays the top and bottom text lines and placeholders, and the button with text", () => {
		render(<Main />);

		expect(screen.getByText("Top Text")).toBeInTheDocument();
		expect(screen.getByText("Bottom Text")).toBeInTheDocument();
		expect(screen.getByPlaceholderText("One does not simply")).toBeInTheDocument();
		expect(screen.getByPlaceholderText("Walk into Mordor")).toBeInTheDocument();
		expect(screen.getByRole("button").textContent).toBe("Get a new meme image 🖼");
	});
});
