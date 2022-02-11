
import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ThemeProvider, LightTheme, DarkTheme } from 'baseui';
import { Button, SIZE } from 'baseui/button';
import ArrowIcon from '../src/assets/icons/ArrowIcon.svg'
import { useStyletron } from 'baseui';
import { useRouter } from 'next/router';
import { THEME } from '../src/lib/theme';
import { GetLocation } from '../src/components/Home/GetLocation';
import { GetPrice } from '../src/components/Home/GetPrice';
import { GetSearchArea } from '../src/components/Home/GetSearchArea';
import { GetPromptBanner } from '../src/components/Home/GetPromptBanner';
import { Label1 } from 'baseui/typography';



export default function Home() {

  const [theme, setTheme] = React.useState(THEME.dark);
  const [locationRequirePromt, setLocationRequirePromt] = React.useState(false);
  // const [locationStatus, setLocationStatus] = React.useState(true);
  const [css, themes] = useStyletron();

  // Location State
  const [locationStatus, setLocationStatus] = useState({ error: false, lat: null, long: null });
  const [priceRange, setPriceRange] = useState(null);
  const [searchArea, setSearchArea] = useState(null);

  const router = useRouter()


  // Get Location Fn()
  // Handle Location Succes
  const handleLocationSucces = (pos) => {
    const crd = pos.coords;
    setLocationStatus({ error: false, lat: crd.latitude, long: crd.longitude })
  }

  // Handle Location Error
  const handleLocationError = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    setLocationStatus({ error: true, long: null, lat: null })


    router.push({
      pathname: "/declined"
    })


  }

  // Handle Location Prompt
  const handleLocation = () => {
    setLocationRequirePromt(false)

    // launch Permission promt
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleLocationSucces, handleLocationError);
    } else {
      console.error("UnSupported")
      // Add handler for this event
    }
  }


  // Handle Search Area
  const handleSearchArea = (range) => {
    setSearchArea(range[0])
  }


  // handle Price range
  const handlePriceSelect = (price) => {
    setPriceRange(price)
  }


  // Handle Submit

  const handleSearchSubmit = () => {

    const coreState = {
      lat: locationStatus.lat, lon: locationStatus.long,
      area: searchArea,
      price: priceRange
    }

    router.push({
      pathname: "/result",
      query: coreState
    })

  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Undecided Eater</title>
        <meta name="description" content="A quick restaurant finder app." />
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

        <GetPromptBanner
          locationRequirePromt={locationRequirePromt}
          handleLocation={handleLocation}
        />

        <main
          className={css({
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'space-between',
            color: themes.colors.primaryB
          })}>

          <GetLocation
            locationStatus={locationStatus}
            setLocationRequirePromt={setLocationRequirePromt}
          />

          <GetSearchArea
            handleSelect={handleSearchArea}
          />

          <GetPrice
            handleSelect={handlePriceSelect}
          />


          {/* Search button is ONLY Visible if user allow location access */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px"
            }}>

            {
              locationStatus.lat === null ?
                <></>
                :

                <Button
                  onClick={handleSearchSubmit}
                  $style={{
                    color: "#0054A9",
                    fontWeight: "600",
                    width: "254px"
                  }}
                  size={SIZE.large}
                >


                  <Label1
                    color={themes.colors.accent500}
                    $style={{ fontWeight: 600 }}
                  >
                    Search
                  </Label1>

                  {'\u00A0'}
                  {'\u00A0'}
                  {'\u00A0'}
                  <Image src={ArrowIcon} alt="Arrow Icon Pin" />
                </Button>
            }
          </div>

        </main>
      </ThemeProvider>
    </div>
  )
}
