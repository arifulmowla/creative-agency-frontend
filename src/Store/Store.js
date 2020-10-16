const url = 'https://sleepy-everglades-05720.herokuapp.com';



// export const ServicesData = [
//     {
//         _id: 1,
//         title: 'Web & Mobile design',
//         shortDes: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
//         image: require('../images/icons/service1.png')
//     },
//     {
//         _id: 2,
//         title: 'Graphic design',
//         shortDes: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
//         image: require('../images/icons/service2.png')
//     },
//     {
//         _id: 3,
//         title: 'Web development',
//         shortDes: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
//         image: require('../images/icons/service3.png')
//     }
// ]

// export const ReviewData = [
//     {
//         id: 1,
//         name: 'Nash Patrik',
//         position: 'CEO, Manpol',
//         image: require('../images/customer-1.png'),
//         content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis explicabo optio enim dolore fugiat eaque.'
//     },
//     {
//         id: 2,
//         name: 'Miriam Barron',
//         position: 'CEO, Manpol',
//         image: require('../images/customer-2.png'),
//         content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis explicabo optio enim dolore fugiat eaque.'
//     }
//     ,
//     {
//         id: 3,
//         name: 'Bria Malone',
//         position: 'CEO, Manpol',
//         image: require('../images/customer-3.png'),
//         content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis explicabo optio enim dolore fugiat eaque.'
//     }
// ]


// export const ServicesOrderList = [
//     {
//         _id: 1,
//         image: require('../images/icons/service1.png'),
//         title: 'Web & Mobile design',
//         shortDes: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
//         status: 'Pending'
//     },
//      {
//         _id: 2,
//         image: require('../images/icons/service2.png'),
//         title: 'Graphic Design',
//         shortDes: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
//         status: 'Done'
//     }
// ]



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
    console.log(result)
    return result;
}


export const GetUserOrders = async(token) => {
    let result;
   console.log(token)
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
    console.log(result)
    return result;
}

export const PostReview = async(review, token) => {
    let result;
   
    const sendData = { review: review, token: token }
    console.log(sendData)
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
    console.log(result)
    return result;
}


export const CheckExistsPostReview = async(token) => {
    let result;
   console.log(token)
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
    console.log(result)
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
    console.log(result)
    return result;
}

export const PostService = async(service, token) => {
    let result;
   
    const sendData = { service: service, token: token }
    console.log(sendData)
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
    console.log(result)
    return result;
}

export const AddAdmin = async(admin, token) => {
    let result;
   
    const sendData = { admin: admin, token: token }
    console.log(sendData)
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
    console.log(result)
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
            console.log(data)
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
            console.log(data)
        })
        .catch(err => result = err)
    return result;
}

