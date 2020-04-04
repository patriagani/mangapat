import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    let history = useHistory()
    const [search, setSearch] = useState("")

    function handleSearchChange(event) {
        setSearch(event.target.value)
    }

    function goSearch(event) {
        event.preventDefault();
        history.push(`/search?keyword=${search}`)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand">
                <img src="mangapatavatar.png" width="30" height="30" alt=""/>
            </a>
            <a className="navbar-brand">MangaPat</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/featured-mangas">Featured Manga</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="privacy-policy">Privacy Policy</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0" onSubmit={goSearch}>
                    <input className="form-control mr-sm-2" type="search" onChange={handleSearchChange} placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" style={{color: "white"}} type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}
