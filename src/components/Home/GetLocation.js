
import Image from 'next/image'
import { Button, SIZE } from 'baseui/button'
import { Label1 } from 'baseui/typography'
import styles from '../../../styles/Home.module.css'

import LocationIcon from '../../assets/icons/location--filled.svg'
import ThumbUp from '../../assets/icons/thumbs-up--filled 1.svg'
import { useStyletron } from 'baseui'


export const GetLocation = ({ locationStatus, setLocationRequirePromt, theme }) => {
    const [css, themes] = useStyletron();

    return (
        <section className={styles.locationSection} >

            <h1 style={{
                fontSize: '32px',
                fontWeight: '600',
                marginBottom: '15px',
                lineHeight: '42px',
                // color: "white"
            }}>
                Your   <br />
                Current   <br />
                Location    <br />
            </h1>

            <div style={{ display: "flex" }}>

                {
                    locationStatus.lat === null ?
                        <>
                            <Button
                                onClick={() => setLocationRequirePromt(true)}
                                className={css({
                                    textAlign: themes.sizing.scale400,
                                    fontWeight: "600",
                                    color: "#0054A9"
                                })}

                                size={SIZE.large}>
                                <Label1
                                    color={themes.colors.accent500}
                                    // font={themes.typography.LabelSmall}
                                    $style={{ fontWeight: 600 }}
                                >

                                    Get Location
                                </Label1>
                            </Button>

                            <span style={{ marginRight: "15px" }} />
                            <Image
                                src={LocationIcon} alt="Location Pin Icon" />
                        </>
                        :
                        <Image src={ThumbUp} alt="Thumb up  Icon" />

                }

            </div>
        </section>
    )
}
