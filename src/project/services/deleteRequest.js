import axios from "axios";

export function deleteRequest(url, headerToken, subscriptionKey) {
    const config = {
        headers: { Authorization: `Bearer ${headerToken}`,"Ocp-Apim-Subscription-Key": subscriptionKey  },
    };
    const data = (axios.delete(url, config))
    return data
}