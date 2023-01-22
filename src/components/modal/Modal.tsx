import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Modal = props => {
  // const [active, setActive] = useState(false);


  return (
    <div id={props.id} className={`modal ${props.isActive ? 'active' : ''}`}>
      {props.children}
    </div>
  )
}

Modal.propTypes = {
  isActive: PropTypes.bool,
  id: PropTypes.string,
}

export default Modal