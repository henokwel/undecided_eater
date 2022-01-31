import * as React from 'react';
import { Button } from 'baseui/button';
import { ButtonGroup, MODE } from 'baseui/button-group';
import { useStyletron } from 'baseui';
import { ThemeProvider, LightTheme, DarkTheme, createTheme } from 'baseui';

import Pig1 from '../../assets/icons/pigprice1.svg'
import Pig2 from '../../assets/icons/pigprice2.svg'
import Pig3 from '../../assets/icons/pigprice3.svg'
import Image from 'next/image';

const primitives = {
    accent: '#0075EB', // hot pink
    accent50: '#FDEDFC',
    accent100: '#296FB5',
    accent200: '#0054A9',
    accent300: '#F45AEA',
    accent400: '#F127E4',
    accent500: '#B71DAD',
    accent600: '#901788',
    accent700: '#600F5B',
};
const overrides = {
    colors: {
        buttonSecondaryFill: primitives.accent100,
        buttonSecondaryText: primitives.accent,
        buttonSecondaryHover: primitives.accent200,
        buttonSecondaryActive: primitives.accent300,
        buttonSecondarySelectedFill: primitives.accent200,
        buttonSecondarySelectedText: primitives.accent,
        buttonSecondarySpinnerForeground: primitives.accent700,
        buttonSecondarySpinnerBackground: primitives.accent300,
    },
};
const themes = createTheme(primitives, overrides);


export default function PriceToggler({ handleSelect }) {
    const [selected, setSelected] = React.useState();
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
                <Button>
                    <Image src={Pig1} alt="One Dollar sign" />
                </Button>
                <Button>
                    <Image src={Pig2} alt="Two Dollar sign" />
                </Button>
                <Button>
                    <Image src={Pig3} alt="Three Dollar sign" />
                </Button>
            </ButtonGroup>
        </ThemeProvider>
    );
}