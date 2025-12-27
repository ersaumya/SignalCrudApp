import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLists } from './contact-lists';

describe('ContactLists', () => {
  let component: ContactLists;
  let fixture: ComponentFixture<ContactLists>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactLists]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactLists);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
