import { AddressDetailsDto } from './addressDetailsDto';
import { Tenant_DetailDto } from '../tenant/models/tenantDetailDto';

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
