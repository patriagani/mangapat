import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
    const {manga} = props

    return (
        <div className="card text-center" style={{width: 220, height: 400, margin: 10, paddingTop: 10, paddingBottom: 10}}>
            <img style={{width: 200, height: 250, display: "block", marginLeft: "auto", marginRight: "auto"}} src={`https://cdn.mangaeden.com/mangasimg/${manga.im}`} onError={(e)=>{e.target.onerror = null; e.target.src="https://cdn.mangaeden.com/images/no_image.svg"}} alt="Card image cap"></img>
            <div className="card-body">
                <p className="card-title" style={{height: 50}}>{manga.t}</p>
                <Link to={`/detail/${manga.i}`} className="#" class="btn btn-primary" style={{color: "white"}}>Read Online</Link>
            </div>
        </div>
    )
}
