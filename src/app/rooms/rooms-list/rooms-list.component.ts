import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomList } from '../rooms';
@Component({
  selector: 'app-rooms-list',
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
})
export class RoomsListComponent {
  @Input() rooms: RoomList[] = [];
}
