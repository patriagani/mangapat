import React, { Component } from 'react'

export default function Welcome(props) {

    return (
        <div class="card text-center" style={{marginTop: 10}}>
            <div class="card-header bg-primary text-white">
                Welcome to MangaPat
            </div>
            <div class="card-body">
                <img src="mangapatavatar.png" width="150" height="150" alt=""/>
                <br/><br/>
                <h5 class="card-title">Read Manga Online For Free</h5>
                <p class="card-text text-justify" style={{padding: 20}}>MangaPat is one of the best sources where readers can read online for free high-quality manga from leading publishers. Readers can read online manga chapters from a wide range of classic genres, summaries, manga art-books, and popular fiction and non-fiction manga-titles. MangaPat created by using <a href="https://www.mangaeden.com/api/">Mangaeden API</a></p>
            </div>
        </div>
    )
}
