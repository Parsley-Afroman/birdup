import { ReactElement } from 'react';

const EntityStats = ({statType, strength, intelligence, origin, details} : any) : ReactElement<HTMLElement> => {
    return (
        <div className={statType}>
            <p>Strength: {strength}</p>
            <p>Intelligence: {intelligence}</p>
            <p>Origin: {origin}</p>
            <p>{details}</p>
        </div>
    )
}

export default EntityStats