import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'
import { ApiCallsService } from '../services/api-calls.service'
import { Observable, of } from 'rxjs';
// import { BackgroundMode } from '@ionic-native/background-mode/ngx';
// import { FCM } from '@ionic-native/fcm/ngx';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic';
@Component({
  selector: 'app-business-dashboard',
  templateUrl: './business-dashboard.page.html',
  styleUrls: ['./business-dashboard.page.scss'],
})
export class BusinessDashboardPage implements OnInit {
  userDetails$: Observable<any> = of(this.loginService.currentUser.value)
  constructor(
    // private backgroundMode: BackgroundMode,
    private loginService: LoginService,
    private apiService: ApiCallsService
  ) { }

  ngOnInit() {
    // this.backgroundMode.enable();
    let currentUser = this.loginService.currentUser.value;
    console.log(this.loginService.currentUser.value)
    console.log(currentUser.userDetails.id)
    this.getToken(currentUser)
  }

  getToken(res) {

    FCM.requestPushPermission().then(hasPermission => {
      console.log('PERMISSION:', hasPermission)
      if (hasPermission) {
        FCM.getToken().then(token => {
          console.log('THIS IS FROM getToken()------->' + token);
          let data = {
            "userId": res.userDetails.id,
            "fcmToken": token
          }
          this.apiService.saveFCMToken(data).subscribe(res => {
            console.log(res)
          })
        }, error => {
          console.log('THIS IS ERROR-------->', error)
        });

        FCM.onNotification().subscribe(data => {
          console.log(data);
          if (data.wasTapped) {
            console.log('Received in background');
          } else {
            console.log('Received in foreground');
          }
        }, error => {
          console.log('error', error)
        });

        FCM.onTokenRefresh().subscribe(token => {
          console.log('THIS IS FROM onTokenRefresh()------->' + token);
        }, error => {
          console.log('THIS IS REFRESH ERROR-------->', error)
        });


        // subscribe to a topic
        FCM.subscribeToTopic('businesses');
      }
    })
  }

}
