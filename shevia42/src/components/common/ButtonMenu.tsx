import React from 'react';

interface   ButtonProps{
    label: string;
    onClick: () => void;
    isActive?:boolean;
}

const ButtonMenu: React.FC<ButtonProps> = ({label, onClick, isActive}) => {
    return(
        <button
            onClick={onClick}
            className={`menu-button ${isActive    ? 'active' : ''}`}
            aria-expanded={isActive}
        >
            {label}
        </button>
    
    );

};

export default ButtonMenu;