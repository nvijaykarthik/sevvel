import { environment } from "../environments/environment";

const URLS={
    local:"http://localhost:3000",
    prod:""
}

export class Urls{
    public static getDomain(){
        if(environment.production){
            return URLS.prod;
        }
        return URLS.local; 
    }
}

export const APIURLS={
    flats:"/api/flats",
    maintenance:"/api/maintenance",
    expence:"/api/expence",
    totalCash:"/api/totalCash"
}