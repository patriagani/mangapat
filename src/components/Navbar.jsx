import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand">
                <img src="mangapatavatar.png" width="30" height="30" alt=""/>
            </a>
            <a class="navbar-brand">MangaPat</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/">Home</Link>
                    </li>
                    <li class="nav-item active">
                        <Link class="nav-link" to="/about">About</Link>
                    </li>
                    <li class="nav-item active">
                        <Link class="nav-link" to="/featured-mangas">Featured Manga</Link>
                    </li>
                    <li class="nav-item active">
                        <Link class="nav-link" to="privacy-policy">Privacy Policy</Link>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" style={{color: "white"}} type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}
