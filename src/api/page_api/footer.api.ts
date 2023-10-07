import Iproduct from "../../interface_product/interface"
import instance from "../root.instance"

export const getAllDataFooter = ()=>{
    const url = "product_footer"
    return instance.get<Iproduct[]>(url)
}

export const addDataFooter = ()=>{
    const url = "product_footer"
    return instance.post(url)
}