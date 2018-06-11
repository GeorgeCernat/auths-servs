import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginFormComponent } from './../components/login-form/login-form.component';
import { UserService } from './../services/user/user.service';
import { InputValidatorService } from '../services/input-validator/input-validator.service';
import { ConstantsService } from './../services/constants/constants.service';
import { AuthGuard } from './../guards/auth/auth.guard';
import { RegisterComponent } from '../components/register/register.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

// "../node_modules/jquery/dist/jquery.js",
// "../node_modules/tether/dist/js/tether.min.js",
// "../node_modules/bootstrap-v4-dev/dist/js/bootstrap.min.js" -> in angular cli -> script


const appRoutes: Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterComponent,
    PageNotFoundComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    AuthGuard,
    UserService,
    InputValidatorService,
    ConstantsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
