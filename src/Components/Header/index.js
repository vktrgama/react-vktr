import Splash from "../Header/Splash";
// import { useLocation } from 'react-router-dom';
import Navigation from './nav';

function Header() {
    // const location = useLocation();
    // let showSplash = location.pathname === "/" && <Splash />;

    return (
        <header id="header" class="header">
            <Splash />
            <div id="stuck_container" class="stuck_container">
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