
import React from 'react'
import Head from 'next/head'


import { ThemeProvider, LightTheme, DarkTheme } from 'baseui';
import { useStyletron } from 'baseui';
import { Display4 } from 'baseui/typography';




const THEME = {
    light: 'light',
    dark: 'dark',
};



export default function NotFound({ props }) {
    const [theme, setTheme] = React.useState(THEME.dark);
    const [css] = useStyletron()
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
                <title>Declined Location</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ThemeProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>

                <Display4>
                    Page Not Found !
                </Display4>

            </ThemeProvider >


        </div >
    )
}


