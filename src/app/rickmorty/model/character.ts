import { Location } from "./location";

export interface Character {
    id:number;
    name:string;
    status:string;
    type:string;
    gender:string;
    origin:Location|undefined;
    location:Location|undefined;
    image:string;
    episode:string[];
    url:string;
    created:Date;
    species:string;
}
