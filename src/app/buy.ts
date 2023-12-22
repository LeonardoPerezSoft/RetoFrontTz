import { Product } from "./product";
import { ProductQuantity } from "./product-quantity";

export class Buy {

    id:number;
    dni:string;
    date:String;
    idType:string;
    clientName:string;
    products: ProductQuantity[];


}
