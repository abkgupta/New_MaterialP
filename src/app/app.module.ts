import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavpComponent } from './navp/navp.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { MgridComponent } from './mgrid/mgrid.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { TabComponent } from './tab/tab.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import { MatsprComponent } from './matspr/matspr.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatslctComponent } from './matslct/matslct.component';
import {MatSelectModule} from '@angular/material/select';
import { AutocomplComponent } from './autocompl/autocompl.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ChckboxComponent } from './chckbox/chckbox.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    NavpComponent,
    MgridComponent,
    TabComponent,
    MatsprComponent,
    MatslctComponent,
    AutocomplComponent,
    ChckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatStepperModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCheckboxModule
    // MatFormFieldControl
    // NavpComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
