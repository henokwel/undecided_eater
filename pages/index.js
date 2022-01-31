
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Skeleton } from "baseui/skeleton";
import { ThemeProvider, LightTheme, DarkTheme } from 'baseui';
import { Button, SIZE } from 'baseui/button';
import LocationIcon from '../src/assets/icons/location--filled.svg'
import ArrowIcon from '../src/assets/icons/ArrowIcon.svg'
import ThumbUp from '../src/assets/icons/thumbs-up--filled 1.svg'


import CustomTicks from '../src/components/utils/SearchAreaRange';
import PriceToggler from '../src/components/utils/PriceToggler';
import { useStyletron } from 'baseui';
import { Layer } from 'baseui/layer';
import { Wrapper } from '../src/components/utils/PromptWrapper';
import SearchAreaRange from '../src/components/utils/SearchAreaRange';
import { useRouter } from 'next/router';
import { route } from 'next/dist/server/router';
import Link from 'next/link';


const THEME = {
  light: 'light',
  dark: 'dark',
};




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
    console.log('Price', price);
    setPriceRange(price)
  }



  // Handle Submit

  const handleSearchSubmit = () => {

    const coreState = {
      lat: locationStatus.lat, lon: locationStatus.long,
      area: searchArea,
      price: priceRange
    }

    console.log('CoreSatet', coreState);



    router.push({
      pathname: "/result",
      query: coreState
    })

  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Undecided Eater</title>
        <meta name="description" content="Pick a restaurant for undecided eater" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <ThemeProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>

        {

          locationRequirePromt ?

            <Layer>
              <Wrapper>
                <Button
                  onClick={() => handleLocation()}
                  $style={{
                    color: "#0054A9",
                    fontWeight: "600",
                    marginBottom: "12px",
                    minWidth: "251px",


                  }}
                  size={SIZE.large}>
                  I Understand
                </Button>
              </Wrapper>
            </Layer>
            : null
        }

        <main
          className={css({
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'space-between',
            height: "100vh",

            // alignItems: 'center',
            // paddingRight: theme.sizing.scale600,
            // paddingLeft: theme.sizing.scale600,
            // paddingBottom: theme.sizing.scale400,
            color: themes.colors.primaryB
          })}
        >


          <div>
            <section className={styles.locationSection}
            >
              <h1 style={{
                fontSize: '32px',
                fontWeight: '600',
                marginBottom: '15px',
                lineHeight: '42px',
                // color: "white"
              }}>
                Your   <br />
                Current   <br />
                Location   <br />
              </h1>

              <div style={{ display: "flex" }}>

                {
                  locationStatus.lat === null ?
                    <>
                      <Button
                        onClick={() => setLocationRequirePromt(true)}
                        className={css({
                          marginRight: "18px",
                          textAlign: themes.sizing.scale400,
                          fontWeight: "600",
                          color: "#0054A9"
                        })}

                        size={SIZE.large}>
                        Get Location
                      </Button>
                      <Image src={LocationIcon} alt="Location Pin Icon" />
                    </>
                    :
                    <Image src={ThumbUp} alt="Thumb up  Icon" />

                }

              </div>
            </section>

            <section className={styles.searchAreaSection}>
              <h1 style={{
                fontSize: '32px',
                fontWeight: '600',
                marginBottom: '15px',
                lineHeight: '42px',
                // color: "white"
              }}>
                Search   <br />
                Area   <br />
              </h1>

              <div style={{ display: "flex" }}>
                <SearchAreaRange handleSelect={handleSearchArea} />
              </div>
            </section>



            <section className={styles.priceSection}>
              <h1 style={{
                fontSize: '32px',
                fontWeight: '600',
                marginBottom: '15px',
                lineHeight: '42px',
                // color: "white"
              }}>
                Price <br />
                Range
              </h1>

              <div style={{ display: "flex" }}>
                <PriceToggler handleSelect={handlePriceSelect} />
              </div>
            </section>

          </div>



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
                    // marginRight: "12px"

                  }}
                  size={SIZE.large}>
                  {/* <Link href="/result"> */}
                  Search
                  {/* </Link> */}
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



// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch("http://localhost:3000/api/hello")
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }

