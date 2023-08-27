export interface Character {
    id:number;
    name:string;
    status:string;
    type:string;
    gender:string;
    origin:string;
    location:Location[];
    image:string;
    episode:string[];
    url:string;
    created:Date;
}
