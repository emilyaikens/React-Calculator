import './Display.css';
import {Textfit} from 'react-textfit';

const Display = ({ value }) => {
    return (
        <Textfit className='display' mode='single' max={70}>
            {value}
        </Textfit>
    )
}

export default Display