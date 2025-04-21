import { Component, OnInit } from '@angular/core';
import { Room } from './rooms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-rooms',
  imports: [NgIf],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };
  ngOnInit(): void {}
}
