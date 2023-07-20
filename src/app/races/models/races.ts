import { Championship } from "src/app/championship/models/championship";
import { Speedway } from "src/app/speedways/models/speedways";

export interface Race{
    id: number,
    date: Date,
    speedway: Speedway,
    championship: Championship
}