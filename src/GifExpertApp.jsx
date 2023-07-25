import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["one Punch"]); // no se puede mutar desde el estado sino desde la función del estado podemos cambiar el valor del estado

    const onAddCategory = (category) => {
        if (categories.includes(category)) return;

        setCategories([category, ...categories]);
    };

    console.log(categories);
    return (
        <>
            <div>
                {/* titulo */}
                <h1>GitExpertApp</h1>

                {/* input */}
                <AddCategory onAddCategory={onAddCategory} />

                {/* listado de gif  */}
                {/* <button onClick={onAddCategory}>Agregar</button> */}

                {categories.map((category) => (
                    <GifGrid key={category} category={category} /> //* los componentes cuando se envían al padre ejecutan lo que retornan y no todo el componente, por esta razon si tengo un proceso antes del return en esta componente no existe error con el map ya que lo que está recibiendo es solo lo que retorna
                ))}

                {/* Gif Item  */}
                <div></div>
            </div>
        </>
    );
};
