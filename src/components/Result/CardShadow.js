import React from 'react';
import { Skeleton } from 'baseui/skeleton';
import { useStyletron } from 'styletron-react';


export const CardShadow = ({ themes }) => {
    const [css] = useStyletron();

    return <div
        className={css({
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: "center",
            marginTop: themes.sizing.scale800,
        })}
    >

        <Skeleton
            overrides={{
                Root: {
                    style: {
                        margin: "10px 0px 10px 0px",
                        // background: themes.colors.accent,
                        boxShadow: themes.lighting.shadow600

                    },
                },
            }}
            width="528px" height="463px" animation
        />

        <Skeleton
            overrides={{
                Root: {
                    style: {
                        margin: "10px 0px 10px 0px",
                        boxShadow: themes.lighting.shadow600
                    },
                },
            }}
            width="350px" height="80px" animation />

        <div
            className={css({
                display: 'flex',
                justifyContent: 'center',
                maxWidth: '528px',
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
                            marginBottom: "30px",
                            boxShadow: themes.lighting.shadow600

                        },
                    },
                }}
            />
        </div>
    </div>;
};
