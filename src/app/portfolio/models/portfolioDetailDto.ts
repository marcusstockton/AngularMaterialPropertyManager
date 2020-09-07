import { UserDto } from "../../models/userDto";
import { PropertyDetailDto } from "../../models/propertyDetailDto";

export class PortfolioDetailDto {
        
    // ID
    public id: string = "00000000-0000-0000-0000-000000000000";
    // CREATEDDATETIME
    public createdDateTime: Date = new Date(0);
    // UPDATEDDATETIME
    public updatedDateTime: Date = null;
    // NAME
    public name: string = null;
    // OWNER
    public owner: UserDto = null;
    // PROPERTIES
    public properties: PropertyDetailDto[] = [];
}