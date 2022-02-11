import React, { useState } from 'react'
import { ButtonGroup, MODE } from 'baseui/button-group';
import { useStyletron } from 'baseui';
import { ThemeProvider } from 'baseui';
import { themes } from '../../lib/GroupBtnOverider';






export default function PriceToggler({ handleSelect, children }) {
    const [selected, setSelected] = useState();
    const [css, theme] = useStyletron();

    const _handleSelect = (index) => {
        // Set Current State
        setSelected(index);
        // Pass State Index
        handleSelect(index)
    }


    return (
        <ThemeProvider theme={themes}>

            <ButtonGroup
                mode={MODE.radio}
                selected={selected}

                onClick={(event, index) => {
                    _handleSelect(index);
                }}

                id="buttonGroup"
            >
                {children}
                {/* <Button>
                    <Image src={Pig1} alt="One Dollar sign" />
                </Button>
                <Button>
                    <Image src={Pig2} alt="Two Dollar sign" />
                </Button>
                <Button>
                    <Image src={Pig3} alt="Three Dollar sign" />
                </Button> */}
            </ButtonGroup>
        </ThemeProvider>
    );
}