import { Component } from '@angular/core';
import { PassengerCalculatorService } from '../service/passenger-calculator.service';

@Component({
  selector: 'app-registration',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent {

  showRecentInput: boolean = false;
  vehicleIds: string = '';
  currentVehicleId: string = '';
  idealPassengerCount: number = 0;
  previousCalculations: any[] = [];

  constructor(private service:PassengerCalculatorService) {  }

  ngOnInit() {
    this.showRecentInput = true;                                  // To show the recent input in the previous results section as the page has been refreshed
    this.getPreviousCalculations();
  }

  onSubmit(): void {
    this.showRecentInput = false;                                 // To hide the recent input from the previous results section
    this.service.calculatePassengers(this.vehicleIds).subscribe(
      (response) => {
        this.idealPassengerCount = response.idealNumberOfPassengers;
        this.currentVehicleId = this.vehicleIds;                  // To display the current input after clicking submit
        this.getPreviousCalculations();
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  getPreviousCalculations(): void {
    this.service.getPreviousCalculations().subscribe(
      (response) => {
        this.previousCalculations = response;
        if(!this.showRecentInput){                    // To prevent the current input from being in the previous results
           this.previousCalculations.pop();
        }
        this.previousCalculations.reverse();          // To display the most recent input first
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
