import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setInputValue] = useState(""); //* las funciones de estados contienen un callback que se puede resumir de manera implicita cuando su proceso es simple pero en sí el collback de esta función se argumenta con el estado es decir tiene como propiedad el estado

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault(); // esto evita el refresh del navegador cuando se envia el formulario
        if (inputValue.trim().length <= 1) return;

        onAddCategory(inputValue.trim());
        setInputValue("");
    };
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={
                    inputValue
                } /* esto me asigna un valor estatico al campo que no podrá cambiar al querer ingresar un nuevo valor */
                onChange={
                    onInputChange
                } /* con el onChange le estamos diciendo al atributo value que va a ser dinamico, de esta forma atraves de la propiedad target.value le damos un valor nuevo que se actualiza cada vez que se renderiza el componente y como el estado se actualiza en cada teclada pues cada caracter se mostrará de manera dinamica  ya que cada vez que el estado se actualiza se renderiza el componente*/
            />
        </form>
    );
};
