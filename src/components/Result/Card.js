
import * as React from 'react';
import { Card as MyCard, StyledBody, StyledAction } from 'baseui/card';
import { Skeleton } from 'baseui/skeleton';
import { Button } from 'baseui/button';
import { useStyletron } from 'styletron-react';
import {
    H6,
} from 'baseui/typography';

import Pig0 from '../../assets/icons/pigprice1.svg'
import Pig1 from '../../assets/icons/pigprice2.svg'
import Pig2 from '../../assets/icons/pigprice3.svg'
import Image from 'next/image';
import { CardShadow } from './CardShadow';

export const Card = ({ themes, name, rating, price }) => {
    const [css] = useStyletron();

    console.log("price", price);
    console.log("name", name);

    return <div>

        {/* <CardShadow themes={themes} /> */}

        <MyCard

            overrides={{
                Root: {
                    style: {
                        maxWidth: '528px',
                        borderRadius: themes.borders.radius100,
                        // border: themes.colors.borderTransparent,
                        // background: "transparent",
                        marginTop: themes.sizing.scale1200,

                    }
                }
            }}
            // Add local picture
            // `https://maps.googleapis.com/maps/api/place/photo?maxwidth=700&photoreference=${photoRef}&sensor=false&key=${process.env.MY_KEY}`
            headerImage={
                'https://source.unsplash.com/user/brookelark/700x400'
            }
        // title="Example card"
        >



            <StyledBody>

                <H6 margin="15px 10px 1px 0px">
                    Name: {name ?? "Loading.."}
                </H6>

                <H6 margin="15px 10px 1px 0px">
                    Rating: {rating ?? "Loading.."}
                </H6>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center"
                    }}>


                    <H6 margin="15px 10px 10px 0px">
                        Price:
                    </H6>

                    <Image
                        layout="fixed"
                        // width={43}
                        // height={37}
                        src={
                            price <= 2 ? Pig0 : price === 3 ? Pig1 : Pig2
                        }
                        alt="One Dollar sign" />
                </div>
            </StyledBody>
            {/* <StyledAction>
                <Button overrides={{ BaseButton: { style: { width: '100%' } } }}>
                    Button Label
                </Button>
            </StyledAction> */}
        </MyCard>



    </div>;
};
