import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';

import { MatTableDataSource } from '../../lib/table-data-source';
import { MatGroupBy, Grouping } from '../../lib/groupBy';

import { Candidates, SampleDataService } from '../sample-data.service';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss']
})

export class BasicTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  columns: any[];
  displayedColumns: string[];
  groupedColumns: string[];
  dataSource = new MatTableDataSource<Candidates>();

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private sampleDataService: SampleDataService,
    private matGroupBy: MatGroupBy,
  ) { }

  getDisplayedColumns(): string[] {
    console.log("LAKIS", this);
    // const isMobile = this.currentDisplay === 'mobile';

    return ['groupHeader'];
    // return this.columns
    //   .filter(cd => cd.group)
    //   .map(cd => cd.columnDef);
  }

  ngOnInit() {
    this.columns = this.sampleDataService.axes.map(c => c);
    this.displayedColumns = this.columns.map(c => c.columnDef);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.matGroupBy.grouping = new Grouping(
      this.columns.filter(c => c.group).map(c => c.columnDef)
    );
    this.dataSource.groupBy = this.matGroupBy;
    this.dataSource.data = this.sampleDataService.candidates;
    console.log('THIS.DATASOURCE', this.dataSource);
  }
}
