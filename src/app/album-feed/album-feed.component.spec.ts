import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumFeedComponent } from './album-feed.component';

describe('AlbumFeedComponent', () => {
  let component: AlbumFeedComponent;
  let fixture: ComponentFixture<AlbumFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
