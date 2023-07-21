import { Component } from '@angular/core';
import { User } from '../user';
import { UserRegistrationService } from '../user-registration.service';
import { PassengerDetail } from '../passenger-detail';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  user: User = new User("","",0,"");
  message: any;
  passengerDetail:PassengerDetail = new PassengerDetail("",0);


  constructor(private service:UserRegistrationService) {

  }

  ngOnInit() {
     this.getPreviousCalculations();
  }

  public registerNow(){
  //   // let resp = this.service.doRegistration(this.user);
  //   // resp.subscribe((data)=>this.message=data);

    let resp2 = this.service.calculatePassengers(this.user.email);
    resp2.subscribe((data)=>this.passengerDetail=data);
    console.log(resp2);
  }

  vehicleIds: string = '';
  vehicleIds2: string = '';
  idealPassengerCount: number | null = null;
  previousCalculations: any[] = [];

  onSubmit(): void {
    // console.log("VID: "+ this.vehicleIds);
    this.service.calculatePassengers(this.vehicleIds).subscribe(
      (response) => {
        this.idealPassengerCount = response.idealNumberOfPassengers;
        this.vehicleIds2 = this.vehicleIds;
        this.vehicleIds = '';
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
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }



}
