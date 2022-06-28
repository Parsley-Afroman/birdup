import { ReactElement } from 'react';
import CardHeader from '../Atoms/CardHeader';
import EntityImage from '../Atoms/EntityImage';
import EntityStats from '../Atoms/EntityStats';
import Card from '../Atoms/Card';

const EntityCard = ({birdName, imageRef, statType, strength, intelligence, origin, details} : any) : ReactElement<HTMLElement> => {
    return (
        <div className='entityCard'>
            {/* need to nest components within the Card Component */}
            <Card>
                <CardHeader birdName = {birdName}/>
                <EntityImage imageRef = {imageRef}/>
                <EntityStats statType = {statType} strength = {strength} intelligence = {intelligence} origin = {origin} details = {details}/>
            </Card>
        </div>
    )
}

export default EntityCard