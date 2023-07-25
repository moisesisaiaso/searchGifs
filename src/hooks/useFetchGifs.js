import { getGifs } from "../helpers/getGifs";
import { useState, useEffect } from "react";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //* el useEffect se ejecuta al menos una vez, cuando se renderiza por primera vez el componente

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    };

    useEffect(() => {
        getImages();
    }, []);
    //  [variable-de-control] si la variable cambia su valor ejecuta el proceso del useEffect, [] un array vacio establece que solo se ejecutará el proceso la primera vez que se renderice el componente y no habrá valor que vuelva a ejecutar el efecto

    return {
        images,
        isLoading,
    };
};
