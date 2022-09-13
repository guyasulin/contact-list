import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConectListComponent } from './conect-list.component';

describe('ConectListComponent', () => {
  let component: ConectListComponent;
  let fixture: ComponentFixture<ConectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConectListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
