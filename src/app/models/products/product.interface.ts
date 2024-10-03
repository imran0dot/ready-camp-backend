interface IProduct {
    title: string,
    slug: string,
    category: string,
    price: number,
    salePrice: number,
    stock: number,
    tags: string[],
    brand: string,
    sku: string,
    dimensions: {
        width: number,
        height: number,
        depth: number
    },
    images: string[],
};


export default IProduct;