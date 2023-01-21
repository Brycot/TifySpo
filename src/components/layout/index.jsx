import SideBar from "../SideBar";
import PlayingBar from "../PlayingBar";
import Topbar from "../TopBar";

import { Div } from "./Layout.styled";
function Layout({ children }) {
    return (
        <Div>
            <Topbar />
            <SideBar />
            <main>{children}</main>
            <PlayingBar />
        </Div>
    );
}

export default Layout;
