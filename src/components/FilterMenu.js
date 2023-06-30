import React, { useState } from 'react';
import FilterFrame from './FilterFrame';
import { Button } from './styles/Button.styled';
import Filter from '../images/filter.svg';

const FilterMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
    <Button onClick={toggleMenu} bg='#ececec' style={{color: '#667085'}}>{!showMenu ? ('Show filter') : ('Hide filter')}<img src= {Filter} style={{width: '13px'}}/></Button>
      {showMenu && (
        <div className="filter-menu">
          <FilterFrame />
        </div>
      )}
    </div>
  );
};

export default FilterMenu;