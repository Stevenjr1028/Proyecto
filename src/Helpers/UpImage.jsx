import React from "react";

function upload_img(event, setPinImage){
    if (event.target.files && event.target.files[0]){
        if (/image\/*/.test(event.target.files[0].type)){
            const reader = new FileReader();

            reader.onload=function(){
                setPinImage(reader.result);
            }

            reader.readAsDataURL(event.target.files[0]);
        }
    }
}
export default upload_img;
