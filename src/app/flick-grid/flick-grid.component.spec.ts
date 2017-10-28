import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickGridComponent } from './flick-grid.component';

describe('FlickGridComponent', () => {
  let component: FlickGridComponent;
  let fixture: ComponentFixture<FlickGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlickGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
