
import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Result.module.css'
import { ThemeProvider, LightTheme, DarkTheme } from 'baseui';
import { Button, SHAPE } from 'baseui/button';
import RefreshIcon from '../src/assets/icons/reload-icon.svg'
import { useStyletron } from 'baseui';
import { useRouter } from 'next/router';
import { Display4 } from 'baseui/typography';
import { Quote } from '../src/components/Result/Quote';
import { Card } from '../src/components/Result/Card';
import { CardShadow } from '../src/components/Result/CardShadow';
import PriceToggler from '../src/components/utils/PriceToggler';
import { THEME } from '../src/lib/theme';



export default function Result({ props }) {
    const [resturantsArray, setResturantsArray] = useState([]);
    const [selectedResturant, setSelectedResturant] = useState([]);
    const [currentDisplay, setCurrentDisplay] = useState(null);
    const [hideRefreshBtn, setHideRefreshBtn] = useState(false);
    const [selected, setSelected] = React.useState();

    const [theme, setTheme] = React.useState(THEME.dark);
    const [css, themes] = useStyletron();
    // const [first, setfirst] = useState(second);

    const router = useRouter()
    const query = router.query

    const fetchData = async () => {

        const res = await fetch("/api/finder", {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify({ query })
        })
        const data = await res.json()

        const pickRandomResturant = Math.floor(Math.random() * data.length)

        setCurrentDisplay(data[pickRandomResturant])
        setResturantsArray(data)
        setHideRefreshBtn(false)
    }


    useEffect(() => {
        // Fetch Data and set Result
        fetchData()

        // Check for reload and serve saved data or redirect

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const handleRefreshBtn = () => {
        // new array with all not selected places
        const newRandom = resturantsArray.filter(place => place.name !== currentDisplay.name)

        // console.log('NewRandom', newRandom);

        // Limit selected to only 3, 
        const checkForResturantNr = newRandom.length > 3 ? true : false
        const limitTo3 = checkForResturantNr ? 3 : newRandom.length

        if (selectedResturant.length !== limitTo3) {

            // save current resturant name to selected state
            setSelectedResturant([...selectedResturant, currentDisplay])

            // pick a random and set as current
            setCurrentDisplay(newRandom[Math.floor(Math.random() * newRandom.length)])
        } else {

            // Hide refresh button
            // flash indecision quote
            setHideRefreshBtn(true)
        }
    }

    const handleToggleBtn = (name) => {
        const selectedPlace = resturantsArray.filter(item => item.name === name)[0]
        // console.log(selectedPlace);
        setCurrentDisplay(selectedPlace)
    }

    return (
        <div
            className={css({
                display: "flex",
                flexDirection: "column",
                // justifyContent:"space-between",
                minHeight: "100vh",
                paddingLeft: "5%",
            })}>

            <Head>
                <title>Pick One</title>
                <meta name="description" content="Pick one restaurant from given choose." />
                <link rel="icon" href="favicons/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png" />
                <link rel="manifest" href="favicons/site.webmanifest" />
                <link rel="mask-icon" href="favicons/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Head>

            <ThemeProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>

                <Quote themes={themes} />

                {/* <CardShadow  themes={themes}/> */}

                {
                    resturantsArray.length !== 0 ?

                        <main
                            className={css({
                                display: 'flex',
                                flexDirection: "column",
                                justifyContent: 'space-between',
                                alignItems: "center",
                                color: themes.colors.primaryB
                            })}>

                            <Card
                                themes={themes}
                                name={currentDisplay === null ? "Loading.." : currentDisplay.name}
                                rating={currentDisplay === null ? "Loading.." : currentDisplay.rating}
                                price={currentDisplay === null ? "Loading.." : currentDisplay.price_level}
                                photoRef={currentDisplay === null ? "Loading.." : currentDisplay.photos[0].photo_reference}
                            />

                            {/* Refresh or generate a new resturant button */}
                            <div
                                className={css({
                                    display: 'flex',
                                    // flexDirection: "column",
                                    justifyContent: 'center',
                                    maxWidth: '528px',
                                    marginTop: themes.sizing.scale800,
                                    color: themes.colors.primaryB,
                                })}>

                                {
                                    !hideRefreshBtn ?
                                        <Button shape={SHAPE.circle} onClick={handleRefreshBtn}>
                                            <Image className={styles.refreshIcon} src={RefreshIcon} alt="refresh Icon" />
                                        </Button>
                                        :
                                        <></>
                                }
                            </div>

                            {/* Toggle between selected resturant */}

                            <div
                                className={css({
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: themes.sizing.scale600,
                                    width: "250px",
                                })}
                            >


                                <PriceToggler handleSelect={setSelected}>

                                    {
                                        selectedResturant.map((place, index) => {
                                            return <Button
                                                key={index}
                                                onClick={() => handleToggleBtn(place.name)}

                                            >
                                                <Display4 color={themes.colors.accent100}>
                                                    {index + 1}
                                                </Display4>
                                            </Button>
                                        })
                                    }

                                </PriceToggler>

                            </div>

                        </main>
                        :
                        <CardShadow themes={themes} />
                }

            </ThemeProvider >
        </div >
    )
}