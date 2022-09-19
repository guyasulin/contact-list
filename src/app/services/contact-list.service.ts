import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, from, throwError, of, Subject } from 'rxjs';
import { Contact } from '../utils/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  searchTerm = new Subject<string>();

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>('https://retoolapi.dev/xJfD1o/data');
  }

  public search(keyword:string) {
    return this.searchTerm.next(keyword);
  }
}
