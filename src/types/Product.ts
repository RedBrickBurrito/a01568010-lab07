import Sku from "./Sku";
import Comment from "./Comments";

export default interface Product {
  id?: number;
  name: string;
  description: string;
  childSkus: [Sku];
  comments: [Comment];
}
