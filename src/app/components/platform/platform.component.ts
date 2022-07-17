import { Component, OnInit } from '@angular/core';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { DataChart } from 'src/app/models/data-chart.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {

  dataChartByPlatform: DataChart = [];
  totalGames: number = 0;

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

  constructor(private gameService: GameService) {
    this.gameService.read().subscribe(games => {
      this.totalGames = games.length;
      let mp = new Map<string, number>();
      for (let game of games) {
        const key = game.platform
        mp.set(game.platform, mp.has(key) ? mp.get(key) as number + 1 : 1);
      }
      mp.forEach((value, name) => {
        this.dataChartByPlatform.push({name, value});
      });
    });
  }

  ngOnInit(): void {
  }

}
