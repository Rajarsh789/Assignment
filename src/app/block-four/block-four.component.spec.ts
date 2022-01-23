import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockFourComponent } from './block-four.component';

describe('BlockFourComponent', () => {
  let component: BlockFourComponent;
  let fixture: ComponentFixture<BlockFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
