const url = "https://creative-agency-api.herokuapp.com/";


export const PostOrder = async(data, token) => {
    let result;
   
    const sendData = { data: data, token: token }
    await fetch(`${url}/add-order/`, {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json',
    },
        body: JSON.stringify(sendData)
    })
        .then(res=> res.json())
        .then(data => {
            result = data;
        })
        .catch(err => result = err)
    return result;
}


export const GetUserOrders = async(token) => {
    let result;
    await fetch(`${url}/get-orders/`, {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json',
    },
        body: JSON.stringify({token: token})
    })
        .then(res=> res.json())
        .then(data => {
            result = data;
        })
        .catch(err => result = err)
    return result;
}

export const PostReview = async(review, token) => {
    let result;
   
    const sendData = { review: review, token: token }
    await fetch(`${url}/add-review/`, {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json',
    },
        body: JSON.stringify(sendData)
    })
        .then(res=> res.json())
        .then(data => {
            result = data;
        })
        .catch(err => result = err)
    return result;
}


export const CheckExistsPostReview = async(token) => {
    let result;
    await fetch(`${url}/get-review/`, {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json',
    },
        body: JSON.stringify({token: token})
    })
        .then(res=> res.json())
        .then(data => {
            result = data;
        })
        .catch(err => result = err)
    return result;
}


export const GetAllOrders = async(token) => {
    let result;
    await fetch(`${url}/get-all-orders/`, {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json',
    },
        body: JSON.stringify({token: token})
    })
        .then(res=> res.json())
        .then(data => {
            result = data;
        })
        .catch(err => result = err)

    return result;
}

export const PostService = async(service, token) => {
    let result;
   
    const sendData = { service: service, token: token }
 
    await fetch(`${url}/add-service/`, {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json',
    },
        body: JSON.stringify(sendData)
    })
        .then(res=> res.json())
        .then(data => {
            result = data;
        })
        .catch(err => result = err)

    return result;
}

export const AddAdmin = async(admin, token) => {
    let result;
   
    const sendData = { admin: admin, token: token }
    console.log(sendData)
    await fetch(`${url}/add-admin/`, {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json',
    },
        body: JSON.stringify(sendData)
    })
        .then(res=> res.json())
        .then(data => {
            result = data;
        })
        .catch(err => result = err)

    return result;
}


// frontend home page

export const GetAllServices = async() => {
    let result;
   
    await fetch(`${url}/get-services/`)
        .then(res=> res.json())
        .then(data => {
            result = data;
        })
        .catch(err => result = err)
    return result;
}

export const GetAllFeedback = async() => {
    let result;
   
    await fetch(`${url}/get-feedback/`)
        .then(res=> res.json())
        .then(data => {
            result = data;
        })
        .catch(err => result = err)
    return result;
}


export const isAdmin = async (email) => {
    let result;
   
    await fetch(`${url}/admin/`, {
           method: "POST",
        headers: {
            'Content-Type' : 'application/json',
    },
        body: JSON.stringify({ email: email })
    })
        .then(res=> res.json())
        .then(data => {
            result = data;

        })
        .catch(err => result = err)
    return result;
}

export const ChangeStatus = async (data, token) => {
    let result;
   
    await fetch(`${url}/change-status/`, {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json',
    },
        body: JSON.stringify({ data: data, token, token })
    })
        .then(res=> res.json())
        .then(data => {
            result = data;
        })
        .catch(err => result = err)
    return result;
}

