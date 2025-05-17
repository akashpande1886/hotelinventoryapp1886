import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-rooms',
  imports: [CommonModule, RoomsListComponent, HeaderComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  selectedRoom!: RoomList;

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  // console.log(headerComponent)
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
  selectRoom(room: RoomList) {
    console.log(room);
    this.selectedRoom = room;
  }
  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'AC, Free wifi, Bathroom,Kitchen',
      price: 700,
      photos: 'https://unsplash.com/s/photos/living-room',
      checkinTime: new Date('18-Nov,2021'),
      checkoutTime: new Date('20-Nov,2021'),
      rating: 3.3,
    };
    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
  ngDoCheck(): void {
    console.log('on changes is called.');
  }
  ngAfterViewInit() {
    this.headerComponent.title = 'Rooms View';
  }
  ngAfterViewChecked() {}
}
