import React,{Component} from 'react';
import {Doughnut} from 'react-chartjs-2' ;

const ForMedia=({chartData,displayTitle})=>{
  const mql=window.matchMedia('(max-width:767px)')
  if (mql.matches){
    return (
      <div className='chart' >
      <Doughnut
      data ={chartData}
      width={100}
      height={100}
      options={{
        labels:false,
        maintainAspectRatio:true,
          title:{
            display:true,
              text:displayTitle,
              fontSize:25
          },
      }}
      />
      </div>
    )}
  else{
    return (
      <div className='chart' >
      <Doughnut
      data ={chartData}
      options={{
        maintainAspectRatio:true,
          title:{
            display:true,
              text:displayTitle,
              fontSize:25
          },
      }}
      />
      </div>
    )

  }
}


export default class PieChart extends Component{
  constructor(props){
    super(props);
    this.state={
      chartData:props.chartData,
      displayTitle:props.displayTitle
    }
  }
  static defaultProps = {
  }
  render(){
    return (
      <ForMedia chartData={this.props.chartData} displayTitle={this.props.displayTitle}/>
    )
  }
}


