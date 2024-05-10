import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-view-transtion',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>view-transtion works!</p>`,
  styleUrl: './view-transtion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewTranstionComponent { }
