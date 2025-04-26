import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';

@Component({
  selector: 'app-rooms',
  imports: [CommonModule, RoomsListComponent],
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
  hideRoomList = false;
  roomList: RoomList[] = [];
  toggleList() {
    this.hideRoomList = !this.hideRoomList;
  }
  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'AC, Free wifi, Bathroom,Kitchen',
        price: 400,
        photos: 'https://unsplash.com/s/photos/living-room',
        checkinTime: new Date('11-Nov,2021'),
        checkoutTime: new Date('12-Nov,2021'),
        rating: 4.3,
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room',
        amenities: 'AC, Free wifi, TV, Bathroom,Kitchen',
        price: 500,
        photos: 'https://unsplash.com/s/photos/living-room',
        checkinTime: new Date('11-Nov,2021'),
        checkoutTime: new Date('12-Nov,2021'),
        rating: 4.5,
      },
      {
        roomNumber: 3,
        roomType: 'Deluxe Room',
        amenities: 'AC, Free wifi, TV, Bathroom,Kitchen',
        price: 800,
        photos: 'https://unsplash.com/s/photos/living-room',
        checkinTime: new Date('11-Nov,2021'),
        checkoutTime: new Date('12-Nov,2021'),
        rating: 2.9,
      },
    ];
  }
}
