import React,{Component} from 'react';
import {Line} from 'react-chartjs-2' ;

const ForMedia= ({chartData}) => {
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
  else{return (
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
      chartData:props.chartData
    }
  }
  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }


  render(){
    return (
      <ForMedia chartData={this.props.chartData}/>

    )
  }
}


