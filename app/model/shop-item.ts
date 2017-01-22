export class ShopItem {
    constructor(
        public id:number,
        public images: Array<String>,
        public description: string,
        public price: number,
        public movie: number,
        public showcase: boolean
    ) {}
}