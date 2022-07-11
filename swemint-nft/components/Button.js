import { useState } from "react";
import styles from "../styles/Button.module.css";
import { useMoralis } from "react-moralis";
 
export const Button = ({text}) => {
const [value, setValue] = useState(text);
const {authenticate, authError} = useMoralis();
    return ( 
        <>
        <button style={{cursor:"pointer"}} className={styles.btn} onClick={authenticate}>{value}</ button>
        {authError && <p className={styles.error}>Error - {authError.message}</p>}
        </>
     );
}
 
export default Button;