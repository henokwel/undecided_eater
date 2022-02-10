
import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ThemeProvider, LightTheme, DarkTheme } from 'baseui';
import { Button, SIZE } from 'baseui/button';
import LocationIcon from '../src/assets/icons/location--filled.svg'
import ArrowIcon from '../src/assets/icons/ArrowIcon.svg'
import ThumbUp from '../src/assets/icons/thumbs-up--filled 1.svg'
import PriceToggler from '../src/components/utils/PriceToggler';
import { useStyletron } from 'baseui';
import { Layer } from 'baseui/layer';
import { Wrapper } from '../src/components/utils/PromptWrapper';
import SearchAreaRange from '../src/components/utils/SearchAreaRange';
import { useRouter } from 'next/router';
import { THEME } from '../src/lib/theme';




import Pig1 from '../src/assets/icons/pigprice1.svg'
import Pig2 from '../src/assets/icons/pigprice2.svg'
import Pig3 from '../src/assets/icons/pigprice3.svg'




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
                Location  dsfdsf  <br />
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
                <PriceToggler handleSelect={handlePriceSelect} >


                  <Button>
                    <Image src={Pig1} alt="One Dollar sign" />
                  </Button>
                  <Button>
                    <Image src={Pig2} alt="Two Dollar sign" />
                  </Button>
                  <Button>
                    <Image src={Pig3} alt="Three Dollar sign" />
                  </Button>
                </PriceToggler>
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
