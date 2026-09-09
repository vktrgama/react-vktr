import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Splash from "../Header/Splash";
import Navigation from './nav';

function Header() {
    const location = useLocation();
    const stuckContainerRef = useRef(null);

    useEffect(() => {
        // Skip the hero splash and jump straight to the nav/content for any
        // page other than Home, so the new content is visible without manual scrolling.
        if (location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (stuckContainerRef.current) {
            stuckContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [location.pathname]);

    return (
        <header id="header" class="header">
            <Splash />
            <div id="stuck_container" class="stuck_container" ref={stuckContainerRef}>
                <div class="container">
                    <div class="row">
                        <div class="grid_12">
                            <div class="hdr-brand">
                                <h1><a href="./">Full Stack Engineering</a></h1>
                            </div>
                            <Navigation />
                        </div>
                    </div>
                </div>
            </div>
      </header>
    );
  }

  export default Header;