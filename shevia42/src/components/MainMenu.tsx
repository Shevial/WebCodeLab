import React from "react";
import ButtonMenu from "./common/ButtonMenu";
import CardMenu from "./common/CardMenu";
import { Link } from "react-router-dom";
import { useState } from "react";

const MainMenu: React.FC = () => {
    const[activeMenu, setActiveMenu] = useState<string | null>(null);

    const handleButtonClick = (menuName: string) => {
        setActiveMenu(activeMenu === menuName ? null : menuName);
    };

    return (
        <div className="main-menu">
            <div className="menu-buttons">
                <ButtonMenu
                label = "Shell"
                onClick={() => handleButtonClick('shell')}
                isActive={activeMenu === 'shell'}
            />
            <ButtonMenu
            label="C"
            onClick={() => handleButtonClick('c')}
            isActive={activeMenu === 'c'}
            />
            </div>

        {activeMenu === 'shell' && (
            <CardMenu title= "Shell Options">
                <SubMenu items={['C00', 'Rank00', 'Rank01']} basePath="/c" />
            </CardMenu>
        )}

        {activeMenu === 'c' && (
            <CardMenu title= "C Options">
                <SubMenu items={['C00', 'Rank00', 'Rank01']} basePath="/c" />
            </CardMenu>
        )}
        </div>
    );
};

//componente submenu Reutilizable

interface SubMenuProps {
    items: string[];
    basePath: string;
}

const SubMenu: React.FC<SubMenuProps> = ({items, basePath}) => {
    return (
        <nav className="sub-menu">
            {items.map((item) => (
                <Link
                    key={item}
                    to={`${basePath}/${item.toLowerCase()}`}
                    className="sub-menu-item"
                    >
                        {item}
                    </Link>

            ))}
        </nav>
    );
};
export default MainMenu;