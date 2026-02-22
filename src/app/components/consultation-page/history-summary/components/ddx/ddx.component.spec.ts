import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdxComponent } from './ddx.component';

describe('DdxComponent', () => {
  let component: DdxComponent;
  let fixture: ComponentFixture<DdxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DdxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DdxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
