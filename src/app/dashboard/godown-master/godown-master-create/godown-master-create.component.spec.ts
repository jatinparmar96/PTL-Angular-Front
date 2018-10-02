import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GodownMasterCreateComponent } from './godown-master-create.component';

describe('GodownMasterCreateComponent', () => {
  let component: GodownMasterCreateComponent;
  let fixture: ComponentFixture<GodownMasterCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GodownMasterCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GodownMasterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
