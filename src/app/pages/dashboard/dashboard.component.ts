import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CarTableComponent } from '../../components/car-table/car-table.component';
import { DashboardService } from '../../services/dashboard.service';
import { Car } from '../../models/car'

@Component({
  selector: 'app-dashboard',
  imports: [NavbarComponent, CardComponent, CarTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit {
  dashboardService = inject(DashboardService)

  cars: Car[] = []

  selectedCar: Car = {
    id: -1,
    vehicle: "",
    volumetotal: 0,
    connected: 0,
    softwareUpdates: 0,
    vin: "",
    img: ""
  }

  ngOnInit() {
    this.dashboardService.getVehicles().subscribe({
      error: () => {},
      next: (cars) => {
        this.cars = Object.values(cars) as Car[]
        this.selectedCar = cars[0]
      }
    })
  }

}