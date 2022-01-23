import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockThreeComponent } from './block-three.component';

describe('BlockThreeComponent', () => {
  let component: BlockThreeComponent;
  let fixture: ComponentFixture<BlockThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
