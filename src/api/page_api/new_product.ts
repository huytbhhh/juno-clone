import instance from "../root.instance"

export const getAllNewProduct = ()=>{
    const url = "product_new"
    return instance.get(url)
}

export const addDataNewProduct = (data : any)=>{
    const url = "product_new"
    return instance.post(url,data)
}