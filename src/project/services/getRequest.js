import axios from "axios";

export function getRequest(url, headerToken, subscriptionKey) {
    console.log(headerToken)
    const config = {
        headers: { Authorization: `Bearer ${headerToken}`,"Ocp-Apim-Subscription-Key": subscriptionKey  },
    };
    const data = (axios.get(url, config))
    return data
}