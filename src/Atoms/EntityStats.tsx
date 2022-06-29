import { ReactElement } from 'react';

interface entityStatsProps {
    statType: string;
    strength: number;
    intelligence: number;
    origin: string;
    details: string
}

function EntityStats ({statType, strength, intelligence, origin, details} : entityStatsProps) : ReactElement<HTMLElement> 
{
    return (
        <div className={statType}>
            <p>Strength: {strength}</p>
            <p>Intelligence: {intelligence}</p>
            <p>Origin: {origin}</p>
            <p>{details}</p>
        </div>
    );
}

export default EntityStats;