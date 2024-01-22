import React, { useState } from 'react';
import { typeColors } from '../../../data/typeColors'; // Asegúrate de importar tu lista de colores y tipos
import { Modal, Box, RadioGroup, Radio, FormLabel, FormControl, FormControlLabel, Button } from '@mui/material';
import './FilterModal.css';

const FilterModal = (props) => {

    const {handleClose, open, setPokemonFilter} = props;

  const [selectedType, setSelectedType] = useState(null);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleConfirm = () => {
    setPokemonFilter(selectedType);
    handleClose();
  };

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box className='ModalBody'>
                <FormControl>
                    <FormLabel className='TypeTitle'>Select type</FormLabel>
                    <RadioGroup
                    onChange={handleTypeChange}
                    className='TypeList'
                    value={selectedType}
                    >
                    {Object.keys(typeColors).map((type) => (
                    <FormControlLabel
                        key={type}
                        className='TypeLabel'
                        value={type} 
                        style={{background: typeColors[type]}} 
                        control={<Radio className='TypeRadio'/>} 
                        label={type.toUpperCase()}
                    />
                    ))}
                    </RadioGroup>
                    <div className='TypeButtonContainer'>
                    <Button className='TypeButton' onClick={handleConfirm}>Confirm</Button>
                    <Button className='TypeButton' onClick={handleClose}>Cancel</Button>
                    </div>
                </FormControl>
            </Box>
        </Modal>
    );
};

export default FilterModal;