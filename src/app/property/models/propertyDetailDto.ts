import { Tenant_DetailDto } from "../../models/tenantDetailDto";
import { AddressDetailsDto } from '../../models/addressDetailsDto';
export class PropertyDetailDto {
    public id: string;
    public createdDateTime: Date;
    public updatedDateTime: Date;
    public address: AddressDetailsDto;
    public purchaseDate: Date;
    public purchasePrice: number;
    public propertyValue: number;
    public description: string;
    public noOfBeds: number;
    public rentalPrice: number;
    public tenants: Tenant_DetailDto[];
}
