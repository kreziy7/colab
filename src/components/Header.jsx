import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header>
            <div>
                <Link to="/Home">
                    <img src="/image 5.png" alt="Logo" />
                </Link>

                <div>
                    <div>
                        <select id="language-select" name="language">
                            <option value="RU">RU</option>
                            <option value="UZ">UZ</option>
                            <option value="EN">EN</option>
                        </select>
                        <span>+998 94 606 60 60</span>
                    </div>

                    <button>
                        ОСТАВИТЬ ЗАЯВКУ
                    </button>
                </div>
            </div>

            <hr />

            <div>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/about">
                                    О БРЕНДЕ
                                </Link>
                            </li>
                            <li>
                                <Link to="/advantages">
                                    ПРЕИМУЩЕСТВА
                                </Link>
                            </li>
                            <li>
                                <Link to="/club">
                                    ОТКРЫТЬ КЛУБ
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    КОНТАКТЫ
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            <svg viewBox="0 0 24 24">
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
                                        О БРЕНДЕ
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/advantages" onClick={() => setMobileMenuOpen(false)}>
                                        ПРЕИМУЩЕСТВА
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/club" onClick={() => setMobileMenuOpen(false)}>
                                        ОТКРЫТЬ КЛУБ
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                                        КОНТАКТЫ
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
