import ChartBox from "../../components/chart-box/ChartBox";
import TopBox from "../../components/top-box/TopBox";
import "./home.scss";
import {
  chartBoxUser,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxConversion,
} from "../../data";
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
      <div className="box box-4"></div>
      <div className="box box-5">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box-6">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box-7"></div>
      <div className="box box-8"></div>
      <div className="box box-9"></div>
    </div>
  );
}

export default Home;
