import React , { useState, useEffect} from 'react';
import Chart from 'react-apexcharts';

const options= {
    
        series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
        chart: {
        type: 'polarArea',
      },
      labels:[],
      stroke: {
        colors: ['#fff']
      },
      fill: {
        opacity: 0.8
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
            length:200

          },
          legend: {
            position: 'bottom'
          }
        }
      }]
      };

const  PolarArea=()=> {
    const [data, setData] = useState([])
    useEffect(() => {
      const fetchData=async()=>{
        const url='http://localhost:9000/getDatafilter';
        var dataset1= [];
        var labelset1=[];
        await fetch(url).then((data)=> {
          const res = data.json();
          return res
      }).then((res) =>{
        for (const val of res) {
             labelset1.push(val.likelihood);
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
                series:dataset1,
                chart: {
                type: 'polarArea',
              },
              labels:labelset1,
              stroke: {
                colors: ['#fff']
              },
              fill: {
                opacity: 0.8
              },
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
            })
            
         }).catch();
  
      }
      fetchData();
      }, [])

    return (
      <div id="polararea">
            <h3>Likelihood</h3>
            <Chart options={options} series={data.series} labels={data.labelset1} type="polarArea" width={380} />
            </div>
    );
}

export default PolarArea;