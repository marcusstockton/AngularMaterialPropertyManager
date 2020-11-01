export class Tenant_CreateDto {
        
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
    // PROFILE
    public profile: Blob = null;
}