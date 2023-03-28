import { Component, OnInit } from '@angular/core';
import {LegendLabelsContentArgs} from "@progress/kendo-angular-charts";
import {IntlService} from "@progress/kendo-angular-intl";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {

  public pieData = [
    { category: "0-14", value: 0.2545 },
    { category: "15-24", value: 0.1552 },
    { category: "25-54", value: 0.4059 },
    { category: "55-64", value: 0.0911 },
    { category: "65+", value: 0.0933 },
  ];

  public labelContent(args: LegendLabelsContentArgs): string {
    return `${args.dataItem.category} years old: ${this.intl.formatNumber(
        args.dataItem.value,
        "p2"
    )}`;
  }

  constructor(private intl: IntlService) {
    this.labelContent = this.labelContent.bind(this);
  }


  pieChartData = {
    labels: ['Download Sales', 'In-Store Sales', 'Mail Sales'],
    datasets: [
      {
        label: 'Sales',
        data: [300, 500, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
      },
    ],
  };
  pieChartType = 'pie';

  ngOnInit() {}
  chartClicked(e: any): void {
    console.log(e.active);
    console.log(e.event);
  }

  chartHovered(e: any): void {
    console.log(e);
  }
}
