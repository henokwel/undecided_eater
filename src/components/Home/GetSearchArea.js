
import SearchAreaRange from '../utils/SearchAreaRange'
import styles from '../../../styles/Home.module.css'



export const GetSearchArea = ({handleSelect}) => {
    return (
        <section className={styles.searchAreaSection}>
            <h1 style={{
                fontSize: '32px',
                fontWeight: '600',
                marginBottom: '15px',
                lineHeight: '42px',
                // color: "white"
            }}>
                Search   <br />
                Area   <br />
            </h1>

            <div style={{ display: "flex" }}>
                <SearchAreaRange handleSelect={handleSelect} />
            </div>
        </section>

    )
}
