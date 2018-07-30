import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { WinningsDisplayPipe } from './pipes/winnings-display.pipe';
import { PlayerLeaderboardComponent } from './components/player-leaderboard/player-leaderboard.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { HttpClientInMemoryWebApiModule } from '../../node_modules/angular-in-memory-web-api';
import { InMemoryDataService } from './services/database/in-memory-data.service';
import { NgbModule } from '../../node_modules/@ng-bootstrap/ng-bootstrap';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PlayerLeaderboardComponent,
        WinningsDisplayPipe
      ],
      imports: [
        FormsModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
          InMemoryDataService, { dataEncapsulation: false }
        ),
    
        NgbModule.forRoot()
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
