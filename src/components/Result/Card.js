
import * as React from 'react';
import { Card as MyCard, StyledBody, StyledAction } from 'baseui/card';
import { Skeleton } from 'baseui/skeleton';
import { Button } from 'baseui/button';
import { useStyletron } from 'styletron-react';
 import ArrowIcon from '../../assets/icons/ArrowIcon.svg'


import {
    H6,
} from 'baseui/typography';

import Pig0 from '../../assets/icons/pigprice1.svg'
import Pig1 from '../../assets/icons/pigprice2.svg'
import Pig2 from '../../assets/icons/pigprice3.svg'
import Image from 'next/image';

export const Card = ({ themes, name, rating, price }) => {


    const handleTakeMeThereBtn = () => {

        // redirect to google map 

        window.open(`https://maps.google.com?q=${name}`)
    }

    const [css] = useStyletron();
    return <div>
        <MyCard
            overrides={{
                Root: {
                    style: {
                        maxWidth: '528px',
                        borderRadius: themes.borders.radius100,

                        marginTop: themes.sizing.scale1200,

                    }
                }
            }}
            // Add local picture
            // `https://maps.googleapis.com/maps/api/place/photo?maxwidth=700&photoreference=${photoRef}&sensor=false&key=${process.env.MY_KEY}`
            headerImage={
                'https://source.unsplash.com/user/brookelark/700x400'
            }
            title={name ?? "Loading.."}
        >



            <StyledBody>
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
                        src={
                            price <= 1 ? Pig0 : price === 2 ? Pig1 : Pig2
                        }
                        alt="One Dollar sign" />
                </div>
            </StyledBody>
            <StyledAction>
                <Button
                    onClick={handleTakeMeThereBtn}
                    overrides={{ BaseButton: { style: { width: '100%' } } }}>
                    Take me there
                    {/* <Image src={ArrowIcon} alt="Arrow Icon Pin" /> */}


                </Button>
            </StyledAction>
        </MyCard>



    </div>;
};
