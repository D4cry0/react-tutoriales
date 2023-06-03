import { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"


export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    const { author, quote } = !!data && data[0];

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0});

    useLayoutEffect(() => {
        
        // es mas recomendable el useEffect
        // Este es mas comun usarlo para cosas del DOM mutarlo o medir
        // pues se ejecuta ya que termina de mutarlo y renderizarlo

        if(!isLoading){

            const { height, width } = pRef.current.getBoundingClientRect();
            
            setBoxSize({ height, width });
        }

        return () => {
            
        };
    }, [quote])

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            { 
                isLoading && <div className="alert alert-info text-center">
                    Loading...
                </div>
            }

            {
                !isLoading && <blockquote 
                    className="blockquote text-end"
                    style={{ display: 'flex' }}
                >
                    <p ref={ pRef } className="mb-1">{ quote }</p>
                    <footer className="blockquote-footer">{ author }</footer>
                </blockquote>
            }

            {
                !isLoading && <code>{ JSON.stringify(boxSize) }</code>
            }
            
            <button className="btn btn-primary" onClick={ () => increment() } disabled={ isLoading }>
                Next quote
            </button>

        </>
    )
}
