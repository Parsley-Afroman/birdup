import { ReactElement } from 'react';
import Duck from '../Assets/Duck.svg';

interface duckProps {
    oppositeTrue: boolean;
}

function DuckGraphic ({oppositeTrue} : duckProps) : ReactElement<HTMLImageElement> 
{
    return <img className={'duck' + (oppositeTrue  ? 'right' : 'left')} src={Duck}/>;
    
}

export default DuckGraphic;