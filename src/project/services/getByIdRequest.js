import axios from "axios";

export function getByIdRequest(url, headerToken, subscriptionKey) {
    const config = {
        headers: { Authorization: `Bearer ${headerToken}`,"Ocp-Apim-Subscription-Key": subscriptionKey  },
    };
    const data = (axios.get(url, config))
    return data
}