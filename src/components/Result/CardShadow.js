import React from 'react';
import { Skeleton } from 'baseui/skeleton';
import { useStyletron } from 'styletron-react';


export const CardShadow = ({themes}) => {
    const [css] = useStyletron();

    return <div>


        <Skeleton width="528px" height="463px" animation />

        <Skeleton
            overrides={{
                Root: {
                    style: {
                        margin: "10px 0px 10px 0px"

                    },
                },
            }}
            width="350px" height="25px" animation />

        <Skeleton
            overrides={{
                Root: {
                    style: {
                        margin: "10px 0px 10px 0px"
                    },
                },
            }}
            width="350px"
            height="25px"
            animation
        />



        <Skeleton
            overrides={{
                Root: {
                    style: {
                        margin: "10px 0px 10px 0px"
                    },
                },
            }}
            width="350px"
            height="25px"
            animation
        />


        <div
            className={css({
                display: 'flex',
                // flexDirection: "column",
                justifyContent: 'center',

                maxWidth: '528px',
                // height: "100vh",

                // alignItems: 'center',
                // paddingRight: theme.sizing.scale600,
                // paddingLeft: theme.sizing.scale600,

                marginTop: themes.sizing.scale800,
                color: themes.colors.primaryB
            })}

        >




            <Skeleton
                width="100px"
                height="100px"
                animation
                overrides={{
                    Root: {
                        style: {
                            borderRadius: '50%',
                            marginBottom: "30px"

                        },
                    },
                }}
            />


        </div>
        <Skeleton width="350px" height="56px" animation />


    </div>;
};
