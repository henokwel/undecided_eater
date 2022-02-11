
import React from 'react'
import { H2 } from 'baseui/typography';
import { useStyletron } from 'styletron-react';

export const Wrapper = (props) => {
    const [css, themes] = useStyletron();
    const { children, forwardedRef } = props;


    return (
        <div
            className={css({
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
 
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
                    lineHeight: "45px",
                })}
            >

                <div
                    className={css({
                        backgroundColor: "#0075EB",
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: 'space-between',
                        alignItems: "center",
                        background: "#0c3a68"
                        // height: "50%",

                    })}>
                    <H2>
                        Please press, Allow. <br />
                        When asked to give, <br />
                        Permission.<br />
                        <br />
                        Without your location <br />
                        the app does not work!
                    </H2>

                    <div
                        className={css({
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: "flex-end",
                            height: "50%",
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
                        background: "inherit",
                        opacity: "1",
                        height: "50%",
                    })}>


                </div>


            </div>

        </div >
        // </ThemeProvider>
    );
}
