import HeaderDesktop from "./Desktop";
import HeaderMobile from "./Mobile";
import { ROUTER_MENU } from "./RouterMenu";
function Header() {
    return ( <>
      <HeaderDesktop menuList={ROUTER_MENU} />
      <HeaderMobile/>
    </> );
}

export default Header;