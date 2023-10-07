import instance from "../root.instance"

export const getAllgoiy = ()=>{
    const url = "product_goiy"
    return instance.get(url)
}

export const addDatagoiy = ()=>{
    const url = "product_goiy"
    return instance.post(url)
}