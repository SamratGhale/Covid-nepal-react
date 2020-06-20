import './NewsBox.css'
import React from "react";
import Chart from './Chart';
import PieChart from './PieChart';
import Button from '@material-ui/core/Button';

export default class FetchData extends React.Component {


  state={
    loading:true,
    week: JSON.parse(localStorage.getItem('week')) || 0,
    month: JSON.parse(localStorage.getItem('month')) || 0,
    data:null
  }
  previousMonth=()=>{
    localStorage.setItem('month', JSON.stringify(2))
    localStorage.setItem('week', JSON.stringify(0))
    window.location.reload()
  }
  thisMonth=()=>{
    localStorage.setItem('month', JSON.stringify(1))
    localStorage.setItem('week', JSON.stringify(0))
    window.location.reload()
  }
  thisWeek=()=>{
    localStorage.setItem('month', JSON.stringify(0))
    localStorage.setItem('week', JSON.stringify(1))
    window.location.reload()
  }
  all=()=>{
    localStorage.setItem('month', JSON.stringify(0))
    localStorage.setItem('week', JSON.stringify(0))
    window.location.reload()
  }
  lastWeek=()=>{
    localStorage.setItem('month', JSON.stringify(0))
    localStorage.setItem('week', JSON.stringify(2))
    window.location.reload()
  }
  weekBeforeThat=()=>{
    this.setState({week:3})
    this.setState({month:0})
    localStorage.setItem('month', JSON.stringify(0))
    localStorage.setItem('week', JSON.stringify(3))
    window.location.reload()
  }
  async componentDidMount(){
    const url="https://data.nepalcorona.info/api/v1/covid/timeline?format=json";
    const urlWorld="https://api.covid19api.com/world";
    const responseWorld=await fetch(urlWorld)
    const response=await fetch(url)
    var data= await response.json()
    const dataWorld= await responseWorld.json()
    this.setState({data:data.slice(85,-1),dataWorld:dataWorld,loading:false})
    const data2=data.slice(0,-2)
    if (this.state.week){
      this.state.data=data2.slice(-8-(this.state.week-1)*7,-1-(this.state.week-1)*7)
    }
    else if(this.state.month) {
      this.state.data=data2.slice(-30-(this.state.month-1)*30,-1-(this.state.month-1)*30)
    }

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
    const newCases2=newCases 
    const dates2=dates 
    const newDeaths2=newDeaths 
    const newRecovered2=newRecovered 
    const totalRecovered=[]
    this.state.data.map(item=>(totalRecovered.push(item.totalRecoveries)))
    const totalDeaths=[]
    this.state.data.map(item=>(totalDeaths.push(item.totalDeaths)))
    const totalCases=[]
    this.state.data.map(item=>(totalCases.push(item.totalCases)))
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
    console.log(this.state.chartData)
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
        <div className="clicks">
        <Button variant="contained" color="primary" onClick={this.previousMonth}>
        previous month
        </Button>
        <Button variant="contained" color="primary" onClick={this.thisMonth}>
        this month
        </Button>
        <Button variant="contained" color="primary" onClick={this.thisWeek}>
        this week
        </Button>
        <Button variant="contained" color="primary" onClick={this.lastWeek}>
        last week
        </Button>
        <Button variant="contained" color="primary" onClick={this.weekBeforeThat}>
       week before that  
        </Button>
        <Button variant="contained" color="primary" onClick={this.all}>
        all
        </Button>
        </div>

        </>
      )
      }
      </div>
    );
  }
}
