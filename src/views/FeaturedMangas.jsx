import React from 'react'
import Card from '../components/Card'
import mangas from '../featuredMangas'

export default function FeaturedMangas() {

    return (
        <div className="container">
            <br/>
            <div className="row" style={{display: "flex", justifyContent: "center"}}>
                <p class="text-center p-3 mb-2 bg-dark text-white">We apologize because currently Mangeden API has been deactivated, so that until now we have not been able to make this website function as usual</p>
            </div>
            <br/>
            <div className="row" style={{display: "flex", justifyContent: "center"}}>
                <h4>Featured Mangas Picked By PatriaGani</h4>
            </div>
            <br/>
            <div className="row" style={{display: "flex", justifyContent: "center"}}>
                {mangas.map(manga => <Card key={manga.t} manga={manga}/>)}
            </div>
        </div>
    )
}