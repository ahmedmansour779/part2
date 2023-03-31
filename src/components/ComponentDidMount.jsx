import React, { useEffect, useState } from 'react'

export default function ComponentDidMount() {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    //1
    // rules for all useEffect statues:
    //render
    //useEffect
    //useEffect with empty dependency array
    //run one time only
    //when: after first render
    // }, []);

    // ------------------------------------- //
    //2
    //useEffect with not empty dependency array
    //run when update happen
    //when: after first render, and when dependency updated
    //render
    //useEffect
    //update the state -> re-render (sec render)
    //UseEffect -> watcher -> dependency -> name ? updated -> yes -> do the effect / no -> skip the effect
    // useEffect(() => {
    //ADD UR CODE
    //   if (name || phone) {
    //     console.log("update");
    //   }
    // }, [name, phone]); //useeffect dependency array
    //watcher -> state / props / var
    //use effect -> return clean / init clean

    // ------------------------------------- //
    //3
    //useEffect with no dependency array
    //run when update happen
    //when: run after first render, and after re-render
    // useEffect(() => {
    //   console.log("effect");
    // });

    //render
    //change->state
    //re render
    //use Effect

    useEffect(() => {
        console.log("useEffect with empty dependency array")
    }, [])

    //useEffect with one value dependency
    //run after change in this value
    // }, [name]);

    useEffect(() => {
        if (name || phone) {
            console.log("useEffect with one value dependency,value name or phone is not fulse")
        }
    }, [name, phone]);

    console.log("test")
    return (
        <div>
            <div className="App">
                <label>Name </label>
                <input onChange={(e) => setName(e.target.value)} value={name} />
                <br />
                <label>phone {console.log("test 2")} </label>
                <input onChange={(e) => setPhone(e.target.value)} value={phone} />
                <p>
                    name: {name} <br /> phone: {phone}
                </p>
            </div>
        </div>
    )
}
