import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { catchError, debounceTime, distinctUntilChanged, map, Observable, Subject, switchMap, throwError } from 'rxjs';
import { Contact } from '../utils/contact.interface';
import { startWith } from 'rxjs/operators';
import { ContactListService } from '../services/contact-list.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {
	searchForm = new FormGroup({
		search: new FormControl('')
  });

  constructor(private contactListService: ContactListService) { }

  search(event:  Event) {
    const value = (event.target as HTMLInputElement).value;
    this.contactListService.search(value)
  }
}
