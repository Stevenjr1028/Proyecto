import React, { useState } from "react";
import "../CSS/Pin_Styles.css";
import check_size from "../Helpers/check_size";






function Pin(props) {
    //const [pinImage, setPinImage] = useState();


    return (
        /*   <div>
  
               <input onChange={event => upload_img(event, setPinImage)} type="file" name="picture" id="picture" value=""></input>
   
              <div className={`card card_${props.pinDetails.pin_size}`}> */
        <div className={`card card_${props.pinDetails.pin_size}`}>
            <div className="pin_tittle">{props.pinDetails.title}</div>

            <div className="pin_modal">
                <div className="modal_head">
                    <div className="save_card">Guardar</div>
                </div>


                <div className="modal_foot">
                    <div className="destination">
                        <div className="pint_mock_icon_container">
                            <img src="./Images/up-right-arrow.png" alt="destination" className="pint_mock_icon" />
                        </div>
                        <span>{props.pinDetails.destination}</span>
                    </div>

                    <div className="pint_mock_icon_container">
                        <img src="./Images/share.png" alt="send" className="pint_mock_icon" />
                    </div>

                    <div className="pint_mock_icon_container">
                        <img src="./Images/options.png" alt="edit" className="pint_mock_icon" />
                    </div>
                </div>

            </div>



            <div className="pin_image">
                <img onLoad={check_size} src={props.pinDetails.img_blob} alt="pin_image" />
            </div>
        </div>

    );




}

export default Pin;