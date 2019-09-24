import React from 'react'
import styles from "./PlaceHolder.module.css"

const PlaceHolder = () => {
  return(
    <div className={styles.bk}>
      <img src={process.env.PUBLIC_URL + `../../images/bk_logo.png`} alt="bk-logo" />
      <h2>Loading...</h2>
    </div>
  )
}

export default PlaceHolder