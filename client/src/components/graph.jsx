import React , { useState, useEffect} from 'react';
import Chart from 'react-apexcharts'



const  Graph =()=> {
  const [intensity, setCategory] = useState([])
  const [id, setData] = useState([])

  useEffect(() => {
    const fetchData=async()=>{
        const url='http://localhost:9000/getData';
      const intensity= [];

      await fetch(url).then((data)=> {
        const res = data.json();
        return res
    }).then((res) =>{
        
       for (const val of res) {
          if(val.intensity!==""){
            intensity.push(val.intensity);
          }
       }
       var dinten =[];
       dinten=intensity;
      let unique = intensity.reduce(function (acc, curr) { 
        if (!acc.includes(curr)) 
            acc.push(curr); 
        return acc; 
      }, []);
      unique.sort(function (a, b) { return a - b });
      var count=0;
      const countArr=[];
       for(var i=0; i<unique.length; i++){
        for(var j=0; j<dinten.length; j++){
          if(unique[i]===dinten[j]){
            count++;
          }
        }
        countArr[i]=count;
        count=0;
       }
          setCategory(countArr)
          setData(unique)
          
       }).catch();

    }
    fetchData();
    }, [])
  
    return (
      <div id="graph">
        <h3>Intensity</h3>
        <Chart options={{
        chart: {
          id: 'id'
        },
        xaxis: {
          categories: intensity
        },
        
      }} 
      series={[{
        name: 'Intensity',
        data: id,
      }]} type="line" width={800} height={500} />
    </div>
    
    
    )
}

export default Graph;