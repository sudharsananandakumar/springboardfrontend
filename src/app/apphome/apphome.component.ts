import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ThemeOption } from 'ngx-echarts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apphome',
  templateUrl: './apphome.component.html',
  styleUrls: ['./apphome.component.css']
})
export class ApphomeComponent {
  constructor(private route: Router) {}
  assigned:boolean = true;
  theme!: string | ThemeOption;
  pieOption1: EChartsOption = {
    backgroundColor:'#ffffff',
    title: {
      left: '50%',
      text: 'Springboard Palette Village Housing',
      subtext:'Available housings in the village',
      textAlign: 'center',
      textStyle: {
        color: '#1776C0'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/> {b} : {c}',
      textStyle: {
        color: '*'
      }
    },
    legend: {
      align: 'auto',
      bottom: 10,
      data: ['Total Available','Currently Occupied','Currently Vacant','Under Maintenance'],
      textStyle: {
        color: '*'
      }
    },
    calculable: true,
    series: [
      {
        name: 'count',
        type: 'pie',
        radius: [30,110],
        roseType: 'area',
        data: [
          {value: 80, name: 'Total Available'},
          {value: 60, name: 'Currently Occupied'},
          {value: 18, name: 'Currently Vacant'},
          {value: 2, name: 'Under Maintenance'},
        ],
        label: {
          color: '#1776C0'
        }
    }
    ]
  };

  
  pieOption2: EChartsOption = {
    backgroundColor:'#ffffff',
    title: {
      left: '50%',
      text: 'Skill Upgrade Statistics',
      subtext:'Current status',
      textAlign: 'center',
      textStyle: {
        color: '#1776C0'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/> {b} : {c}',
      textStyle: {
        color: '*'
      }
    },
    legend: {
      align: 'auto',
      bottom: 10,
      data: ['Total Under Training','Currently Occupied','Currently Vacant','Under Maintenance'],
      textStyle: {
        color: '*'
      }
    },
    calculable: true,
    series: [
      {
        name: 'count',
        type: 'pie',
        radius: [30,110],
        roseType: 'area',
        data: [
          {value: 80, name: 'Total Trained'},
          {value: 50, name: 'Job Placement'},
          {value: 30, name: 'Available Slots'},
        ],
        label: {
          color: '#1776C0'
        }
    }
    ]
  };


  barchartOption: EChartsOption = {
    backgroundColor:'#ffffff',
    title: {
      left: '50%',
      text: 'Service Providers',
      subtext:'Current Status',
      textAlign: 'center',
      textStyle: {
        color: '#1776C0'
      }
    },
    tooltip: {},
    dataset: {
      source: [
        ['product','currently served','waitinglist'],
        ['Health',20,5],
        ['Police',8,2],
        ['Rehabilitation',25,2],
        ['Training',27,11],
      ],
    },
    xAxis: {type: 'category'},
    yAxis: {},
    series: [{type: 'bar'},{type: 'bar'}]
  }

  chartOption: EChartsOption = {
    backgroundColor:'#ffffff',
    title: {
      left: '50%',
      text: 'Housing Data for Springboard Palette Village',
      textAlign: 'center'
    },
    color: ['#1776C0'],
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed'],
      axisLabel: {
        color: '#1776C0',
      },
      axisLine: {
        lineStyle: {
          color: '#1776C0'
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#1776C0',
      },
      axisLine: {
        lineStyle: {
          color: '#1776C0'
        }
      }
    },
    series: [
      {
        color:['#1776C0'],
        data: [11,12,13],
        type: 'line',
        label: {
          color: 'rgba(255,255,255,255)'
        }
      }
    ]
  };

  assignNavigator(): void {
    this.assigned = !this.assigned
    console.log(this.assigned)
  }

  navigateToReg():void {
    this.route.navigate(['/register'])
  }
  navigateToHome():void {
    this.route.navigate(['/home'])
  }
  navigateToLogin():void {
    this.route.navigate(['/login'])
  }

  // onChartInit1(ec:Event) {
  //   this.echartsInstance1 = ec;
  // }

  
  // onChartInit2(c:Event) {
  //   this.echartsInstance2 = ec;
  // }

  
  // onChartInit3(c:Event) {
  //   this.echartsInstance3 = ec;
  // }

}
