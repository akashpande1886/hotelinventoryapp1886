import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-rooms',
  imports: [NgIf, NgFor],
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
  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'AC, Free wifi, Bathroom,Kitchen',
      price: 400,
      photos: 'https://unsplash.com/s/photos/living-room',
      checkinTime: new Date('11-Nov,2021'),
      checkoutTime: new Date('12-Nov,2021'),
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'AC, Free wifi, TV, Bathroom,Kitchen',
      price: 500,
      photos: 'https://unsplash.com/s/photos/living-room',
      checkinTime: new Date('11-Nov,2021'),
      checkoutTime: new Date('12-Nov,2021'),
    },
  ];
  ngOnInit(): void {}
}
