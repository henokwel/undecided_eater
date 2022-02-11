import { createTheme } from "baseui";

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


export const themes = createTheme(primitives, overrides);
