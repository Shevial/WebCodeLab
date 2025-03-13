import React, {ReactNode} from 'react';

interface CardProps{
    children: ReactNode;
    title?: string;
}

const CardMenu: React.FC<CardProps> = ({children, title}) => {
    return (
        <div className="menu-card">
            {title && <h3>{title}</h3>}
            <div className="card-content">
                {children}
            </div>
        </div>
    );
};

export default CardMenu;