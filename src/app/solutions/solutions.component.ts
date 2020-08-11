import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {

  private modeldata:any={};
  constructor() { }

  ngOnInit() {
  }

  textinpopup(product){
     if(product == 'fleetmanagement'){
       this.modeldata.title = "Fleet Management";
       this.modeldata.description="Today, every business is moving on wheels irrespective of the category starting from brick-and-mortar companies to e-commerce websites, manufacturing and distribution centres. With the rising need, the owners of fleet services are expanding their businesses which involves a huge investment to buy vehicles and maintenance. The features of our fleet management solutions enable you to monitor and manage all your vehicles in real-time. Analysis of each vehicle provides insights to plan and manage the trips accordingly. Driver performance analytics gives inputs related to driving skills which indirectly affects vehicle performance.Easily organize vehicle maintenance and servicing to keep track of compliance and cost control. Our fleet management solutions help in vehicle optimization, route planning, and control on the operations of the fleet.";
     }
     if(product == 'schoolbus'){
      this.modeldata.title = "School Bus Management";
      this.modeldata.description="Safe transportation of school children is a big challenge to school management. School authorities are very much concerned about student’s safety, on-boarding them on time and dropping them safely at homes, bus routing, monitoring driver performance. Our school bus management solutions are designed to help both parents and school management. Parents can track the bus route with GPS tracker from any where, get notified on the status of the bus constantly to know any delay on arrival to the pick-up point and drop-off point. The special features of School Bus Management Solutions are notification alerts for unscheduled or unplanned routes & stops, traffic information to enroot to less traffic route.";
    }
    if(product == 'promtvehicle'){
      this.modeldata.title = "Promt Vehicle Servicing Solutions";
      this.modeldata.description="Servicing a vehicle promptly minimizes the maintenance costs. As people are busy with their life, and they could not spare time for servicing the vehicle regularly, sudden breakdowns take place and then approaches for servicing. To avoid such problems we developed a solution that gives service alerts whenever it is required. One major advantage with this device is, in case the vehicle is achieving the servicing period and it is out of the reach to the regular service location, it gives notification of the service provider and its location details with which we can reduce unnecessary breakdowns at the time of return travel.";
    }
    if(product == 'insurance'){
      this.modeldata.title = "Insurance Telematics Solutions";
      this.modeldata.description="Vehicle insurance has become one added investment included in a vehicle purchase. But, one can reduce the insurance premium of their vehicle by following some guidelines which we call it as Insurance Telematics Solutions. There are different types of vehicle users-personal and commercial. The personal user drives on an average 200-300km per month, where as commercial user drives 2000-3000km. But insurance premium paid by both users is the same.One can reduce the premium by practicing eco-driving, traffic rules, etc.";
    }
  }
}
