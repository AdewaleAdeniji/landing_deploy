export const httpGet = (url) => {
    return  fetch(url, {
        method: 'get'
    });
};
export const httpGetWithBody = (url,body={}) => {
    return  fetch(url, {
        method: 'get',
        body: JSON.stringify(body)
    });
};
export const httpPost = (url, body = {}) => {
    return  fetch(url, {
        method: 'post',
        body: JSON.stringify(body)
    });
};