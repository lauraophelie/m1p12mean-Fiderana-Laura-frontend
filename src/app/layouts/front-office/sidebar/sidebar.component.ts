import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BrandingComponent } from '../../full/sidebar/branding.component';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from '../../../material.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    BrandingComponent,
    TablerIconsModule,
    MaterialModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  @Input() showToggle = true;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  ngOnInit(): void {}
}
