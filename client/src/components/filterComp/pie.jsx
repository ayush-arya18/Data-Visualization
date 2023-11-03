import React , { useState, useEffect} from 'react';
import Chart from 'react-apexcharts';


const  Pie=()=> {
    const [data,setData] = useState([])
    const[name,setLabel]=useState([])
    
    useEffect(() => {
      const fetchData=async()=>{
        const url='http://localhost:9000/getDatafilter';
        var dataset1= [];
        var labelset1=[];
        var labelset2=[];
        await fetch(url).then((data)=> {
          const res = data.json();
          return res
      }).then((res) =>{
        for (const val of res) {
             labelset1.push(val.region);
         }
         var lbl =[];
         lbl=labelset1;
        let unique = labelset1.reduce(function (acc, curr) { 
          if (!acc.includes(curr)) 
              acc.push(curr); 
          return acc; 
        }, []);
        unique.sort(function (a, b) { return a - b });
        var count=0;
        const countArr=[];
         for(var i=0; i<unique.length; i++){
          for(var j=0; j<lbl.length; j++){
            if(unique[i]===lbl[j]){
              count++;
            }
          }
          countArr[i]=count;
          count=0;
         }
         labelset2=unique;
         dataset1=countArr;
            setData(dataset1)
            setLabel(labelset2)

            // setObject({
            //   chart: {
            //     id: 'apexchart-example'
            //   },
            //   xaxis: {
            //     categories: salary
            //   }
            // })
            // setSeries([{
            //   name: 'series-1',
            //   data: age
            // }])
            
         }).catch(e => {
            alert(e);
        })
  
      }
      fetchData();
      }, [])


    


    return (
            <div id="pie">
              <h3>Region</h3>
            <Chart options={{
                labels: name,
                responsive: [{
                  breakpoint: 480,
                  legend: {
                      position: 'bottom',
                  }
                }]
            }}
            series={data} 
             
            type="donut" width={380} />
            </div>
    );
}
export default Pie;