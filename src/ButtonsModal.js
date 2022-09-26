import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonsModal = props => {
    if(!props.show)
    {
        return null;
    }
  return (
    <div className="modal">
        <div className="modal-content">
            <Button></Button>
            <Button></Button>
        </div>
    </div>
  )
}

export default ButtonsModal