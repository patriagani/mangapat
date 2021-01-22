import React from 'react'
import Featured from '../components/Featured'
import featuredMangas from '../featuredMangas'

export default function About() {

    return (
        <div className="container">
            <div className="row" style={{display: "flex", justifyContent: "center"}}>
                <p class="text-center p-3 mb-2 bg-dark text-white">We apologize because currently Mangeden API has been deactivated, so that until now we have not been able to make this website function as usual</p>
            </div>
            <div className="row">
                <div className="col-md-8 text-center">
                    <br/>
                    <h4>Welcome to MangaPat</h4>
                    <br/>
                    <img src="mangapatavatar.png" width="150" height="150" alt=""/>
                    <br/><br/>
                    <h5 class="card-title">Read Manga Online For Free</h5>
                    <br/>
                    <p class="card-text text-justify" style={{padding: 20}}>MangaPat is one of the best sources where readers can read online for free high-quality manga from leading publishers. Readers can read online manga chapters from a wide range of classic genres, summaries, manga art-books, and popular fiction and non-fiction manga-titles. MangaPat created by using <a href="https://www.mangaeden.com/api/">Mangaeden API</a></p>
                </div>
                <div className="col-md-4">
                    <Featured mangas={featuredMangas}/>
                </div>
            </div>
        </div>
    )
}
