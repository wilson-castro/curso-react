/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './Button.css'

export default props => {
  let classes = 'button '
  classes += props.operation ? 'operation' : ''
  classes += props.double ? 'double' : ''
  classes += props.triple ? 'triple ' : ''
  return (
    <button
      onClick={event => props.click && props.click(props.label)}
      className={classes}>
      {props.label}
    </button>

  )

}