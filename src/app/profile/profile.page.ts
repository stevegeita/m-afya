import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, IonicModule } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { ProfilesService} from '../profiles.service';
import { IdeaService, Profile } from '../idea.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {  
  profile: Profile={
   firstname: '',
   lastname: '',
   gender: '',
   age: '',
   insurance: '',
   contact: '',
   allergies: '',
   blood: '',
   drug: ''

  };
  id= null;
  public userProfile: any;
  public firstname: any;
  lastname: any;
  contact: any;
  allergies: any;
  blood: any;
  drug: any;
  insurance: any;
  constructor(
    private alertCtrl: AlertController,
    private authService: AuthService,
    private profileService: ProfilesService,
    private router: Router,
    private activatedRoute: ActivatedRoute, private ideaService: IdeaService,
    private toastCtrl: ToastController,
    
  ) {}

  ngOnInit() {
    this.profileService
    .getUserProfile()
    .get()
    .then( userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.data();
      this.firstname = userProfileSnapshot.data().firstname;
      this.lastname = userProfileSnapshot.data().lastname;
      this.contact = userProfileSnapshot.data().contact;
      this.allergies = userProfileSnapshot.data().allergies;
      this.blood = userProfileSnapshot.data().blood;
      this.drug = userProfileSnapshot.data().drug;
      this.insurance= userProfileSnapshot.data().insurance;
    });
  }
  logOut(): void {
    this.authService.logoutUser().then( () => {
      this.router.navigateByUrl('login');
    });
  }
  
//   async updateName(): Promise<void> {
//     const alert = await this.alertCtrl.create({
//       subHeader: 'Your first name & last name',
//       inputs: [
//         {
//           type: 'text',
//           name: 'firstName',
//           placeholder: 'Your first name',
//           value: this.userProfile.firstName,
//         },
//         {
//           type: 'text',
//           name: 'lastName',
//           placeholder: 'Your last name',
//           value: this.userProfile.lastName,
//         },
//       ],
//       buttons: [
//         { text: 'Cancel' },
//         {
//           text: 'Save',
//           handler: data => {
//             this.profileService.updateName(data.firstName, data.lastName);
//           },
//         },
//       ],
//     });
//     await alert.present();
//   }
//   async updateEmail(): Promise<void> {
//     const alert = await this.alertCtrl.create({
//       inputs: [
//         { type: 'text', name: 'newEmail', placeholder: 'Your new email' },
//         { name: 'password', placeholder: 'Your password', type: 'password' },
//       ],
//       buttons: [
//         { text: 'Cancel' },
//         {
//           text: 'Save',
//           handler: data => {
//             this.profileService
//               .updateEmail(data.newEmail, data.password)
//               .then(() => {
//                 console.log('Email Changed Successfully');
//               })
//               .catch(error => {
//                 console.log('ERROR: ' + error.message);
//               });
//           },
//         },
//       ],
//     });
//     await alert.present();
//   }
  
//   async updatePassword(): Promise<void> {
//     const alert = await this.alertCtrl.create({
//       inputs: [
//         { name: 'newPassword', placeholder: 'New password', type: 'password' },
//         { name: 'oldPassword', placeholder: 'Old password', type: 'password' },
//       ],
//       buttons: [
//         { text: 'Cancel' },
//         {
//           text: 'Save',
//           handler: data => {
//             this.profileService.updatePassword(
//               data.newPassword,
//               data.oldPassword
//             );
//           },
//         },
//       ],
//     });
//     await alert.present();
//   }
// }
ionViewWillEnter() {
  IonicModule.forRoot({ swipeBackEnabled: true })
  if (this.id) {
    this.ideaService.getProfile(this.id).subscribe(profile => {
      this.profile = this.profile;
    });
  }
}


}