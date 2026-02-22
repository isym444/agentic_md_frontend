import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpcComponent } from './hpc.component';

describe('HpcComponent', () => {
  let component: HpcComponent;
  let fixture: ComponentFixture<HpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HpcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
