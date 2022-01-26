
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Skeleton } from "baseui/skeleton";
import { ThemeProvider, LightTheme, DarkTheme } from 'baseui';
import { Button, SIZE } from 'baseui/button';
import LocationIcon from '../src/assets/icons/location--filled.svg'
import ArrowIcon from '../src/assets/icons/ArrowIcon.svg'

import CustomTicks from '../src/components/utils/CustonSlider';
import PriceToggler from '../src/components/utils/PriceToggler';
import { useStyletron } from 'baseui';

const THEME = {
  light: 'light',
  dark: 'dark',
};

export default function Home() {
  const [theme, setTheme] = React.useState(THEME.dark);
  const [css, themes] = useStyletron();


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
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

            <section className={styles.locationSection}>
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
                <Button
                  $style={{
                    color: "#0054A9",
                    fontWeight: "600",
                    marginRight: "12px"

                  }}
                  size={SIZE.large}>
                  Get Location
                </Button>
                <Image src={LocationIcon} />
              </div>
            </section>


            <section>
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
                <CustomTicks />
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
                Price
              </h1>

              <div style={{ display: "flex" }}>
                <PriceToggler />
              </div>
            </section>

          </div>



          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px"
            }}>
            <Button
              $style={{

                color: "#0054A9",
                fontWeight: "600",
                width:"154px"
                // marginRight: "12px"

              }}
              size={SIZE.large}>
              Search
              {'\u00A0'}
              {'\u00A0'}
              {'\u00A0'}
              <Image src={ArrowIcon} />


            </Button>
          </div>
        </main>
      </ThemeProvider>


    </div>
  )
}
