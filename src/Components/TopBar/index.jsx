import './index.css'
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownShortWide, faFilter } from '@fortawesome/free-solid-svg-icons'

const TopBar = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleFilterOpen = () => {
        setOpen(!open);
    };

    return(
        <div className="Container">
            <h1>POKEDEX</h1>
            <button onClick={handleFilterOpen}><FontAwesomeIcon icon={faArrowDownShortWide} /></button>
            {open ? (
            <ul>
                <li value="fruit">Fruit</li>
                <li value="vegetable">Vegetable</li>
                <li value="meat">Meat</li>
            </ul>) :
            null}
            <button><FontAwesomeIcon icon={faFilter} /></button>
            <input></input>
        </div>
    )
}

export default TopBar