import React, { Component, useState } from 'react'
import Card from '../components/Card'
import Featured from '../components/Featured'
import Welcome from '../components/Welcome'
import mangas from '../mangas'
import featuredMangas from '../featuredMangas'

export default function Home() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <div className="row" style={{display: "flex", justifyContent: "center"}}>
                        {mangas.map(manga => <Card key={manga.t} manga={manga}/>)}
                    </div>
                </div>
                <div className="col-4">
                    <Welcome/>
                    <Featured mangas={featuredMangas}/>
                </div>
            </div>
        </div>
    )
}
