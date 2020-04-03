import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Detail(props) {

    const [manga, setManga] = useState({})
    const [loading, setLoading] = useState(true)
    const {mangaId} = props.match.params

    useEffect(() => {
        setLoading(true)
        axios.get(`https://www.mangaeden.com/api/manga/${mangaId}`)
            .then((response) => {
                setManga(response.data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, [mangaId])

    return (
        <div className="container" style={{paddingTop: 80}}>
            {loading ? <h3>Please Wait...</h3> : 
            <>
            <div className="row">
                <div className="col-sm text-center">
                    <img src={`https://cdn.mangaeden.com/mangasimg/${manga.image}`} alt=""/>
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
