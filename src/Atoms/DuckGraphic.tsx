import { ReactElement } from 'react';
import Duck from '../Assets/Duck.svg';

const DuckGraphic = ({opposite} : any) : ReactElement<HTMLImageElement> => {
    return <img className="duck" src={Duck}/>
    
}

export default DuckGraphic;