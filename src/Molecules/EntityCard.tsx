import { ReactElement } from 'react';
import CardHeader from '../Atoms/CardHeader';
import EntityImage from '../Atoms/EntityImage';
import Duck from '../Assets/Duck.svg';
import EntityStats from '../Atoms/EntityStats';
import Card from '../Atoms/Card';

const EntityCard = ({statType, strength, intelligence, origin, details} : any) : ReactElement<HTMLElement> => {
    return (
        <div className='entityCard'>
            {/* need to nest components within the Card Component */}
        </div>
    )
}

export default EntityCard