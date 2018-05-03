import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { State } from '../../reducers';
import * as AppActions from '../../actions/app';
import * as fromApp from '../../reducers/app';
import * as selectors from '../../selectors/selectors';
import * as utilities from '../../../utilities/utilities';

const propertyTypes = fromApp.defaultPresentationState;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private store: Store<State>) {}

  enterFeedback( $event: AppActions.AppActionTypes ) {
    return this.store.dispatch(
      new AppActions.OpenEnterFeedbackModal($event)
    );
  }
}

utilities.addPropertyGettersToPrototype({
  Component: AppComponent,
  selectors: selectors.properties.app,
  properties: Object.keys( propertyTypes )
});
