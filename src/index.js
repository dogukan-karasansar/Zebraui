import React from 'react'
import styles from './styles.module.css'

export const Button = (props) => {
  return <button style={styles.Button} {...props}>{props.text}</button>
}

export const Input = (props) => {
  return <input style={styles.Input} {...props} />
}
