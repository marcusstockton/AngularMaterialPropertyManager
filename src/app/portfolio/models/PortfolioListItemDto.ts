import { UserDto } from "../../models/userDto";

export class PortfolioListItemDto {
    public id: string;
    public createdDateTime: Date;
    public updatedDateTime: Date;
    public name: string;
    public owner: UserDto;
    public propertyCount: number;
}