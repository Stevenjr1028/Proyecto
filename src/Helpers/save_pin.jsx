import Modal from "../Components/Modal";
import React from "react";



function save_pin(pinDetails, add_pin) {
    const user_data = {
        ...pinDetails,
        author: "Jack",
        board: "default",
        title: document.querySelector("#pin_tittle").value,
        description: document.querySelector("#pin_description").value,
        destination: document.querySelector("#pin_destination").value,
        pin_size: document.querySelector("#pin_size").value,

    }

    add_pin(user_data);


}

export default save_pin;