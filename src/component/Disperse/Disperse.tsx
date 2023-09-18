import styles from './Disperse.module.css';
const Disperse = () => {

    return (
        <div className={styles.main_container}>
            <div className={styles.input_container}>
                <div className={styles.text}>Addresses with Amounts</div>
                <textarea className={styles.input_box} spellCheck={false} value={"hello"} />
                <div className={styles.text}>Seperated by ',' or '' or '='</div>
            </div>
            <div className={styles.button_container}>
                <button className={styles.next_btn}>Next</button>
            </div>
        </div>
    )
}

export default Disperse