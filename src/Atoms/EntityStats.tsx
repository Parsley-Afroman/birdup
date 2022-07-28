import { ReactElement } from 'react';

interface entityStatsProps 
{
    statType: string,
    strength: number,
    intelligence: number,
    origin: string,
    details: string
}

/*
    Function enables you to implement the entity image
        - statType: determines where the statics are being displayed (e.g. within the card array on the landing page, or an indivdual entity's modal)
        - strength: is the entity's stat for this attribute
        - intelligence: ""
        - origin: ""
        - details: "" (Currently no ability has been provided to be able to input significant amount of text that is safe to import into a DB)
*/

function EntityStats ({statType, strength, intelligence, origin, details} : entityStatsProps) : ReactElement<HTMLElement> 
{
    return (
        <div className={statType}>
            <p>Strength: {strength}</p>
            <p>Intelligence: {intelligence}</p>
            <p>Origin: {origin}</p>
            <p>{details}</p>
        </div>
    )
}

export default EntityStats;