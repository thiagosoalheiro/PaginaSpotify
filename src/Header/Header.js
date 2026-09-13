import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav class="header__navigation">
                <div class="navigation">
                    <button class="arrow-left">
                        <img src="./src/assets/icons/small-left.png" alt="" />
                    </button>
                    <button class="arrow-right">
                        <img src="./src/assets/icons/small-right.png" alt="" />
                    </button>
                </div>
                <div class="header__search">
                    <img src="./src/assets/icons/search.png" alt="" />
                    <input id="search-input" maxlength="800" autocorrect="off" autocapitalize="off" spellcheck="false"
                        placeholder="O que você quer ouvir?" value="" />
                </div>
                <div class="header__login">
                    <button class="subscribe">Inscreva-se</button>
                    <button class="login">Entrar</button>
                </div>
            </nav>
    )
};

export default Header;