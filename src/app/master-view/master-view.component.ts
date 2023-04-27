import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';
declare let $: any;

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements AfterViewInit {
  public northwindEmployees: any = null;

  @ViewChild('revealView') el!: ElementRef;

  constructor(
    private northwindService: NorthwindService
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('Employees').subscribe(data => this.northwindEmployees = data);
  }
  ngAfterViewInit(): void {
      $.ig.RevealSdkSettings.setBaseUrl("https://samples.revealbi.io/upmedia-backend/reveal-api/");

      $.ig.RVDashboard.loadDashboard("Sales", (dashboard: any) => {
          var revealView = new $.ig.RevealView(this.el.nativeElement);
          revealView.dashboard = dashboard;
      });
    }

}
