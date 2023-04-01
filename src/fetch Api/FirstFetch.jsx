import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function FirstFetch() {

    const [term, setTerm] = useState("")
    const [result, setresult] = useState([])

    useEffect(() => {
        const search = async () => {
            const respond = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                }
            })
            setresult(respond.data.query.search)
        }
        if (term) {
            search()
        }
    }, [term])

    const fetchResult = result.map((e) => {
        return (
            <tr key={e.pageid}>
                <th scope='row'>{e.index}</th>
                <td>{e.title}</td>
                <td>{e.snippet}</td>
            </tr>
        )
    })

    return (
        <div className='container'>
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
