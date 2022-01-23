import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssignmentComponent } from './assignment/assignment.component';
import { BlockOneComponent } from './block-one/block-one.component';
import { BlockTwoComponent } from './block-two/block-two.component';
import { BlockThreeComponent } from './block-three/block-three.component';
import { BlockFourComponent } from './block-four/block-four.component';
@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,
    BlockOneComponent,
    BlockTwoComponent,
    BlockThreeComponent,
    BlockFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,  
    BrowserAnimationsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
