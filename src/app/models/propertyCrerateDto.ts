export class PropertyCreateDto {
        
    // ADDRESSLINE1
    public addressLine1: string = null;
    // ADDRESSLINE2
    public addressLine2: string = null;
    // ADDRESSLINE3
    public addressLine3: string = null;
    // TOWN
    public town: string = null;
    // CITY
    public city: string = null;
    // POSTCODE
    public postcode: string = null;
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
}