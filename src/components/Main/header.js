import React from 'react'

function Header() {
    return (
        <section id="landing">
            <header className="masthead text-center text-white">
                <div className="masthead-content">
                    <div className="container px-5">
                        <img src = "assets/img/Logo.png"
                            className = "Logo" alt="Logo Zeuss"/>
                    </div>
                    <a className="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">VER PRECIOS</a>
                </div>
                <div className="bg-circle-1 bg-circle"></div>
                <div className="bg-circle-2 bg-circle"></div>
                <div className="bg-circle-3 bg-circle"></div>
                <div className="bg-circle-4 bg-circle"></div>
            </header>
        </section>
    )
}

export default Header
