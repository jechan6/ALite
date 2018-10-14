export const searchApi = (min,max) => {
    let url = `https://qa878qmgjk.execute-api.us-east-1.amazonaws.com/dev?page=1&price_min=${min}&price_max=${max}`;

    return(
        fetch(url, {
            method: "GET",
            headers: {
                "x-api-key": "cPvW4cvlX73o7WeloOBzeWfvrb4Kl12uw0olDp90"
            }
        }).then(res => res.json())
    );
}