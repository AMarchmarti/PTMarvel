import { fireEvent, render } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import { vi } from "vitest";

import ErrorPage from "./ErrorPage";

import type { Mock } from "vitest";

vi.mock("react-router-dom", () => ({
    useNavigate: vi.fn(),
}));

describe("ErrorPage", () => {
    beforeEach(() => {
        (useNavigate as Mock).mockClear();
    });

    it("should call navigate with 0 when the Refresh button is clicked", () => {
        const navigateMock = vi.fn();
        (useNavigate as Mock).mockReturnValue(navigateMock);

        const { getByLabelText } = render(<ErrorPage />);

        fireEvent.click(getByLabelText("Refresh page"));

        expect(navigateMock).toHaveBeenCalledWith(0);
    });

    it("should call navigate with '/' when the Go Home button is clicked", () => {
        const navigateMock = vi.fn();
        (useNavigate as Mock).mockReturnValue(navigateMock);

        const { getByLabelText } = render(<ErrorPage />);

        fireEvent.click(getByLabelText("Go Home"));

        expect(navigateMock).toHaveBeenCalledWith("/");
    });
});