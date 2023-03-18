import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, of, switchMap, take, tap, throwError } from 'rxjs';
import { Contact } from 'app/modules/admin/pages/notices/notices.types';

@Injectable({
  providedIn: 'root'
})
export class NoticesService {

  private _contact: BehaviorSubject<Contact | null> = new BehaviorSubject(null);
  private _contacts: BehaviorSubject<Contact[] | null> = new BehaviorSubject(null);

  constructor(private _httpClient: HttpClient) { }

  get contact$(): Observable<Contact> {
    return this._contact.asObservable();
  }

  get contacts$(): Observable<Contact[]> {
    return this._contacts.asObservable();
  }

  getContacts(): Observable<Contact[]>
    {
        return this._httpClient.get<Contact[]>('api/apps/contacts/all').pipe(
            tap((contacts) => {
                this._contacts.next(contacts);
            })
        );
    }

    getContactById(id: string): Observable<Contact>
    {
        return this._contacts.pipe(
            take(1),
            map((contacts) => {

                // Find the contact
                const contact = contacts.find(item => item.id === id) || null;

                // Update the contact
                this._contact.next(contact);

                // Return the contact
                return contact;
            }),
            switchMap((contact) => {

                if ( !contact )
                {
                    return throwError('Could not found contact with id of ' + id + '!');
                }

                return of(contact);
            })
        );
    }
  
    uploadAvatar(id: string, avatar: File): Observable<Contact>
    {
        return this.contacts$.pipe(
            take(1),
            switchMap(contacts => this._httpClient.post<Contact>('api/apps/contacts/avatar', {
                id,
                avatar
            }, {
                headers: {
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    'Content-Type': avatar.type
                }
            }).pipe(
                map((updatedContact) => {

                    // Find the index of the updated contact
                    const index = contacts.findIndex(item => item.id === id);

                    // Update the contact
                    contacts[index] = updatedContact;

                    // Update the contacts
                    this._contacts.next(contacts);

                    // Return the updated contact
                    return updatedContact;
                }),
                switchMap(updatedContact => this.contact$.pipe(
                    take(1),
                    filter(item => item && item.id === id),
                    tap(() => {

                        // Update the contact if it's selected
                        this._contact.next(updatedContact);

                        // Return the updated contact
                        return updatedContact;
                    })
                ))
            ))
        );
    }
}
