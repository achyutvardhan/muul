import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import "../css/Dashboard.css"
export default function Dashboard() {
    return (<>
        <div className="dash-external">
            <div className="pie">
                <PieChart />
            </div>
            <div className="bar">
                <BarChart />
            </div>
            <div className="line">
                <LineChart />
            </div>
        </div>
    </>);
}