/**
 * Created by priya on 3/5/16.
 */
import { Component , OnInit, OnDestroy} from 'angular2/core';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/app.dashboard.html'
})
export class DashboardComponent implements OnInit, OnDestroy {
  ngOnInit() {
    console.log('ngOnInit');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}

