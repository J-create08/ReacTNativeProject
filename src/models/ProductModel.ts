import ISize from "./SizeModel";

export default interface IProduct {
    description: string;
    imageUrl: string;
    size: ISize;
    title: string;
}