import React from 'react'
import Card from '../components/Card'
import Featured from '../components/Featured'
import Welcome from '../components/Welcome'
import mangas from '../mangas'
import featuredMangas from '../featuredMangas'

export default function Home() {

    return (
        <div className="container">
            <div className="row" style={{display: "flex", justifyContent: "center"}}>
                <p class="text-center p-3 mb-2 bg-dark text-white">We apologize because currently Mangeden API has been deactivated, so that until now we have not been able to make this website function as usual</p>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <div className="row" style={{display: "flex", justifyContent: "center"}}>
                        {mangas.map(manga => <Card key={manga.t} manga={manga}/>)}
                    </div>
                </div>
                <div className="col-md-4">
                    <Welcome/>
                    <Featured mangas={featuredMangas}/>
                </div>
            </div>
        </div>
    )
}
