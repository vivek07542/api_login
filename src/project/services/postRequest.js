import axios from "axios";

export function postRequest(url, headerToken, subscriptionKey,body) {
    const config = {
      headers: {
        Authorization: `Bearer ${headerToken}`,
        "Ocp-Apim-Subscription-Key": subscriptionKey,
        "Content-type": "application/json",
      },
    };
    const data = (axios.post(url,body,config))
  return data;
}