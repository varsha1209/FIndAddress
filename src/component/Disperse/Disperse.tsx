import styles from './Disperse.module.css';
import errorIcon from '../../assets/error.svg';
import { useDisperse } from './useDisperse';


const Disperse = () => {

    const {
        value,
        errorMessage,
        duplicateKeysPresent,
        setValue,
        onSubmitHandler,
        keepFirstOneHandler,
        combineBalancesHandler
    } = useDisperse();

    return (
        <div className={styles.main_container}>
            <div className={styles.input_container}>
                <div className={styles.text}>Addresses with Amounts</div>
                <textarea className={styles.input_box} spellCheck={false} value={value} onChange={(e) => setValue(e.target.value)} />
                <div className={styles.text}>Seperated by ',' or '' or '='</div>
            </div>
            <div className={styles.error_container}>
                {duplicateKeysPresent && <div className={styles.option}>
                    <div>Duplicated</div>
                    <div className={styles.option_button}>
                        <div className={styles.action} onClick={keepFirstOneHandler}>Keep the first one </div>
                        <div>|</div>
                        <div className={styles.action} onClick={combineBalancesHandler}>Combine Balance</div>
                    </div>
                </div>}
                {errorMessage.length > 0 &&
                    <div className={styles.error_message}>
                        <img className={styles.error_icon} src={errorIcon} alt="error" />
                        <div className={styles.error_message}>{errorMessage}</div>
                    </div>
                }
            </div>
            <div className={styles.button_container}>
                <button className={styles.next_btn} onClick={onSubmitHandler}>Next</button>
            </div>
        </div>
    )
}

export default Disperse