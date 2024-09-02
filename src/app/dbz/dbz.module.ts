import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { mainpagecomponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddcharacterComponent } from './components/addcharacter/addcharacter.component';





@NgModule({
  declarations: [
   mainpagecomponent,
   ListComponent,
   AddcharacterComponent,

  ],
  exports:[
   mainpagecomponent
  ],
  imports: [
    CommonModule,
    FormsModule

  ]
})
export class DbzModule { }



