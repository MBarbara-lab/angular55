import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CarTableComponent } from '../../components/car-table/car-table.component';

@Component({
  selector: 'app-dashboard',
  imports: [NavbarComponent, CardComponent, CarTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  ngOnInit() {
    
  }

}
