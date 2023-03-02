import React from "react";
import "../CSS/Pin_Styles.css";

const Pin = () => {

    return (
        <div>

            <input type="file" name="picture" id="picture" value=""></input>

            <div className="card">
                <div className="pin_tittle"></div>

                <div className="pin_modal">
                    <div className="modal_head">
                        <div className="save_card">Guardar</div>
                    </div>


                    <div className="modal_foot">
                        <div className="destination">
                            <div className="pint_mock_icon_container">
                                <img src="./Images/up-right-arrow.png" alt="destination" className="pint_mock_icon" />
                            </div>
                            <span>Eatery</span>
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
                    <img src="" alt="pin_image"></img>
                </div>
            </div>
        </div>
    )




}

export default Pin;