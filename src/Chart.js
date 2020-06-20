import React,{Component} from 'react';
import {Line} from 'react-chartjs-2' ;

const ForMedia= ({chartData,month,week}) => {
  const mql=window.matchMedia('(max-width:767px)')
  if(mql.matches){
    return (
      <div className='chart' >
      <Line
      data={chartData}
      height={350}
      options={{
        title:{
          display:'Apple',
            text:"Nepal's timeline",
            fontSize:25
        }
      }}
      />
      </div>
    )
  }
  else{
    return (
    <div className='chart' >
    <Line
    data={chartData}
    options={{
      title:{
        display:'Apple',
          text:"Nepal's timeline",
          fontSize:25
      }
    }}
    />
    </div>
  )

  }
}
export default class Chart extends Component{
  constructor(props){
    super(props);
    this.state={
      chartData:this.props.chartData,
      month:props.month,
      week:props.week,
    }
  }
  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
  }


  render(){
    return (
      <ForMedia chartData={this.props.chartData}/>
    )
  }
}


