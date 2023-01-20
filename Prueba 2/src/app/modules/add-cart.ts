export interface TypeProducts  {
  id: number;
  quantity: number;
}

export interface AddCart {
  userId: number;
  products: Array<TypeProducts>;
}
