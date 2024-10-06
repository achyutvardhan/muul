import { Link, Outlet } from "react-router-dom";
import "../css/Navbar.css"
export default function NavBar() {
    return (<>
        <nav className="ext-bar">
            <ul className="int-bar">
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/">Bar chart</Link>
                </li>
                <li>
                    <Link to="/linechart">Line chart</Link>
                </li>
                <li>
                    <Link to="/piechart">Pie chart</Link>
                </li>

            </ul>
        </nav>
        <Outlet />
    </>);
}