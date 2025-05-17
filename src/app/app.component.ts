import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RoomsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';
  role = 'User';
  @ViewChild('name', { static: true }) name!: ElementRef;
  ngOnInit() {
    // this.name.nativeElement.innerText = 'Akash Pande';
    this.name.nativeElement.innerText = 'Hiltons';
  }
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  // ngAfterViewInit(): void {
  //   //dynamic loading of a component
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
}
