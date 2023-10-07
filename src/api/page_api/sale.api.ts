import instance from "../root.instance"

export const getAllSale = ()=>{
    const url = "product_sale"
    return instance.get(url)
}

export const addDataSale = (data : any)=>{
    const url = "product_sale"
    return instance.post(url,data)
}