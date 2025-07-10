import ChartBox from "../../components/chart-box/ChartBox";
import TopBox from "../../components/top-box/TopBox";
import "./home.scss";
import {
  chartBoxUser,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxConversion,
  barChartBoxVisit,
  barChartBoxRevenue,
} from "../../data";
import BarChartBox from "../../components/bar-chart-box/BarChartBox";
import PieChartBox from "../../components/pie-chart-box/PieChartBox";
function Home() {
  return (
    <div className="home">
      <div className="box box-1">
        <TopBox />
      </div>
      <div className="box box-2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box-3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box-4">
        <PieChartBox />
      </div>
      <div className="box box-5">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box-6">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box-7"></div>
      <div className="box box-8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box-9">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
}

export default Home;
