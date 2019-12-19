import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  
})
export class RegisterPage {
  public signupForm: FormGroup;
  public loading: any;
  user: any;
  aon :boolean;
  apa: boolean;
  selectedRadioGroup: any;
  insurance: any;
  selectedType: any;
 
  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private formBuilder: FormBuilder,
    public afAuth: AngularFireAuth,
		public afstore: AngularFirestore,
		// public user: UserService,
		public alertController: AlertController,
		public router: Router
  ) 
 
    
  
  {
    this.signupForm = this.formBuilder.group({
      email: [
        '',
        Validators.compose([Validators.required, Validators.email]),
      ],
      password: [
        '',
        Validators.compose([Validators.minLength(6), Validators.required]),
      ],
      firstname: [
        '',
        Validators.compose([Validators.required]),
      ],
      lastname: [
        '',
        Validators.compose([Validators.required]),
      ],
      contact:[
        '',
        Validators.compose([Validators.required]),
      ],
      insurance:[
        '',
        Validators.compose([Validators.required]),
      ],
      allergies:[
        '',
        
      ],
      blood:[
        '',
        Validators.compose([Validators.required]),
      ],
      drugs:[
        '',
      ]
     
    });
    
  }

  ngOnInit(){}

  async signupUser(signupForm: FormGroup): Promise<void> {
    if (!signupForm.valid) {
      console.log(
        'Need to complete the form, current value: ', signupForm.value
      );
    } else {
      
      const email: string = signupForm.value.email;
      const password: string = signupForm.value.password;
      const firstname: string = signupForm.value.firstname;
      const lastname: string = signupForm.value.lastname;
      const insurance= signupForm.value.insurance;
      const allergies: string= signupForm.value.allergies;
      const blood= signupForm.value.blood;
      const drugs: string= signupForm.value.drugs;
      const contact: string= signupForm.value.contact;
      
      this.loading = await this.loadingCtrl.create();
        await this.loading.present(); 
       
      try {
        
        const res = await this.afAuth.auth.createUserWithEmailAndPassword( email, password)
  
        this.afstore.doc(`users/${res.user.uid}`).set({
          firstname, lastname, insurance, allergies, blood, drugs,contact });

        
        this.loading.dismiss().then(() => {
          this.router.navigateByUrl('tabs/home');
          //this.presentAlert('Success', 'You are registered!')
        });

      } catch(error) {
        console.dir(error)
      }
    }
    
  }presentAlert(arg0: string, arg1: string) {
    throw new Error("Method not implemented.");
  }
}
