import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en el componente <GiftItem />', () => {

    const title = "Test FLeiva"
    const url = 'https://media3.giphy.com/media/GRSnxyhJnPsaQy9YLn/giphy.gif?cid=fd687d8auic34croy17n9dqk9o4uzmb8k6ntrvmh9v0w57h0&ep=v1_gifs_search&rid=giphy.gif&ct=g'


    test('Debe hacer match con el snapshot', () => {

        const { container } = render(<GifItem title={title} url={url} />);

        expect(container).toMatchSnapshot();

    })

    test('Debe mostrar el URL y el ALT indicado', () => {

        const { container } = render(<GifItem title={title} url={url} />);

        // screen.debug();

        // expect(screen.getByRole('img').src).toBe(url);

        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('Debe de mostrar el titulo en el componente', () => {

        const { container } = render(<GifItem title={title} url={url} />);


        expect(screen.getByText(title)).toBeTruthy();
    })
})