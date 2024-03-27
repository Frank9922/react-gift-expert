import { useState } from "react"
import { AddCategory, GifGrid , NotCategories} from "./components";


export const GiftExpertApp = ( ) => {

    const [categories, setCategories] = useState( ['One Punch'] );
    const mostrarGifGrid = categories && categories.length !== 0;


    const onAddCategory = (NewCategory) => {
        
        if(categories.includes(NewCategory)) return

        setCategories([NewCategory, ...categories])
    }

    const onRemoveCategory = (Category) => {

        setCategories(categories.filter((c) => c !== Category))
        console.log(categories)
    }


    return (
        <>
            <h1>Gift Expert App</h1>

            <AddCategory 
                onNewCategory={(value) => onAddCategory(value)}
            />

                    {   
                        mostrarGifGrid ? (
                        
                        <div>
                            {categories.map( ( category ) => (

                                <GifGrid
                                    key={category}
                                    category={category}
                                    RemoveCategory={(value) => onRemoveCategory(value)}
                                />
                            ))}
                        </div>
                    ) :
                        <NotCategories />
                    }
            </>

    )

}