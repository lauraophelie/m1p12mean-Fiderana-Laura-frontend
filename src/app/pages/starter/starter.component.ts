import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { AppNewCustomersComponent } from '../../components/new-customers/new-customers.component';
import { AppTotalIncomeComponent } from '../../components/total-income/total-income.component';
import { AppDailyActivitiesComponent } from '../../components/daily-activities/daily-activities.component';
import { AppBlogCardsComponent } from '../../components/blog-card/blog-card.component';
import { AppRevenueProductComponent } from '../../components/revenue-product/revenue-product.component';
import { AppRevenueForecastComponent } from '../../components/revenue-forecast/revenue-forecast.component';

@Component({
  selector: 'app-starter',
  standalone: true,
  imports: [
    MaterialModule,
    AppNewCustomersComponent,
    AppTotalIncomeComponent,
    AppDailyActivitiesComponent,
    AppBlogCardsComponent,
    AppRevenueProductComponent,
    AppRevenueForecastComponent,
  ],
  templateUrl: './starter.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class StarterComponent {}
