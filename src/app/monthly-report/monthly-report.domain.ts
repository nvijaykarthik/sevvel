export class MonthlyReportSummary{
    maintenanceCollection_Month:number=0;
    expenditure_Month:number=0;
    availableBalance_Month:number=0;
    maintenanceCollection_Year:number=0;
    expenditure_Year:number=0;
    availableBalance_Year:number=0;
    balance:any;
}

export class MonthlyReport{
    flatNo:string="";
    date:Date;
    amount:number=0;
    comment:string="";
    constructor(flatNo:string){
        this.flatNo=flatNo;
    }
}
