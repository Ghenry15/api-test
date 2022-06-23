import { IsNotEmpty, IsString, IsNumber, IsBoolean, MinLength } from "class-validator";

export class TaskDTO {
    @IsNumber()
    readonly id: number;
    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    readonly description: string;
    @IsNotEmpty()
    @IsBoolean()
    readonly isDone: boolean;
}