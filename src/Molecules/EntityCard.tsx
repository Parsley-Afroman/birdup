import { ReactElement } from 'react';
import CardHeader from '../Atoms/CardHeader';
import EntityImage from '../Atoms/EntityImage';
import EntityStats from '../Atoms/EntityStats';
import Card from '../Atoms/Card';

interface entityCardProps {
    birdName: string;
    imageRef: string;
    statType: string;
    strength: number;
    intelligence: number;
    origin: string;
    details: string;
}

function EntityCard ({birdName, imageRef, statType, strength, intelligence, origin, details} : entityCardProps) : ReactElement<HTMLElement> 
{
    return (
        <div className='entityCard'>
            <Card>
                <CardHeader birdName = {birdName}/>
                <EntityImage imageRef = {imageRef}/>
                <EntityStats statType = {statType} strength = {strength} intelligence = {intelligence} origin = {origin} details = {details}/>
            </Card>
        </div>
    );
}

export default EntityCard;