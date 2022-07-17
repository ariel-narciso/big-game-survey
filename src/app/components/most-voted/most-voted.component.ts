import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { DataChart } from 'src/app/models/data-chart.model';
import { RecordPageableService } from 'src/app/services/record-pageable.service';

@Component({
  selector: 'app-most-voted',
  templateUrl: './most-voted.component.html',
  styleUrls: ['./most-voted.component.css']
})
export class MostVotedComponent {

  dataChartMostVoted: DataChart = [];

  // view: any[] = [700, 200];

  // options
  showXAxis: boolean = false;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = false;
  yAxisLabel: string = 'Country';
  showYAxisLabel: boolean = false;
  xAxisLabel: string = 'Population';

  colorScheme: Color = {
    name: 'ahue',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454']
  };

  constructor(private recordPageableService: RecordPageableService) {
    this.recordPageableService.read().subscribe(
      recordPageable => {
        const records = recordPageable.content;
        let mp = new Map<string, number>();
        for (let record of records) {
          const key = `${record.gameTitle} | ${record.gamePlatform}`;
          if (mp.has(key)) {
            mp.set(key, mp.get(key) as number + 1);
          } else {
            mp.set(key, 1);
          }
        }
        let ans: DataChart = [];
        mp.forEach((value, name) => {
          ans.push({ name, value });
        });
        ans.sort((a, b) => {
          if (a.value > b.value || (a.value == b.value && a.name < b.name)) {
            return -1;
          }
          return 1;
        });
        this.dataChartMostVoted = ans.splice(0, 8);
        // console.log(this.dataChartMostVoted);
      }
    )
  }
}
