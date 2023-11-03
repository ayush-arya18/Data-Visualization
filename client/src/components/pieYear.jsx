import React , { useState, useEffect} from 'react';
import Chart from 'react-apexcharts';

const options= {
    series: [44, 55, 13, 43, 22],
    options: {
        chart: {
        width: 380,
        type: 'donut',
          },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        responsive: [{
            breakpoint: 480,
            options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
            }
        }]
    },
};

const  Pieyear=()=> {
    const [data, setData] = useState([])
    useEffect(() => {
      const fetchData=async()=>{
        const url='http://localhost:9000/getData';
        var dataset1= [];
        var labelset1=[];
        await fetch(url).then((data)=> {
          const res = data.json();
          return res
      }).then((res) =>{
        for (const val of res) {
             labelset1.push(val.year);
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
         labelset1=unique;
         dataset1=countArr;
            setData({
                series: dataset1,
                 options: {
                    chart: {
                        width: 380,
                        type: 'donut',
                     },
                    labels: labelset1,
                    responsive: [{
                        breakpoint: 480,
                         options: {
                            chart: {
                                width: 200
                             },
                            legend: {
                                 position: 'bottom'
                            }
                        }
                    }]
                }
            })

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
            <div id="pieyear">
              <h3>Year</h3>
            <Chart options={options} series={data.series} labels={data.labelset1} type="pie" width={380} />
            </div>
    );
}
export default Pieyear;