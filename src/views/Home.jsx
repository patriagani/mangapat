import React, { Component, useState } from 'react'
import Card from '../components/Card'

export default function Home() {

    let mangas = [
        {
            a: "dragon-ball-super",
            c: [
            "Action",
            "Adventure",
            "Comedy",
            "Drama",
            "Fantasy",
            "Sci-fi",
            "Shounen"
            ],
            h: 1889680,
            i: "558802a9719a167572253c6d",
            im: "9f/9f89e4255b1d30ef242641072e0f14b282e6142afccebb3db9645a98.jpg",
            ld: 1584761960,
            s: 1,
            t: "Dragon Ball Super"
        },
        {
            a: "dragon-ball",
            c: [
            "Action",
            "Adventure",
            "Comedy",
            "Drama",
            "Fantasy",
            "Sci-fi",
            "Shounen"
            ],
            h: 29521807,
            i: "4e70ea03c092255ef7004734",
            im: "79/79ad7be2dca43fbb19576854a7f8675889c3944aa196cb94f2460d55.jpg",
            ld: 1542231988,
            s: 2,
            t: "Dragon Ball"
        },
        {
            a: "fullmetal-alchemist",
            c: [
            "Action",
            "Adventure",
            "Comedy",
            "Drama",
            "Fantasy",
            "Sci-fi",
            "Shounen",
            "Supernatural",
            "Tragedy"
            ],
            h: 6715835,
            i: "4e70ea06c092255ef700479d",
            im: "66/669f67a15e90f473580fcd232880a46268c6cd2a846d1bc41bc1a9cc.jpg",
            ld: 1343248766,
            s: 2,
            t: "Fullmetal Alchemist"
        },
    ]

    return (
        <div className="container">
            <div class="row" style={{display: "flex", justifyContent: "center"}}>
                {mangas.map(manga => <Card key={manga.t} manga={manga}/>)}
            </div>
        </div>
    )
}
