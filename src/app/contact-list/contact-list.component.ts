import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../utils/contact.interface';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactListComponent {
  @Input() contacts$?: Observable<Contact[]>;
  @ViewChild('scroller') scroller!: CdkVirtualScrollViewport;

}
