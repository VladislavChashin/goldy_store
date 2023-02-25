export interface ICategories{
    id: number,
    image: any,
    p: string,
}

export interface IProduct{
    id: number,
    images: any,
    sale: boolean,
    price: number,
    prevusePrise: string,
    numSale: string,

}

export interface IArticle{
    id: number,
    image: any,
    date: string,
    page: string,
}