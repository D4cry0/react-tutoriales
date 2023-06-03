import { useRef } from "react"



export const FocusScreen = () => {

    // Cuando la referencia cambia 
    // no manda a renderizar el componente
    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select();
    }


    return (
        <>
            <h1>Focus Screen</h1>
            <hr/>

            <input
                ref={ inputRef }
                type="text"
                placeholder="ingrese su nombre"
                className="form-control"
            />

            <button className="btn btn-primary mt-2" onClick={ onClick }>
                Set focus
            </button>
        </>
    )
}
