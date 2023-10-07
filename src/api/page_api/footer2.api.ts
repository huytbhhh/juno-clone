import instance from "../root.instance"

export const getAllDataFooter2 = ()=>{
    const url = "product_footer2"
    return instance.get(url)
}

export const addDataFooter2 = ()=>{
    const url = "product_footer2"
    return instance.post(url)
}