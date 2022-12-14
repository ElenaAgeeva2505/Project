import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupAlignExampleComponent } from './tab-group-align-example.component';

describe('TabGroupAlignExampleComponent', () => {
  let component: TabGroupAlignExampleComponent;
  let fixture: ComponentFixture<TabGroupAlignExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabGroupAlignExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabGroupAlignExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
