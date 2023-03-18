import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../notices.types';

@Component({
  selector: 'app-evidences-details',
  templateUrl: './evidences-details.component.html',
  styleUrls: ['./evidences-details.component.scss']
})
export class EvidencesDetailsComponent implements OnInit {

  @ViewChild('avatarFileInput') private _avatarFileInput: ElementRef;
  
  contactForm: FormGroup;
  contact: Contact;
  
  constructor(
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    // Create the contact form
    this.contactForm = this._formBuilder.group({
      id: [''],
      avatar: [null],
      name: ['', [Validators.required]],
      emails: this._formBuilder.array([]),
      phoneNumbers: this._formBuilder.array([]),
      title: [''],
      address: [null],
      notes: [null],
      tags: [[]]
    });

    this.contact = {
      id          : 'cd5fa417-b667-482d-b208-798d9da3213c',
      avatar      : 'assets/images/evidences/evidence_0001.png',
      background  : 'assets/images/cards/14-640x480.jpg',
      name        : 'Dejesus Michael',
      emails      : [
          {
              email: 'dejesusmichael@mail.org',
              label: 'Personal'
          },
          {
              email: 'michael.dejesus@vitricomp.io',
              label: 'Work'
          }
      ],
      phoneNumbers: [
          {
              country    : 'bs',
              phoneNumber: '984 531 2468',
              label      : 'Mobile'
          },
          {
              country    : 'bs',
              phoneNumber: '806 470 2693',
              label      : 'Work'
          }
      ],
      title       : 'Track Service Worker',
      company     : 'Vitricomp',
      birthday    : '1975-01-10T12:00:00.000Z',
      address     : '279 Independence Avenue, Calvary, Guam, PO4127',
      notes       : '<p>Do incididunt cillum duis eu pariatur enim proident minim officia amet proident consequat consequat qui consequat magna magna occaecat aliquip culpa pariatur velit nisi nostrud irure eu ullamco exercitation sint.</p><p>Cillum deserunt laborum laborum quis nisi enim et aliquip labore excepteur in excepteur labore amet in ipsum ipsum nostrud deserunt lorem nisi voluptate dolor minim enim ut eu cupidatat enim.</p>',
      tags        : [
          '56ddbd47-4078-4ddd-8448-73c5e88d5f59'
      ]
  }

  }

  uploadAvatar(fileList: FileList): void {
    // Return if canceled
    if (!fileList.length) {
      return;
    }

    const allowedTypes = ['image/jpeg', 'image/png'];
    const file = fileList[0];

    // Return if the file is not allowed
    if (!allowedTypes.includes(file.type)) {
      return;
    }

    // Upload the avatar
    // this._contactsService.uploadAvatar(this.contact.id, file).subscribe();

    this.contact.avatar = 'assets/images/evidences/' + file.name
  }

  /**
   * Remove the avatar
   */
  removeAvatar(): void {
    // Get the form control for 'avatar'
    const avatarFormControl = this.contactForm.get('avatar');

    // Set the avatar as null
    avatarFormControl.setValue(null);

    // Set the file input value as null
    this._avatarFileInput.nativeElement.value = null;

    // Update the contact
    this.contact.avatar = null;
  }


}
