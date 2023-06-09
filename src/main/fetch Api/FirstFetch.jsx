import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function FirstFetch() {

    const [term, setTerm] = useState("")
    const [result, setresult] = useState([])
    const [debounceSearch, setdebounceSearch] = useState(term)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setdebounceSearch(term)
        }, 1200);
        return () => clearTimeout(timeOut)
    }, [term])

    useEffect(() => {
        const search = async () => {
            const respond = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debounceSearch,
                }
            })
            setresult(respond.data.query.search)
        };

        search()
    }, [debounceSearch])

    // useEffect(() => {

    //     if (result.length) {
    //         if (term) {
    //             search()
    //         }
    //     } else {
    //         const debounceSearch = setTimeout(() => {
    //             if (term) {
    //                 search()
    //             }
    //         }, 1000)
    //         return () => {
    //             clearTimeout(debounceSearch)
    //         }
    //     }
    // }, [term, result.length])

    const fetchResult = result.map((e) => {
        return (
            <tr key={e.pageid}>
                <th scope='row'>{e.index}</th>
                <td>{e.title}</td>
                <td><span dangerouslySetInnerHTML={{ "__html": e.snippet }} /></td>
            </tr>
        )
    })

    return (
        <div className='container'>
            <h1>First fetch</h1>
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
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Title</th>
                                <th scope='col'>Desc</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fetchResult}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
