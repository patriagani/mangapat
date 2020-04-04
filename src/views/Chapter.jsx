import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Chapter(props) {

    const [chapter, setChapter] = useState("")
    const [loading, setLoading] = useState(true)
    const [totalPage, setTotalPage] = useState(0)
    const {mangaId, chapterId, page} = props.match.params

    useEffect(() => {
        setLoading(true)
        axios.get(`https://www.mangaeden.com/api/chapter/${chapterId}`)
            .then((response) => {
                setChapter(response.data.images.reverse()[Number(page-1)][1])
                setTotalPage(response.data.images.length)
                setLoading(false)
            })
            .catch(() => {
                props.history.push(`/detail/${mangaId}`)
            })
    }, [page])

    return (
        <>
            {loading ? <h3 style={{paddingTop: 1000}}>Please Wait...</h3> :
            <> 
                <div className="container" style={{display: "flex", justifyContent: "center", paddingBottom: 50, paddingTop: 50}}>
                    {page !== 1 ? <Link style={{color: "white", width:200, marginLeft: 10, marginRight: 10}} to={`/detail/${mangaId}/chapter/${chapterId}/${Number(page)-1}`} className="btn btn-primary" >Previous Page</Link> : 
                                 <Link style={{color: "white", width:200, marginLeft: 10, marginRight: 10}} to={`/detail/${mangaId}`} className="btn btn-secondary" >Back To Chapter List</Link> } 
                    {page !== totalPage ? <Link style={{color: "white", width:200, marginLeft: 10, marginRight: 10}} to={`/detail/${mangaId}/chapter/${chapterId}/${Number(page)+1}`} className="btn btn-primary" >Next Page</Link> :
                                 <Link style={{color: "white", width:200, marginLeft: 10, marginRight: 10}} to={`/detail/${mangaId}`} className="btn btn-secondary" >Back To Chapter List</Link> }
                </div>

                <div className="container" style={{paddingTop: 50, display: "flex", justifyContent: "center"}}>
                    <img srcSet={`https://cdn.mangaeden.com/mangasimg/${chapter}`} alt=""/>
                </div>
                    <br/>
                <div className="container" style={{display: "flex", justifyContent: "center", paddingBottom: 50, paddingTop: 50}}>
                    {page !== 1 ? <Link style={{color: "white", width:200, marginLeft: 10, marginRight: 10}} to={`/detail/${mangaId}/chapter/${chapterId}/${Number(page)-1}`} className="btn btn-primary" >Previous Page</Link> : 
                                 <Link style={{color: "white", width:200, marginLeft: 10, marginRight: 10}} to={`/detail/${mangaId}`} className="btn btn-secondary" >Back To Chapter List</Link> } 
                    {page !== totalPage ? <Link style={{color: "white", width:200, marginLeft: 10, marginRight: 10}} to={`/detail/${mangaId}/chapter/${chapterId}/${Number(page)+1}`} className="btn btn-primary" >Next Page</Link> :
                                 <Link style={{color: "white", width:200, marginLeft: 10, marginRight: 10}} to={`/detail/${mangaId}`} className="btn btn-secondary" >Back To Chapter List</Link> }
                </div>
            </>
            }
        </>
    )
}
