import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutoCompletePlacesComponent } from './auto-complete-places.component';

describe('AutoCompletePlacesComponent', () => {
  let component: AutoCompletePlacesComponent;
  let fixture: ComponentFixture<AutoCompletePlacesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoCompletePlacesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutoCompletePlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
