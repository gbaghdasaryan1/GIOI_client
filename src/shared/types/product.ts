export type ProductType = {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    discount: number;
    isNew: boolean;
    bestSeller: boolean;
    quantity: number;
}