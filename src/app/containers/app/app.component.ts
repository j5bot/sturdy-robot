import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as AppActions from '../../actions/app';
import * as fromApp from '../../reducers/app';
import * as selectors from '../../selectors/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title$: Observable<string>;
  message$: Observable<string>;
  showButtonText$: Observable<string>;
  showFeedback$: Observable<boolean>;
  error$: Observable<boolean>;
  errorMessage$: Observable<string>;

  constructor(
    private store: Store<fromApp.State>) {

      this.title$ = this.store.pipe(select(
        selectors.getAppTitle
      ));

      this.message$ = this.store.pipe(select(
        selectors.getAppMessage
      ));

      this.showButtonText$ = this.store.pipe(select(
        selectors.getAppShowButtonText
      ));

      this.showFeedback$ = this.store.pipe(select(
        selectors.getAppShowFeedback
      ));

      this.error$ = this.store.pipe(select(
        selectors.getAppError
      ));

      this.errorMessage$ = this.store.pipe(select(
        selectors.getAppErrorMessage
      ));

  }

  enterFeedback ( $event: AppActions.AppActionTypes ) {
    return this.store.dispatch.bind(this.store)(
      new AppActions.OpenEnterFeedbackModal($event)
    );
  }
}
