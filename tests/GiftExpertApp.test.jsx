import { render, screen } from "@testing-library/react"
import { GiftExpertApp } from "../src/GiftExpertApp"

describe('Pruebas en el componente <GiftExpertApp />', () => {


    test('Match componente vacio', () => {

        const { container } = render(<GiftExpertApp />);

        screen.debug();
        expect(container).toMatchSnapshot();
    })
})