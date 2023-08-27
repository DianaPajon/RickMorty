export interface ApiResponse<T> {
    info:{
        count:number,
        pages:Number,
        next:string,
        prev:string
    };
    results:T[];
}
