export function responseFunction(response) {
    if (response.data.status === true) {
        response.requestProcessed = true; response.requestError = false;
    }
    else {
        response.requestProcessed = false; response.requestError = true;
    }
    return response
}
