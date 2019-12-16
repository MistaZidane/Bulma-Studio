import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PanelsComponent } from './panels/panels.component';
import { LeftPanelComponent } from './panels/left-panel/left-panel.component';
import { RightPanelComponent } from './panels/right-panel/right-panel.component';
import { IframePanelComponent } from './panels/iframe-panel/iframe-panel.component';
import { LeftToolbarComponent } from './panels/left-panel/left-toolbar/left-toolbar.component';
import { ComponentToolbarComponent } from './panels/left-panel/component-toolbar/component-toolbar.component';
import { SubToolsComponent } from './panels/right-panel/sub-tools/sub-tools.component';
import { ElementPathComponent } from './panels/right-panel/element-path/element-path.component';
import { AppearanceComponent } from './panels/right-panel/appearance/appearance.component';
import { LayoutComponent } from './panels/right-panel/appearance/layout/layout.component';
import { AnimationComponent } from './panels/right-panel/appearance/animation/animation.component';
import { ToolbarComponent } from './panels/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import { CodeComponent } from './panels/code/code.component';
const appRoutes: Routes = [
  {path: 'design', component: IframePanelComponent},
      {path: 'code', component: CodeComponent},
      {path: '', redirectTo: 'design', pathMatch: 'full'},
]
@NgModule({
  declarations: [
    AppComponent,
    PanelsComponent,
    LeftPanelComponent,
    RightPanelComponent,
    IframePanelComponent,
    LeftToolbarComponent,
    ComponentToolbarComponent,
    SubToolsComponent,
    ElementPathComponent,
    AppearanceComponent,
    LayoutComponent,
    AnimationComponent,
    ToolbarComponent,
    CodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatExpansionModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
