import { Tenant_DetailDto } from "../../models/tenantDetailDto";

export class PropertyDetailDto {
        
    // ID
    public id: string = "00000000-0000-0000-0000-000000000000";
    // CREATEDDATETIME
    public createdDateTime: Date = new Date(0);
    // UPDATEDDATETIME
    public updatedDateTime: Date = null;
    // ADDRESS
    //public address: Address = null;
    // PURCHASEDATE
    public purchaseDate: Date = new Date(0);
    // PURCHASEPRICE
    public purchasePrice: number = 0;
    // PROPERTYVALUE
    public propertyValue: number = 0;
    // DESCRIPTION
    public description: string = null;
    // NOOFBEDS
    public noOfBeds: number = 0;
    // RENTALPRICE
    public rentalPrice: number = 0;
    // TENANTS
    public tenants: Tenant_DetailDto[] = [];
}