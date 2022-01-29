
import * as React from 'react';
import { Card as MyCard, StyledBody, StyledAction } from 'baseui/card';
import { Skeleton } from 'baseui/skeleton';
import { Button } from 'baseui/button';
import { useStyletron } from 'styletron-react';
import {
    H6,
} from 'baseui/typography';

import Pig1 from '../../assets/icons/pigprice1.svg'
import Pig2 from '../../assets/icons/pigprice2.svg'
import Pig3 from '../../assets/icons/pigprice3.svg'
import Image from 'next/image';
import { CardShadow } from './CardShadow';

export const Card = ({ themes }) => {
    const [css] = useStyletron();

    return <div>

        {/* <CardShadow themes={themes} /> */}

        <MyCard

            overrides={{
                Root: {
                    style: {
                        maxWidth: '528px',
                        borderRadius: themes.borders.radius,
                        // border: themes.colors.borderTransparent,
                        // background: "transparent",
                        marginTop: themes.sizing.scale1200,

                    }
                }
            }}
            headerImage={
                'https://source.unsplash.com/user/erondu/700x400'
            }
        // title="Example card"
        >



            <StyledBody>

                <H6 margin="15px 10px 1px 0px">
                    Name: XX
                </H6>

                <H6 margin="15px 10px 1px 0px">
                    Rating: XX
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
                        src={Pig3} alt="One Dollar sign" />
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
