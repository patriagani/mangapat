const mangas = [
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
    {
        a: "code-geass-suzaku-of-the-counterattack",
        c: [
            "Action",
            "Drama",
            "Mecha",
            "School Life",
            "Sci-fi",
            "Shoujo",
            "Supernatural"
        ],
        h: 962,
        i: "5becae4e719a1683f7f0a818",
        im: "38/3881ed3d0d60924b4235d6bb83b38f3001a15e2b732236b26fa83d76.jpg",
        ld: 1542332378,
        s: 2,
        t: "Code Geass: Suzaku of the Counterattack"
    },
    {
        a: "bleach",
        c: [
            "Action",
            "Adventure",
            "Comedy",
            "Drama",
            "Shounen",
            "Supernatural"
        ],
        h: 179910862,
        i: "4e70e9efc092255ef7004274",
        im: "99/99af14772b89d87e6f3deb7d6b174537908a3fc5e7cc7eb6fbf92a68.jpg",
        ld: 1471521618,
        s: 2,
        t: "Bleach"
    },
    {
        a: "yu-gi-oh",
        c: [
            "Adventure",
            "Comedy",
            "Drama",
            "Shounen",
            "Supernatural"
        ],
        h: 4279786,
        i: "4e70ea06c092255ef70047af",
        im: "d9/d9ce088941cb8fbe3a855e6cc56faec5f57a23da1247ce8a79655827.jpg",
        ld: 1284743465,
        s: 2,
        t: "Yu-Gi-Oh"
    },
    {
        a: "ghost-in-the-shell",
        c: [
            "Action",
            "Drama",
            "Mature",
            "Mystery",
            "Psychological",
            "Sci-fi",
            "Seinen"
        ],
        h: 592756,
        i: "4e70e9b8c092255ef70034e6",
        im: "2c/2c2795cbc00fed8fbc25046ff5d5ff840ccefaaa75c3a43e6f26a2ac.png",
        ld: 1330613122,
        s: 2,
        t: "Ghost in the Shell"
    },
    {
        a: "ghost-in-the-shell-arise",
        c: [
            "Action",
            "Drama",
            "Mature",
            "Mystery",
            "Psychological",
            "Sci-fi",
            "Seinen",
            "Tragedy"
        ],
        h: 884,
        i: "5bf1f2c3719a168aa30a8508",
        im: "f0/f016bfc62f2b53ddc262129e5e433ed5ed890417e6b0e9651b4caaaa.jpg",
        ld: 1543527890,
        s: 2,
        t: "Ghost in the Shell ARISE"
    },
    {
        a: "tengen-toppa-gurren-lagann",
        c: [
            "Action",
            "Adventure",
            "Comedy",
            "Drama",
            "Ecchi",
            "Mecha",
            "Romance",
            "Shounen"
        ],
        h: 361556,
        i: "4e70e9eec092255ef7004202",
        im: "20/20f6e171ec348d18ead5af82ecd8f0df6d2620a13a7ca02463c8a71d.jpg",
        ld: 1508358839,
        s: 2,
        t: "Tengen Toppa Gurren Lagann"
    },
    {
        a: "one-piece",
        c: [
            "Action",
            "Adventure",
            "Comedy",
            "Drama",
            "Fantasy",
            "Shounen"
        ],
        h: 209806950,
        i: "4e70ea10c092255ef7004aa2",
        im: "b0/b0ac7f12d2cb0fc07b9418d5544a3f97cbbc30e967396ae70f98d101.png",
        ld: 1585433645,
        s: 1,
        t: "One Piece"
    },
    {
        a: "attack-on-titan---before-the-fall",
        c: [
            "Action",
            "Drama",
            "Fantasy",
            "Horror",
            "Mature",
            "Mystery",
            "Shounen",
            "Supernatural"
        ],
        h: 844386,
        i: "5224e32c45b9effc5b1efec9",
        im: "e8/e833aafca97d673e2ec924794b2c05e3855c56379f92411504c9fef7.jpg",
        ld: 1534976084,
        s: 1,
        t: "Attack On Titan - Before The Fall"
    },
    {
        a: "hunter-x-hunter",
        c: [
            "Action",
            "Adventure",
            "Comedy",
            "Drama",
            "Fantasy",
            "Martial Arts",
            "Psychological",
            "Shounen",
            "Supernatural"
        ],
        h: 17295931,
        i: "4e70ea02c092255ef70046e0",
        im: "df/dfa10afb26c40498e742a80653d23aa0d5ce96cd9c6b6e3f65d09507.jpg",
        ld: 1543014968,
        s: 1,
        t: "Hunter x Hunter"
    },
    {
        a: "naruto",
        c: [
            "Action",
            "Adventure",
            "Comedy",
            "Drama",
            "Fantasy",
            "Shounen"
        ],
        h: 251998097,
        i: "4e70ea03c092255ef70046f0",
        im: "d1/d1cd664cefc4d19ec99603983d4e0b934e8bce91c3fccda3914ac029.png",
        ld: 1477732811,
        s: 2,
        t: "Naruto"
    },

    {
        a: "boruto-naruto-next-generations",
        c: [
            "Action",
            "Adventure",
            "Comedy",
            "Drama",
            "Fantasy",
            "Shounen"
        ],
        h: 982514,
        i: "5754a49e719a1641fd988b6d",
        im: "a6/a6cb9ecfe372e142bf15a33aaa7bd37fcf907ec5a01c3ccd230ad53b.jpg",
        ld: 1584762088,
        s: 1,
        t: "Boruto: Naruto Next Generations"
    },
    {
        a: "slam-dunk",
        c: [
            "Comedy",
            "Drama",
            "School Life",
            "Shounen",
            "Sports"
        ],
        h: 5364999,
        i: "4e70ea0fc092255ef7004a61",
        im: "b1/b1fe53047bd91749e7da5c8f3fa719a93c69d0863430930f710e97a7.jpg",
        ld: 1541889125,
        s: 2,
        t: "Slam Dunk"
    },

]

module.exports = mangas