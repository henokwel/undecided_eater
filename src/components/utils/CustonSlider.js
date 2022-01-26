import * as React from 'react';
import { Slider } from 'baseui/slider';
import { useStyletron } from 'baseui';

const mToKm = (value) => `${(value / 1000).toFixed(1)}km`;

function CustomTicks() {
    const [value, setValue] = React.useState([500]);
    const [css, theme] = useStyletron();
    return (
        <Slider
            value={value}
            min={500}
            max={3000}
            step={100}
            onChange={params => {
                if (params.value) {
                    setValue(params.value);
                } else {
                    setValue([]);
                }
            }}
            overrides={{
                Root: {
                    style: {
                        marginTop: '24px',
                        maxWidth:'600px'
                    },
                },
                InnerThumb: () => null,
                ThumbValue: ({ $value }) => (
                    <div
                        className={css({
                            position: 'absolute',
                            top: `-${theme.sizing.scale800}`,
                            ...theme.typography.font200,
                            backgroundColor: 'transparent',
                        })}
                    >
                        {$value}m
                    </div>
                ),
                TickBar: ({ $min, $max }) => (
                    <div
                        className={css({
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingRight: theme.sizing.scale600,
                            paddingLeft: theme.sizing.scale600,
                            paddingBottom: theme.sizing.scale400,
                            color:theme.colors.primary
                        })}
                    >
                        <div>{mToKm($min)}</div>
                        {/* <div>{mToKm(500)}</div> */}
                        <div>{mToKm(1000)}</div>
                        {/* <div>{mToKm(1500)}</div> */}
                        <div>{mToKm(2000)}</div>
                        <div>{mToKm($max)}</div>
                    </div>
                ),
            }}
        />
    );
}

export default CustomTicks;