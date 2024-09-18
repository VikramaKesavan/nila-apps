import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessment-process',
  templateUrl: './assessment-process.component.html',
  styleUrls: ['./assessment-process.component.css']
})
export class AssessmentProcessComponent implements OnInit {
  barGroups = [
    {
      name: "Assignment",
      bars: [
        { color: "green", height: "70%" },
        { color: "green", height: "50%" },
        { color: "green", height: "60%" },
        { color: "white", height: "40%" }
      ]
    },
    {
      name: "Quiz",
      bars: [
        { color: "green", height: "60%" },
        { color: "green", height: "40%" },
        { color: "white", height: "70%" },
        { color: "green", height: "50%" },
        { color: "green", height: "10%" }
      ]
    },
    {
      name: "Presentation",
      bars: [
        { color: "green", height: "80%" },
        { color: "green", height: "60%" },
        { color: "green", height: "30%" }
      ]
    },
    {
      name: "Lab",
      bars: [
        { color: "white", height: "80%" },
        { color: "green", height: "90%" },
        { color: "white", height: "20%" },
        { color: "green", height: "50%" }
      ]
    },
    {
      name: "Viva",
      bars: [
        { color: "green", height: "80%" }
      ]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
