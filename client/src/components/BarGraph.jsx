import React , { useState, useEffect} from 'react'; 
import Chart from 'react-apexcharts'
const  BarGraph =()=> {
  const [id, setCategory] = useState([])
  const [username, setData] = useState([])

  useEffect(() => {
    const fetchData=async()=>{
        const url='http://localhost:9000/getData';
      const username = [];
      await fetch(url).then((data)=> 
      
      {
           
        const res = data.json();
        return res
    }).then((res) => {
        
       for (const val of res) {
        if(val.country !== ""){
           username.push(val.country);
        }
       }
       var countryName=[];
       countryName=username;
       let unique = username.reduce(function (acc, curr) { 
        if (!acc.includes(curr)) 
            acc.push(curr); 
        return acc; 
        }, []);
       var count=0;
       const countArr=[];
       for(var i=0; i<unique.length; i++){
        for(var j=0; j<countryName.length; j++){
          if(unique[i]===countryName[j]){
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
      <div id="bargraph">
        <h3>Country</h3>
      <Chart options={{
        chart: {
          id: 'id'
        },
        xaxis: {
          categories: username
        }
      }} 
      series={[{
        name: 'Count',
        data: id
      }]} type="bar" width={800} height={500} />
      </div>
    )
    
}

export default BarGraph;