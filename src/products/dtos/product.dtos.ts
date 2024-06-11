import { IsNumber, IsString , IsUrl, IsNotEmpty, IsPositive} from 'class-validator';
import { PartialType } from '@nestjs/swagger';
export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly price: number;
    @IsString()
    @IsNotEmpty()
    readonly description: string;
    @IsUrl()
    @IsNotEmpty()
    readonly image: string;
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly stock: number;
}
// export class UpdateProductDto {
//     readonly id?: number;
//     @IsString()
//     readonly name?: string;
//     @IsNumber()
//     readonly price?: number;
//     @IsString()
//     readonly description?: string;
//     @IsUrl()
//     readonly image?: string;
//     @IsNumber()
//     readonly stock?: number;
// }
export class UpdateProductDto extends PartialType(CreateProductDto){}
