
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
export const createVehicle = (VIN) => {
    const vehicle = {VIN: VIN}
    console.log(VIN);
    return(
        fetch('api/vehicle', {
            method: "POST",
            headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
            },
            body: JSON.stringify(vehicle)
        })
        .then(res => res.json())

    )
}

export const incrementViews = (VIN) => {
    return(
        fetch(`api/vehicle/${VIN}`, {
            method: "GET",
        }).then(res => {
            if(res.ok) {
                return res.json();
            } else {
                throw new Error("Not Found");
            }
        })
        .catch(err => createVehicle(VIN))
    )
}