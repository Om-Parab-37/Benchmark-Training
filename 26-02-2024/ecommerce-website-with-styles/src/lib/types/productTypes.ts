export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
    rating?: { rate: number; coutn: number };
}
