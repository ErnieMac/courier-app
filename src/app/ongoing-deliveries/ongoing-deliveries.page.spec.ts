import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OngoingDeliveriesPage } from './ongoing-deliveries.page';

describe('OngoingDeliveriesPage', () => {
  let component: OngoingDeliveriesPage;
  let fixture: ComponentFixture<OngoingDeliveriesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OngoingDeliveriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OngoingDeliveriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
