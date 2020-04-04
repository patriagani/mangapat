import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import axios from 'axios'
import Card from '../components/Card'
import Featured from '../components/Featured'
import Welcome from '../components/Welcome'
import featuredMangas from '../featuredMangas'

export default function Search(props) {

    const [mangas, setMangas] = useState([])
    const [loading, setLoading] = useState(true)
    const values = queryString.parse(props.location.search)
    let search = new RegExp(`${values.keyword}`, 'gi')

    useEffect(() => {
        let mangalist = []

        setLoading(true)
        axios.get(`https://www.mangaeden.com/api/list/0/`)
            .then((response) => {
                mangalist = response.data.manga
                setMangas(mangalist.filter(manga => manga.t.match(search)))
                setLoading(false)

            })
            .catch((error) => {
                console.log(error.message)
            })
    }, [props.location.search])

    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    {loading ? <h3>Please Wait...</h3> :
                        <div>
                            {mangas.length === 0 ? 
                            <>
                                <br/><br/>
                                <div className="row" style={{display: "flex", justifyContent: "center"}}>
                                    <img src="mangapatsad.gif" alt="Not Found"/>
                                </div>
                                <br/>
                                <div className="row" style={{display: "flex", justifyContent: "center"}}>
                                    <h4>Result not found :( </h4>
                                </div>
                            </>
                            :
                            <div className="row" style={{display: "flex", justifyContent: "center"}}>
                            {mangas.map(manga => <Card key={manga.t} manga={manga}/>)}
                            </div>
                            } 
                        </div>
                    }
                </div>
                <div className="col-4">
                    <Welcome/>
                    <Featured mangas={featuredMangas}/>
                </div>
            </div>
        </div>
    )
}
