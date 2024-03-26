import { render, renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Test al hook useFetchGifs ', () => {


    test('Debe regresar el estado inicial', () => {

        const { result } = renderHook(() =>  useFetchGifs('One Punch') );

        const { imagenes, isLoading } = result.current

        expect(imagenes.length).toBe(0);
        expect(isLoading).toBeTruthy();
    })

    test('Debe de retornar un arreglo de imagenes y el isloading en false', async() => {
        

        const { result } = renderHook(() =>  useFetchGifs('One Punch') );

        await waitFor(
            () => expect( result.current.imagenes.length).toBeGreaterThan(0), {
                timeout: 2000
            }
        )

        const { imagenes, isLoading } = result.current

        expect(imagenes.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    })
})