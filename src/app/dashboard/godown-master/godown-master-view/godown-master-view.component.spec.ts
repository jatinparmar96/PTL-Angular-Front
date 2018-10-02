import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GodownMasterViewComponent } from './godown-master-view.component';

describe('GodownMasterViewComponent', () => {
  let component: GodownMasterViewComponent;
  let fixture: ComponentFixture<GodownMasterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GodownMasterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GodownMasterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
