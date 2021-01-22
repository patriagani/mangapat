import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Detail(props) {

    const [manga, setManga] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const {mangaId} = props.match.params

    useEffect(() => {
        setLoading(true)
        axios.get(`https://www.mangaeden.com/api/manga/${mangaId}`)
            .then((response) => {
                setManga(response.data)
                setLoading(false)
            })
            .catch((error) => {
                setError(true)
                console.log(error.message)
            })
    }, [mangaId])

    return (
        <div className="container" style={{paddingTop: 80}}>
            {error && <h4 class="text-center p-3 mb-2 bg-danger text-white">We apologize because currently Mangeden API has been deactivated, so that until now we have not been able to make this website function as usual</h4>}
            <br/>
            {loading ? <p style={{paddingBottom: 500}}>We will look for replacement Mangaeden API and try to fix it :)</p> : 
            <>
            <div className="row">
                <div className="col-sm text-center">
                    <img src={`https://cdn.mangaeden.com/mangasimg/${manga.image}`} onError={(e)=>{e.target.onerror = null; e.target.src="https://cdn.mangaeden.com/images/no_image.svg"}} alt=""/>
                    <br/><br/>
                    <h3>{manga.title}</h3>
                </div>
                <div className="col-sm">
                    <h3>Author</h3>
                    <p>{manga.author}</p>
                    <br/>
                    <h3>Description</h3>
                    <p>{manga.description}</p>
                    <br/>
                    <h3></h3>
                </div>
            </div>
            <br/><br/>
            <div className="row">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Chapter</th>
                            <th scope="col">Title</th>
                            <th scope="col">Date Added</th>
                            <th scope="col">Read</th>
                        </tr>
                    </thead>
                    <tbody>
                        {manga.chapters.map(chapter => 
                        <tr key={chapter[0]}>
                            <th scope="row">{chapter[0]}</th>
                            <td>{chapter[2]}</td>
                            <td>{new Date(chapter[1] * 1000).toString()}</td>
                            <td><Link to={`/detail/${mangaId}/chapter/${chapter[3]}/1`} className="#" class="btn btn-primary" style={{color: "white"}}>Read Chapter</Link></td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
            </>
            }
        </div>
    )
}
