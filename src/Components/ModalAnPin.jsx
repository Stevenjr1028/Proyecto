import React from 'react'
import "../CSS/Modal_and_pin.css"
import Pin from './Pin'
import Modal from './Modal'

class ModalAnPin extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pins: [],
            show_modal: false


        }
    }

    render() {


        return (
            <div>
                <div className='navigation_bar'>
                    <div onClick={()=> this.setState({show_modal: true})}className="pint_mock_icon_container add_pin">
                        <img src="./Images/add.png" alt="add_pin" className="pint_mock_icon" />
                    </div>
                </div>

                <div className="pin_container">
                    {this.state.pins}

                </div>
                <div className="add_pin_modal_container">
                    {
                        this.state.show_modal ?
                        <Modal/> : null
                    }
                    
                    
                </div>
            </div>


        )
    }
}

export default ModalAnPin;