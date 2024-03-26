import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = ( ) => {

    const [categories, setCategories] = useState( ['One Punch'] );
    


    const onAddCategory = (NewCategory) => {
        
        if(categories.includes(NewCategory)) return

        setCategories([NewCategory, ...categories])
    }


    return (
        <>
            <h1>Gift Expert App</h1>

            <AddCategory 
                onNewCategory={(value) => onAddCategory(value)}
            />

                {
                    categories.map( ( category ) => (

                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))

                }

            </>

    )

}