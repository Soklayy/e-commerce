export interface ProductModel {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    description: string;
    summary: string;
    price: string;
    discount: number;
    quantity: number;
    category: Category;
    brand: Brand;
    images: {
        id: string;
        url: string;
    }[];
}

export interface Category {
    id: string;
    name: string;
    coverUrl: string;
}

export interface Brand {
    id: string;
    name: string;
    logoUrl: string;
}