/**
 * Created by SAMSUNG on 2015/11/27.
 */

function buildChart($ele,title_text,series_option){
  $ele.highcharts({
    chart: {
      zoomType: 'x',
//	  borderWidth: 1,
	  plotBorderWidth: 1,
      plotBorderColor: '#979595',	  
      backgroundColor: 'rgba(0,0,0,0)'
    },
    title: {
      text: title_text,
      style: {
//        "fontSize": "18px !important",
        color: '#474646'
      },
	  
	align: 'middle',	  
    },
	subtitle: {
       text: null,	// 副标题
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      line:{
        marker:{
          enabled: true
        }
      }
    },
    legend: {
      symbolWidth: 30,
      itemStyle: {
        color: '#808080',
        fontSize: '15px'
      }
    },
    yAxis: {
      title:{
        text: '(mm)',
        style: {
		  fontWeight: 'bold',
          fontSize: '12px'
       },
	   
		align: 'high',
		offset: 10,
		rotation: 0,
		y: -10,
     },
      labels: {
        style: {
//          fontSize: '18px',
          color: '#808080'
        }
      },
      minTickInterval: 0.1,
      gridLineColor: '#C0D0E0',
      gridLineWidth:1,	  
	  minorTickInterval: 'auto',	// 子网格线间隔
	  minorGridLineDashStyle:'dash',	// 子网格线线形，为虚线
    },
    xAxis: {
      type: 'datetime',
	  gridLineWidth:1,
	  tickPixelInterval: 140,		// 两个时间刻度间的最小间隔，防止刻度重叠显示 
      lineColor:'#979595',
      labels:{
        formatter:function(){
          var datetime = moment.utc(this.value).utcOffset(8*60).format('YYYY-MM-DD HH:mm:ss')
          return '<p style="color:#979595">' + datetime.split(' ')[0] + '</p><br><p style="color:#979595">' + datetime.split(' ')[1] + '</p>';
        }
      }
    },
    tooltip: {
      style:{
        width: 100
      },
//      headerFormat: '<b>{series.name}</b><br>',
      xDateFormat: '%Y-%m-%d %H:%M:%S',
      pointFormat: '<span>{series.name}</span>: <b>{point.y} mm</b> <br/>',
      valueDecimals: 2,
      shared: true
    },
    series: series_option
  });
}
