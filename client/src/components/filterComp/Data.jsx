import Pie from "./pie";
import Graph from "./graph";
import BarGraph  from "./BarGraph";
import PolarArea from "./PolarArea";
import Graphrel from "./graphRel";
import AreaGraph from "./AreaGraph";
import Pieyear from "./pieYear";
import Filter from "./filter";
function Data(){
  return (
    <div id="data" class="container-fluid">
      <Filter/>
      <BarGraph />
      <Graph/>
      <Pie />
      <PolarArea />
      <Graphrel />
      <AreaGraph />
      <Pieyear/>
    </div>
  )
}
export default Data;