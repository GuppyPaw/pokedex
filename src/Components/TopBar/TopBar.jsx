import './TopBar.css'
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownShortWide, faFilter } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@mui/material';
import FilterModal from './FilterModal/FilterModal'

const TopBar = (props) => {
    const {setPokemonFilter} = props;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div className="Container">
            <h1>POKEDEX</h1>
            <Button onClick={handleOpen}><FontAwesomeIcon icon={faFilter} /></Button>
            <FilterModal 
            handleClose={handleClose}
            open={open}
            setPokemonFilter={setPokemonFilter}
            />
        </div>
    )
}

export default TopBar