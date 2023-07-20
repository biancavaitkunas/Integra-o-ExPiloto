import { Country } from "src/app/countries/models/country";
import { Team } from "src/app/teams/models/teams";

export interface Pilot{
    id: number,
    name: string,
    country: Country,
    team: Team

}