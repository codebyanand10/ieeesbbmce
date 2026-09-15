"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const pathname = usePathname();

    const toggleNav = () => setNavbarOpen((prev) => !prev);
    const closeNav = () => setNavbarOpen(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/events", label: "Events" },
        { href: "/about", label: "About" },
        { href: "/execom", label: "Execom" },
        { href: "/contact", label: "Contact Us" },
    ];

    return (
        <header className="menu-div" role="navigation">
            <nav className="menu">
                <div className="logo-group">
                    <Link href="/" onClick={closeNav}>
                        <img className="black-logo" src="/assets/IEEE-logo.svg" alt="IEEE Logo" />
                    </Link>
                    <img className="black-logo sep-logo" src="/assets/sep.svg" alt="Separator" />
                    <Link href="/" onClick={closeNav}>
                        <img className="black-logo sbbmce-logo" src="/assets/ieeesbbmce-logo.svg" alt="IEEE SB BMCE Logo" />
                    </Link>
                </div>

                <button className="ham-button" onClick={toggleNav} aria-label="Toggle Navigation Menu">
                    <img className="black-logo" src="/assets/ham.svg" alt="Menu" />
                </button>

                <ul className="desktop-menu">
                    {navLinks.slice().reverse().map((link) => (
                        <li key={link.href} className="menu-item">
                            <Link
                                href={link.href}
                                className={pathname === link.href ? "active-link" : ""}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {navbarOpen && (
                    <ul className="mobile-menu">
                        {navLinks.map((link, idx) => (
                            <li
                                key={link.href}
                                className="menu-panel-item"
                                style={{ animationDelay: `${100 + idx * 50}ms` }}
                            >
                                <Link
                                    href={link.href}
                                    onClick={closeNav}
                                    className={pathname === link.href ? "active-link" : ""}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </header>
    );
}
