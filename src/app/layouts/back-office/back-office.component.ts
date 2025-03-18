import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NavItemComponent } from './sidebar/nav-item/nav-item.component';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { TablerIconsModule } from 'angular-tabler-icons';
import { HeaderComponent } from './header/header.component';
import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { CoreService } from '../../services/core.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { filter } from 'rxjs/operators';
import { navItems } from './sidebar/sidebar-back-data';

const MOBILE_VIEW = 'screen and (max-width: 768px)';
const TABLET_VIEW = 'screen and (min-width: 769px) and (max-width: 1024px)';

@Component({
  selector: 'app-back-office',
  standalone: true,
  imports: [
    RouterModule,
    NavItemComponent,
    MaterialModule,
    CommonModule,
    SidebarComponent,
    NgScrollbarModule,
    TablerIconsModule,
    HeaderComponent
  ],
  templateUrl: './back-office.component.html',
  styleUrl: './back-office.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class BackOfficeComponent implements OnInit {
  navItems = navItems;

  @ViewChild('leftsidenav')
  public sidenav: MatSidenav | undefined;
  resView = false;

  @ViewChild('content', { static: true }) content!: MatSidenavContent;

  options = this.settings.getOptions();
  private readonly layoutChangesSubscription = Subscription.EMPTY;
  private isMobileScreen = false;
  private isContentWidthFixed = true;
  private isCollapsedWidthFixed = false;
  private readonly htmlElement!: HTMLHtmlElement;

  get isOver(): boolean {
      return this.isMobileScreen;
    }

  constructor(
      private readonly settings: CoreService,
      private readonly router: Router,
      private readonly breakpointObserver: BreakpointObserver,
  ) {
      this.htmlElement = document.querySelector('html')!;
      this.layoutChangesSubscription = this.breakpointObserver
        .observe([MOBILE_VIEW, TABLET_VIEW])
        .subscribe((state) => {
          this.options.sidenavOpened = true;
          this.isMobileScreen = state.breakpoints[MOBILE_VIEW];
          if (!this.options.sidenavCollapsed) {
            this.options.sidenavCollapsed = state.breakpoints[TABLET_VIEW];
          }
        });

      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe((e) => {
          this.content.scrollTo({ top: 0 });
        });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
      this.layoutChangesSubscription.unsubscribe();
  }

  toggleCollapsed() {
      this.isContentWidthFixed = false;
      this.options.sidenavCollapsed = !this.options.sidenavCollapsed;
      this.resetCollapsedState();
  }

  resetCollapsedState(timer = 400) {
      setTimeout(() => this.settings.setOptions(this.options), timer);
  }

  onSidenavClosedStart() {
      this.isContentWidthFixed = false;
  }

  onSidenavOpenedChange(isOpened: boolean) {
      this.isCollapsedWidthFixed = !this.isOver;
      this.options.sidenavOpened = isOpened;
  }
}
