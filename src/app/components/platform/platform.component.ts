import { Component, OnInit } from '@angular/core';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { DataChart } from 'src/app/models/data-chart.model';
import { RecordPageableService } from 'src/app/services/record-pageable.service';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {

  dataChartByPlatform: DataChart = [];
  totalRecords: number = 0;

  // options
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = false;
  isDoughnut: boolean = true;
  legendPosition = LegendPosition.Below

  colorScheme: Color = {
    name: 'ahue',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private recordPageableService: RecordPageableService) {
    this.recordPageableService.read().subscribe(data => {
      const records = data.content;
      this.totalRecords = data.totalElements;
      let mp = new Map<string, number>();
      for (let record of records) {
        const key = record.gamePlatform;
        mp.set(key, (mp.get(key) || 0) + 1);
      }
      mp.forEach((value, name) => {
        this.dataChartByPlatform.push({name, value});
      });
    });
  }

  ngOnInit(): void {
  }

}
