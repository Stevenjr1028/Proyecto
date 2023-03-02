import React from "react";

function check_size(event){
    const image= event.target;

    image.classList.add("pin_max_width");

    if(
        image.getBoundingClientRect().width < image.parentElement.getBoundingClientRect().width ||
        image.getBoundingClientRect().height < image.parentElement.getBoundingClientRect().height
    ) {
        image.classList.remove("pin_max_widht");
        image.classList.add("pin_max_height");
    }

    image.style.opacity=1;
}

export default check_size;