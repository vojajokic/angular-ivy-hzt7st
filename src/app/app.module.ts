import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { lookupListToken, lookupLists } from './providers';
import { MockXHRBackend } from './mock-xhr-backend';
// import { MediaItemService } from './media-item.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective, 
    CategoryListPipe, 
    MediaItemFormComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    {provide: lookupListToken, useValue: lookupLists }, 
    { provide: HttpXhrBackend, useClass: MockXHRBackend }
  ]
})
export class AppModule {}