import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navp',
  templateUrl: './navp.component.html',
  styleUrls: ['./navp.component.scss']
  // standalone: true,
  // imports: [CommonModule]
})
export class NavpComponent implements OnInit {
  opened = false;
  constructor() { }

  ngOnInit(): void {
  }

}
