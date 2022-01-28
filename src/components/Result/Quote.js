import React from 'react';

import {
    H5,
    Paragraph3,
    Paragraph4,
} from 'baseui/typography';
import { useStyletron } from 'styletron-react';


export const Quote = ({themes}) => {
    const [css] = useStyletron();
    return (

        <div
            className={css({
                display: 'flex',
                flexDirection: "column",
                alignItems: "flex-end",
                color: themes.colors.primaryB
            })}
        >
            {/* <p
        style={{
            fontWeight: "600",
            fontSize: "22px",
            lineHeight: "29px",
            margin: "5px 10px 1px 0",
            letterSpacing: "1.7px"
        }}
    >indecision</p> */}
            {/* 
    <p
        style={{
            fontStyle: "italic",
            fontSize: "13px",
            lineHeight: "14px",
            margin: "1px 10px 1px 0"
        }}
    >noun</p> */}
            <H5
                margin="5px 10px 1px 0"
            >
                indecision
            </H5>

            <Paragraph4
                margin="1px 10px 1px 0px"
            >
                noun
            </Paragraph4>
            <Paragraph3
                margin="1px 10px 1px 0px"
            >
                the inability to make a decision quickly
            </Paragraph3>
            {/* 
    <p
        style={{
            fontSize: "13px",
            lineHeight: "26px",
            margin: "1px 10px 1px 0"
        }}
    >the inability to make a decision quickly</p> */}

        </div>


    )
};
