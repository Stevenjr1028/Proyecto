import React, { useState } from 'react'
import "../CSS/Modal_Style.css"
import upload_img from '../Helpers/UpImage'
import check_size from '../Helpers/check_size'







function Modal() {
    const [pinDetails, setPinDetails] = useState({
        author: "",
        board: "",
        decription: "",
        destination: "",
        img_blob: "",
        pin_size: "",
    })
    const [showLabel, setShowLabel] = useState(true);
    const [showModalPin, setShowModalPin] = useState(false);
    return (
        <div className="add_pin_modal">
            <div className="add_pin_container">
                <div className="side" id="left_side">
                    <div className="section1">
                        <div className="pint_mock_icon_container">
                            <img src="./Images/options.png" alt="edit" className="pint_mock_icon" />
                        </div>

                    </div>
                    <div className="section2">
                        <label htmlFor="upload_img" id="upload_img_label"
                            style={{
                                display: showLabel ? "block" : "none"

                            }}
                        >

                            <div className="upload_img_container">
                                <div id="dotted_border">
                                    <div className="pint_mock_icon_container">
                                        <img src="./Images/up-arrow.png" alt="edit" className="pint_mock_icon" />
                                    </div>
                                    <div>Haz clic para subir</div>
                                    <div>Recomendación: Usa archivos .jpg de alta calidad de menos de 20 MB </div>
                                </div>
                            </div>
                            <input onChange={event => upload_img(event, pinDetails, setPinDetails, setShowLabel,setShowModalPin)} type="file" name="upload_img" id="upload_img" value="" />
                        </label>

                        <div className="modals_pin"
                            style={{
                                display: showModalPin ? "block" : "none"
                            }}
                        >
                            <div className="pin_image">
                                <img onLoad= {check_size} src={pinDetails.img_blob} alt="pin_image" />
                            </div>
                        </div>

                    </div>
                    <div className="section3">
                        <div className='save_from_site'>Guarda desde el sitio</div>

                    </div>

                </div>
                <div className="side" id="right_side">
                    <div className="section1">
                        <div className="select_size">
                            <select defaultValue="Seleccionar" name="pin_size" id="pin_size">
                                <option value="">Seleccionar</option>
                                <option value="small">Pequeño</option>
                                <option value="medium">Medio</option>
                                <option value="large">Grande</option>
                            </select>
                            <div className="save_pin">Guardar</div>
                        </div>


                    </div>
                    <div className="section2">
                        <input placeholder="Añade un título" type="text" className="new_pin_input" id="pin_tittle" />
                        <input placeholder="Explica en que consiste tu Pin" type="text" className="new_pin_input" id="pin_description" />
                        <input placeholder="Añade un enlace de destino" type="text" className="new_pin_input" id="pin_destination" />



                    </div>
                    <div className="section3">

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modal;
