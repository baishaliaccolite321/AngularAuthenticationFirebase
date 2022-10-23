import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'angulartutorials';

  Click:boolean = true;
  visible:boolean = false;

  onclick()
  {
    this.Click = !this.Click;
    this.visible = !this.visible 
  }
  
  ngOnInit(): void {
  }

}
