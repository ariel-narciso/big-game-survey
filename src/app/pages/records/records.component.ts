import { OnInit, Component } from '@angular/core';
import { Record } from 'src/app/models/record.model';
import { RecordPageableService } from 'src/app/services/record-pageable.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent {

  buttonData = {
    buttonName: 'VER GRÁFICO',
    routerLink: '/charts'
  }

  dataSource: Record[] = [];
  pages: number[] = [];
  linesPerPage: number = 12
  currentPage: number = 0

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'moment', 'name', 'age', 'gamePlatform',
    'genreName', 'gameTitle'
  ];

  constructor(private recordPageableService: RecordPageableService) {
    this.recordPageableService.read({
      linesPerPage: this.linesPerPage, page: 0
    }).subscribe(
      data => {
        this.dataSource = data.content;
        for (let i = 0; i < Math.ceil(data.totalElements / this.linesPerPage); i++) {
          this.pages.push(i);
        }
      }
    );
  }

  getPage(page: number): void {
    this.recordPageableService.read(
      {linesPerPage: this.linesPerPage, page}
    ).subscribe(
      data => {
        this.dataSource = data.content;
        this.currentPage = page;
      }
    )
  }
}
