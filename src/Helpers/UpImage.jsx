import React from "react";

function upload_img(event, pinDetails, setPinDetails,setShowLabel,setShowModalPin){
    if (event.target.files && event.target.files[0]){
        if (/image\/*/.test(event.target.files[0].type)){
            const reader = new FileReader();

            reader.onload=function(){
                setPinDetails({
                    ...pinDetails,img_blob: reader.result
                });

                setShowLabel(false);
                setShowModalPin(true);
            }

            reader.readAsDataURL(event.target.files[0]);
        }
    }
}
export default upload_img;
