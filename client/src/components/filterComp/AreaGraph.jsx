import React , { useState, useEffect} from 'react';
 
import Chart from 'react-apexcharts'

const  AreaGraph =()=> {
  const [id, setCategory] = useState([])
  const [username, setData] = useState([])

  useEffect(() => {
    const fetchData=async()=>{
        const url='http://localhost:9000/getDatafilter';
      const username = [];
      await fetch(url).then((data)=> {
           
        const res = data.json();
        return res
    }).then((res) => {
        
       for (const val of res) {
           username.push(val.topic);
       }
       var topicName=[];
       topicName=username;
       let unique = username.reduce(function (acc, curr) { 
        if (!acc.includes(curr)) 
            acc.push(curr); 
        return acc; 
        }, []);
       var count=0;
       const countArr=[];
       for(var i=0; i<unique.length; i++){
        for(var j=0; j<topicName.length; j++){
          if(unique[i]===topicName[j]){
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
    }, )
  
    return (
        <div id="area">
            <h3>Topic</h3>
      <Chart options={{
        xaxis: {
          categories: username
        }
      }} 
      series={[{
        name:"Count",
        data: id
      }]} type="area" width={800} height={500} />
      </div>
    )
}

export default AreaGraph;