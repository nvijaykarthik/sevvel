export class Maintenance{
    flatNumber:string="";
    date:Date;
    amount:number;
    comment:string="";
    month:number;
    tenure:number;
    year:number;
    details:MaintenanceDetail[];
}

export class Tenure{
    tenure:number=3;
    year:number=2017;
    month:number=1;
    amount:number=750
}

export class MaintenanceDetail{
    flatNumber:string="";
    month:number;
    year:number;
    amount:number;
    comment:string="";
    status:string;
    createdDate:Date;
    updatedDate:Date;
}

