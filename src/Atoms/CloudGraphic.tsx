import { ReactElement } from 'react';
import Cloud from '../Assets/Cloud.svg';

const CloudGraphic = ({opposite} : any) : ReactElement<HTMLImageElement> => {
    return <img className={'cloud ' + opposite ? 'right' : ''} src={Cloud}/>
    
}

export default CloudGraphic;