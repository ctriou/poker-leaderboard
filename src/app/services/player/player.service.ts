import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from '../../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private playersUrl = 'api/players';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.playersUrl);
  }

  updatePlayer(player: Player): Observable<Player> {
    return this.http.put<Player>(this.playersUrl, player, this.httpOptions);
  }

  addPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(this.playersUrl, player, this.httpOptions);
  }

  removePlayer(player: Player): Observable<Player> {
    const url = `${this.playersUrl}/${player.id}`;
    return this.http.delete<Player>(url, this.httpOptions);
  }

  getClosestByWinnings(players: Player[], value: number): Player {

    if (!players || !players.length) return null;

    var closestPlayer = null;
    players.forEach(player => {

      if (!closestPlayer || Math.abs(value - closestPlayer.winnings) > Math.abs(value - player.winnings)){
        closestPlayer = player;
      }
    });

    return closestPlayer;
  }
}
