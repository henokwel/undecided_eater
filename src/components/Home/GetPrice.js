
import { Button } from 'baseui/button'
import Image from 'next/image'
import PriceToggler from '../utils/PriceToggler'
import styles from '../../../styles/Home.module.css'



import Pig1 from '../../assets/icons/pigprice1.svg'
import Pig2 from '../../assets/icons/pigprice2.svg'
import Pig3 from '../../assets/icons/pigprice3.svg'



export const GetPrice = ({ handleSelect }) => {

    return (
        <section className={styles.priceSection}>
            <h1 style={{
                fontSize: '32px',
                fontWeight: '600',
                marginBottom: '15px',
                lineHeight: '42px',
                // color: "white"
            }}>
                Price <br />
                Range
            </h1>

            <div style={{ display: "flex" }}>
                <PriceToggler handleSelect={handleSelect}  >
                    <Button>
                        <Image src={Pig1} alt="One Dollar sign" />
                    </Button>
                    <Button>
                        <Image src={Pig2} alt="Two Dollar sign" />
                    </Button>
                    <Button>
                        <Image src={Pig3} alt="Three Dollar sign" />
                    </Button>
                </PriceToggler>
            </div>
        </section>
    )
}
