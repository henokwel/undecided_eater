
import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Result.module.css'
import { Skeleton } from "baseui/skeleton";
import { ThemeProvider, LightTheme, DarkTheme } from 'baseui';
import { Button, SIZE, SHAPE } from 'baseui/button';
import ArrowIcon from '../src/assets/icons/ArrowIcon.svg'
import RefreshIcon from '../src/assets/icons/reload-icon.svg'
import { useStyletron } from 'baseui';
import { useRouter } from 'next/router';
import { Display4 } from 'baseui/typography';
import { Quote } from '../src/components/Result/Quote';
import { Card } from '../src/components/Result/Card';
import { CardShadow } from '../src/components/Result/CardShadow';
import { ButtonGroup, MODE } from 'baseui/button-group';



const THEME = {
    light: 'light',
    dark: 'dark',
};




export default function Result({ props }) {
    const [resturantsArray, setResturantsArray] = useState([]);
    const [selectedResturant, setSelectedResturant] = useState([]);
    const [currentDisplay, setCurrentDisplay] = useState(null);
    const [hideRefreshBtn, setHideRefreshBtn] = useState(false);
    const [selected, setSelected] = React.useState();
    console.log('Props', props);

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



    // console.log('Query refresh', query);

    useEffect(() => {
        // Fetch Data and set Result
        fetchData()

        // Check for reload and serve saved data or redirect

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const handleRefreshBtn = () => {
        // new array with all not selected places
        const newRandom = resturantsArray.filter(place => place.name !== currentDisplay.name)


        console.log('NewRandom', newRandom);

        // Limit selected to only 3, 
        const checkForResturantNr = newRandom.length > 3 ? true : false
        const limitTo3 = checkForResturantNr ? 3 : newRandom.length


        console.log('Limit2', limitTo3);

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

    const handleTakeMeThereBtn = () => {
        // redirect to google map 

        window.open(`https://maps.google.com?q=${currentDisplay.name}`)
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

                            {/* Take me there button,  direct to maps.com/resturant adress */}
                            {/* <div
                                className={css({
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: themes.sizing.scale1000,
                                    color: themes.colors.primaryB
                                })}>

                                <Button
                                    onClick={() => handleTakeMeThereBtn(currentDisplay.name)}
                                    size={SIZE.large}
                                    $style={{ width: "350px", textAlign: "center" }}>
                                    Take me there
                                    {'\u00A0'}{'\u00A0'} {'\u00A0'}
                                    <Image src={ArrowIcon} alt="Arrow Icon Pin" />
                                </Button>
                            </div> */}



                            {/* Toggle between selected resturant */}

                            <div
                                className={css({
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: "center",
                                    marginTop: themes.sizing.scale600,
                                    color: themes.colors.primaryB,
                                    width: "250px",
                                    // background:"red"
                                })}>

                                <ButtonGroup
                                    mode={MODE.radio}
                                    selected={selected}
                                    onClick={(event, index) => {
                                        setSelected(index);
                                    }}
                                >
                                    {
                                        selectedResturant.map((place, index) => {
                                            return <Button
                                                key={index}
                                                onClick={() => handleToggleBtn(place.name)}
                                                className={css({
                                                    width: themes.sizing.scale1400,
                                                    // margin: themes.sizing.scale400,
                                                    color: themes.colors.accent,
                                                    textAlign: "center",
                                                    margin: themes.sizing.scale500,
                                                })}
                                            // size={SIZE.large}
                                            // shape={SHAPE.circle}
                                            >
                                                <Display4 color={themes.colors.accent700}>
                                                    {index + 1}
                                                </Display4>
                                            </Button>
                                        })
                                    }
                                </ButtonGroup>


                            </div>

                        </main>

                        :
                        <CardShadow themes={themes} />
                }
            </ThemeProvider >


        </div >
    )
}