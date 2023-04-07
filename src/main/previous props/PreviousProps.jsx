import { useEffect, useRef, useState } from "react";

export default function PreviousPropsState() {
    const [term, setTerm] = useState('javascript')
    const previousTermState = useRef();

    useEffect(() => {
        previousTermState.current = term;
    }, [term])

    const prevTerm = previousTermState.current;

    return (
        <div className='container'>
            <h1>Previous Props State</h1>
            <div className='row'>
                <div className='col'>
                    <div className='my-3'>
                        <label htmlFor='exampleFormControlInput1' className='form-label'>
                            Search Input
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            id='exampleFormControlInput1'
                            onChange={(e) => setTerm(e.target.value)}
                            value={term}
                        />
                    </div>
                    <p>Current term: "{term}"</p>
                    <p>prev term: "{prevTerm}"</p>
                </div>
            </div>
        </div>
    )
}
