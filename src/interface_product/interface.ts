export default interface Iproduct {
    id: number;
    img: string;
    price: string;
    p: string;
  }

 type Idata = {
  id : string
  name : string
 }

 type Inumber = {
  id : string
  name : string
 }

 type Istring = Idata | Inumber