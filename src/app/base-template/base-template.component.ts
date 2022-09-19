import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, debounceTime } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContactListService } from '../services/contact-list.service';
import { Contact } from '../utils/contact.interface';

@Component({
  selector: 'app-base-template',
  templateUrl: './base-template.component.html',
  styleUrls: ['./base-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseTemplateComponent implements OnInit {
  contacts$ = this.contactListService.getContacts();
  filterData$?: Observable<Contact[]>;
  constructor(private contactListService: ContactListService) {}

  ngOnInit(): void {
    this.filterData$ = this.contacts$;

    this.contactListService.searchTerm.subscribe((searchVal) => {
      this.filterData$ = this.contacts$.pipe(
        debounceTime(400),
        map((contacts) => {
          let filterData = contacts?.filter(
            (contact: Contact) =>
              contact.name.toLowerCase().includes(searchVal.toLowerCase()) ||
              contact.company_name.toLowerCase().includes(searchVal.toLowerCase()) ||
              contact.job.toLowerCase().includes(searchVal.toLowerCase()) ||
              contact.email.toLowerCase().includes(searchVal.toLowerCase()) ||
              contact.phone.toLowerCase().includes(searchVal.toLowerCase())
          );
          return searchVal === '' ? contacts : filterData;
        })
      );
    });
  }
}
