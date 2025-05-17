import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnChanges {
  @Input() rooms: RoomList[] = [];
  @Input() title: String = '';
  @Output() selectedRoom = new EventEmitter<RoomList>();
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented');
    console.log(changes);
  }
  selectRoom(room: RoomList) {
    console.log(room);
    this.selectedRoom.emit(room);
  }
}
