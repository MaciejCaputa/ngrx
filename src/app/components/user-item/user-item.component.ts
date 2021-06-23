import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { User } from 'src/app/models';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserItemComponent {
  @Input() user!: User;
}
