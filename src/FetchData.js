import './NewsBox.css'
import React from "react";
import Chart from './Chart';
import PieChart from './PieChart';

export default class FetchData extends React.Component {
  state={
    loading:true,
    data:null
  }
  async componentDidMount(){
    const url="https://data.nepalcorona.info/api/v1/covid/timeline?format=json";
    const urlWorld="https://api.covid19api.com/world";
    const responseWorld=await fetch(urlWorld)
    const response=await fetch(url)
    const data= await response.json()
    const dataWorld= await responseWorld.json()
    this.setState({data:data,dataWorld:dataWorld,loading:false})
    const dates=[]
    const newCases=[]
    const newDeaths=[]
    const newRecovered=[]
    const index=[]
    const latest=this.state.dataWorld.slice(-1)
    this.state.data.map(item=>(item['index']=this.state.data.indexOf(item))) 
    this.state.data.map(item=>(dates.push(item.date)))
    this.state.data.map(item=>(index.push(item.index)))
    this.state.data.map(item=>(newCases.push(item.newCases)))
    this.state.data.map(item=>(newDeaths.push(item.newDeaths)))
    this.state.data.map(item=>(newRecovered.push(item.newRecoveries)))
    const newCases2=newCases.slice(85, -2) 
    const dates2=dates.slice(85, -2) 
    const newDeaths2=newDeaths.slice(85, -2) 
    const newRecovered2=newRecovered.slice(85, -2) 
    const totalRecovered=[]
    this.state.data.map(item=>(totalRecovered.push(item.totalRecoveries)))
    const totalDeaths=[]
    this.state.data.map(item=>(totalDeaths.push(item.totalDeaths)))
    const totalCases=[]
    this.state.data.map(item=>(totalCases.push(item.totalCases)))
    console.log(totalCases.slice(-1))
    this.setState({
      chartData3:{
            labels:['active cases','new recovered','new deaaths'],
        datasets:[
          {
            data:[latest[0].TotalConfirmed-latest[0].TotalRecovered-latest[0].TotalDeaths,latest[0].TotalRecovered,latest[0].TotalDeaths],
            backgroundColor:[
              'rgba(207,47,95)',
              'rgba(193,232,0)',
              'rgba( 26, 13, 0)',
            ],
            hoverBackgroundColor:'rgba(220,232,144)',
            hoverBorderColor: 'rgba(0,220,220,1)',
            borderWidth: 2,
          }
        ]
      }
    } )
    this.setState({
      chartData2:{
            labels:['active cases','new recovered','new deaaths'],
        datasets:[
          {
            data:[totalCases.slice(-1)-totalRecovered.slice(-1)-totalDeaths.slice(-1),totalRecovered.slice(-1),totalDeaths.slice(-1)],
            backgroundColor:[
              'rgba(207,47,95)',
              'rgba(193,232,0)',
              'rgba( 26, 13, 0)',
            ],
            hoverBackgroundColor:'rgba(220,232,144)',
            hoverBorderColor: 'rgba(0,220,220,1)',
            borderWidth: 2,
          }
        ]
      }
    } )
    this.setState({
      chartData:{
        labels:dates2,
        datasets:[
          {
            label:'new cases',
            data:newCases2,
            backgroundColor:[
              'rgba(207,47,95,0.6)',
            ]
          },
          {
            label:'new recovered',
            data:newRecovered2,
            backgroundColor:[
              'rgba(193,232,0)',
            ]
          },
          {
            label:'new deaths',
            data:newDeaths2,
            backgroundColor:[
              'rgba(0, 0, 0, 1)',
            ]
          }
        ]
      }
    } )
  }
  render(){
    return (
      <div>{this.state.loading|| !this.state.data?(
        <div> loading...</div>
      ):(
        <>
        <div className='rowC' > 
        <div className='row1'>
        <PieChart chartData={this.state.chartData2}displayTitle ={"Nepal's data"}  />
        </div>
        <div className='row2'>
        <PieChart chartData={this.state.chartData3} displayTitle ={"World's data"} />
        </div>
        </div>
        <Chart chartData={this.state.chartData} />
        </>
      )
      }
      </div>
    );
  }
}
