export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
}

// Si en el futuro quieres añadir categorías, puedes definir una interfaz para ellas
export interface Category {
    id: number;
    name: string;
}

// En caso de que necesites definir una respuesta más general que incluya varios productos
export interface ProductsResponse {
    products: Product[];
}