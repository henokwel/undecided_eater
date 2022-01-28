
import React from 'react'
// import { ThemeProvider, LightTheme, DarkTheme } from 'baseui';
import { useStyletron } from 'styletron-react';

// const THEME = {
//     light: 'light',
//     dark: 'dark',
// };


export const Wrapper = (props) => {
    // const [css] = useStyletron();
    // const [theme, setTheme] = React.useState(THEME.dark);
    const [css, themes] = useStyletron();

    const { offset, color, children, forwardedRef } = props;
    return (
        // <ThemeProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>

        <div
            className={css({
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                // textAlign: 'center',
            })}
            ref={forwardedRef}
        >

            <div
                className={css({
                    display: 'flex',
                    flexDirection: "column",
                    justifyContent: 'space-between',
                    height: "100vh",
                    color: "white",
                    fontWeight: "600",
                    fontSize: "15px",
                    lineHeight: "45px"
                })}
            >

                <div
                    className={css({
                        backgroundColor: "#0075EB",
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: 'space-between',

                        alignItems: "center",
                        height: "50%",

                    })}>
                    <h1>
                        Please press, Allow. <br />
                        When asked to give, <br />
                        Permission.<br />
                        <br />
                        Without your location <br />
                        the app does not work!
                    </h1>


                    <div
                        className={css({
                            display: 'flex',

                            justifyContent: 'flex-end',
                            alignItems: "flex-end",
                            // backgroundColor: "green",
                            height: "50%",
                            // color: themes.colors.primaryB
                        })}>

                        {children}
                    </div>
                </div>


                <div
                    className={css({
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: 'flex-start',
                        alignItems: "flex-end",
                        backgroundColor: "white",
                        opacity: "0.5",
                        height: "50%",
                        // color: themes.colors.primaryB
                    })}>


                </div>


            </div>

        </div >
        // </ThemeProvider>
    );
}
