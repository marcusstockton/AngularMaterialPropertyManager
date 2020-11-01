export class Tenant_DetailDto {
        
    // ID
    public id: string = "00000000-0000-0000-0000-000000000000";
    // CREATEDDATETIME
    public createdDateTime: Date = new Date(0);
    // UPDATEDDATETIME
    public updatedDateTime: Date = null;
    // ISACTIVE
    public isActive: boolean = false;
    // TITLE
    public title: string = null;
    // FIRSTNAME
    public firstName: string = null;
    // LASTNAME
    public lastName: string = null;
    // CONTACTNUMBER
    public contactNumber: string = null;
    // EMAILADDRESS
    public emailAddress: string = null;
    // TENANCYSTARTDATE
    public tenancyStartDate: Date = new Date(0);
    // TENANCYENDDATE
    public tenancyEndDate: Date = null;
    // PROFESSION
    public profession: string = null;
    // NOTES
    //public notes: Note[] = [];
    // IMAGE
    public image: string = null;
}