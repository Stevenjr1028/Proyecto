import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID dldJMY5CasnmkP2xaVerdtWdjLmlyKhXP8_n7xgHMWU"
    }
})

