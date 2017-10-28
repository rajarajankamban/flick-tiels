export class Photo {
    id : string;
    owner :string;
    secret : string;
    farm: number;
    title:  string;
    ispublic : number;
    isfriend : number;
    isfamily : number;
    server : string;
    imageurlN ?: string;
    imageurlO ?:string;
    rating ?: number;
    ratedby ?: string;
    reason ?: string;
}