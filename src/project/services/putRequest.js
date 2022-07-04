import axios from "axios";

export function putRequest(url, headerToken, subscriptionKey,body) {
    const config = {
        headers: { Authorization: `Bearer ${headerToken}`,"Ocp-Apim-Subscription-Key": subscriptionKey  },
    };
    const data = (axios.put(url,body, config))
    return data
}