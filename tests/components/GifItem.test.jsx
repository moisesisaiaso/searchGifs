import { GifItem } from "../../src/components/GifItem";

import { render } from "@testing-library/react";

describe("pruebas en <GifItem />", () => {
    const title = "Batman";
    const url = "https://batmanGifPrueba.gif";

    test("hacer match en el snapshot", () => {
        const { container } = render(<GifItem />);

        expect(container).toMatchSnapshot();
    });
});
