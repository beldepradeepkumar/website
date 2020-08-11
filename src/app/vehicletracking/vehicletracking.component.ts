import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicletracking',
  templateUrl: './vehicletracking.component.html',
  styleUrls: ['./vehicletracking.component.css']
})
export class VehicletrackingComponent implements OnInit {
public subtitle:string;
public content:string;
yourBooleanValue: boolean;
public worksfor:any={};

  constructor() { }

  ngOnInit() {
    this.yourBooleanValue = true;
    this.keyfeaturesdata("livetracking")
  }

  keyfeaturesdata(feature){
     if(feature == "livetracking"){
      this.subtitle = "Live Tracking";
      this.content = "Global Positioning System (GPS) determines the precise location ofa vehicle or other asset to record the position at regular intervals. The data can be storedwithin the tracking unit, or can be transmitted to a Server connected to the Internet usinga cellular (GPRS or SMS), modem embedded in the unit.";    
     }
     if(feature == "fuelstats"){
      this.subtitle = "Fuel Statistics";
      this.content = "Gives alerts related to fuel consumption of a vehicle based onspeed and distance.";
     }
     if(feature == "servicealert"){
      this.subtitle = "Repair/ Service Alerts";
      this.content = "Alerts related to repairs when there is any damage in any vehicle parts and service alertsafter travelling a maximum number of kilometres.";
     }
     if(feature == "drivinganalysis"){
      this.subtitle = "Driving Analysis";
      this.content = "Customised feedback of driving analysis based on the driving such as economy rate andfuel consumption for better condition of your vehicle.";
     }
     if(feature == "lowbattery"){
      this.subtitle = "Low Battery Alerts";
      this.content = "BMS calculates the secondary data and provides a report to control its environment toauthenticate it and / or balance it.";
     }
}



vtsworksfor(work){
    if(work == 'single'){
       this.worksfor.subtitle="Single User (Who Owns a Car)";
       this.worksfor.content="Anyone who owns a car can use VTS device to trackvehicle & driver performance analytics. Safe guard your vehicle with functionalitypredictions related to fuel, engine monitoring, speed, ignition on/off and a lot more andinitiate prompt response.";
    }
    if(work == 'fleet'){
      this.worksfor.subtitle="Fleet Management Solutions";
      this.worksfor.content="Today, every business is moving on wheels irrespective of the category starting from brick-and-mortar companies to e-commerce websites and manufacturing & distribution centers.With the rising need, the owners of fleet services are expanding their businesses whichinvolves a huge investment to buy vehicles and maintenance. The features of our fleetmanagement solutions enable you to monitor and manage all your vehicles in real-time.Analysis of each vehicle provides insights to plan and manage the trips accordingly. Driverperformance analytics gives inputs related to driving skills which indirectly affects vehicleperformance. Easily organize vehicle maintenance and servicing to keep track of complianceand cost control. Our fleet management solutions help in vehicle optimization, routeplanning, and control on the operations of the fleet.";
    }
   if(work == 'school'){
    this.worksfor.subtitle="School Bus Management Solution";
    this.worksfor.content="Safe transportation of school children is a big challenge to school management. Schoolauthorities are very much concerned about student’s safety, on-boarding them on time anddropping them safely at homes, bus routing, monitoring driver performance. Our school busmanagement solutions are designed to help both parents and school management. Parents cantrack the bus route with GPS tracker from anywhere, get notified on the status of the busconstantly to know any delay on arrival to the pick-up point and drop-off point. The specialfeatures of School Bus Management Solutions are notification alerts for unscheduled orunplanned routes & stops, traffic information to enroot to less traffic route.";
    }
  if(work == 'promt'){
    this.worksfor.subtitle="Prompt Vehicle Servicing Solution";
    this.worksfor.content="Servicing a vehicle promptly minimizes the maintenance costs. As people are busy with theirlife, and they could not spare time for servicing the vehicle regularly, sudden breakdownstake place and then approaches for servicing. To avoid such problems we developed asolution that gives service alerts whenever it is required. One major advantage with thisdevice is, in case the vehicle is achieving the servicing period and it is out of the reach to theregular service location, it gives notification of the service provider and its location detailswith which we can reduce unnecessary breakdowns at the time of return travel.";
  }
  if(work == 'insurance'){
    this.worksfor.subtitle="Insurance Telematics Solution";
    this.worksfor.content="Vehicle insurance has become one added investment included in a vehicle purchase. But, onecan reduce the insurance premium of their vehicle by following some guidelines which wecall it as Insurance Telematics Solutions. There are different types of vehicle users-personaland commercial. The personal user drives on an average 200-300km per month, whereascommercial user drives 2000-3000km. But insurance premium paid by both users is the same.One can reduce the premium by practicing eco-driving, traffic rules, etc.";
  }
}
}
