import Modal from "../Components/Modal";
import React from "react";

function save_pin(pinDetails) {
    const user_data = {
        ...pinDetails,
        author: "Jack",
        board: "default",
        title: document.querySelector("#pin_tittle").value,
        description: document.querySelector("#pin_description").value,
        destination: document.querySelector("#pin_destination").value,
        pin_size: document.querySelector("#pin_size").value,

    }

    console.log(user_data);


}

export default save_pin;