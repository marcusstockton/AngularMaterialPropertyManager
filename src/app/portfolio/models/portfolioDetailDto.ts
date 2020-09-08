import { UserDto } from '../../models/userDto';
import { PropertyDetailDto } from '../../property/models/propertyDetailDto';

export class PortfolioDetailDto {
    public id: string;
    public createdDateTime: Date;
    public updatedDateTime: Date;
    public name: string;
    public owner: UserDto;
    public properties: PropertyDetailDto[];
}