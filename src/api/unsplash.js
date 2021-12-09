import axios from "axios";

export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID RzOP5yu9y561XkAR24V3Hsd3f8QC2Ys9hhwGC9nnl4E"
    }
})