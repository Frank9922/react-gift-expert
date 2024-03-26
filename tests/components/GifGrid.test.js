import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebas en el componenten <GifGrid />', () =>{

    const category = 'One Punch';

    test('Debbe de mostrar el loading inicialmente', () =>{

        useFetchGifs.mockReturnValue( {
            imagenes:[],
            isLoading: true
        })

        render(<GifGrid category={category} />);

        screen.debug();

        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))

    })

     test('Debe de mostrar items cuando se carguen las imagenes mediante ', () => {

        const  gifs = [
            {
                id:1,
                title:'Saitama',
                url: 'https:xd.com'
            },
            {
                id:2,
                title:'Dragon Ball',
                url: 'https:xdddasdasdasd.com'
            },
    ]

        useFetchGifs.mockReturnValue( {
            imagenes:gifs,
            isLoading: false
        })

        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2);

     })
})