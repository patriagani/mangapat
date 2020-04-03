import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default function Featured(props) {
    const {mangas} = props

    return (
        <div className="card text-center">
            <div className="card-header bg-primary text-white">
                Featured Manga
            </div>
            <div className="card-body">
                {mangas.map(manga => 
                    <>
                        <div className="row">
                            <div className="col-4">
                                <img src={`https://cdn.mangaeden.com/mangasimg/${manga.im}`} width="50" height="50" alt=""/>   
                            </div>
                            <div className="col-8 text-left" style={{paddingTop: 5}}>
                                <p><Link to={`/detail/${manga.i}`} >{manga.t}</Link></p>
                            </div>
                        </div>
                        <br/>
                    </>    
                )}
            </div>
            <div className="card-footer text-white bg-primary">
                Picked by PatriaGani
            </div>
        </div>
    )
}
