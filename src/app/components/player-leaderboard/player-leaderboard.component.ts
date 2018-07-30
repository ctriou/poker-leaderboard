import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayerService } from '../../services/player/player.service';
import { Player } from '../../models/player';
import { Country } from '../../models/country';
import { MathService } from '../../services/math/math.service';
import { NgbModal } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-player-leaderboard',
  templateUrl: './player-leaderboard.component.html',
  styleUrls: ['./player-leaderboard.component.scss']
})
export class PlayerLeaderboardComponent implements OnInit {

  @ViewChild('contentEdit') templateEdit: any;
  @ViewChild('contentDelete') templateDelete: any;

  page = 1;
  pageSize = 5;
  totalResults = 0;

  players: Player[];

  // make enums available in template
  country = Country;
  countries = Object.keys(Country).filter(k => typeof Country[k] === "number");

  // used for the legend showing mean and median
  meanPlayer: Player;
  medianPlayer: Player;
  meanWinnings: number;
  medianWinnings: number;

  // used for adding or editing a player
  activePlayer: Player;
  activeModal: any;

  constructor(
    private playerService: PlayerService,
    private mathService: MathService,
    private modalService: NgbModal) {

  }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers(): void {
    this.playerService.getPlayers().subscribe(players => {

      if (players === null || !players.length) return;

      this.totalResults = players.length;

      players.sort(function (a, b) {
        return b.winnings - a.winnings;
      });

      var start = (this.page - 1) * this.pageSize,
        end = start + this.pageSize;

      var winnings = players.map(p => p.winnings);

      this.meanWinnings = this.mathService.mean(winnings),
        this.medianWinnings = this.mathService.median(winnings);

      this.meanPlayer = this.playerService.getClosestByWinnings(players, this.meanWinnings);
      this.medianPlayer = this.playerService.getClosestByWinnings(players, this.medianWinnings);

      this.players = players.slice(start, end);
    });
  }

  pageChange(page: number) {
    this.page = page;
    this.getPlayers();
  }

  addPlayer() {
    this.activePlayer = new Player();
    this.activeModal = this.modalService.open(this.templateEdit, {});
  }

  editPlayer(player: Player) {
    this.activePlayer = Object.assign({}, player);
    this.activeModal = this.modalService.open(this.templateEdit, {});
  }

  confirmDelete(player: Player) {
    this.activePlayer = player;
    this.activeModal = this.modalService.open(this.templateDelete, {});
  }

  deletePlayer(player: Player) {
    this.playerService.removePlayer(player)
      .subscribe(
        () => {
          this.activeModal && this.activeModal.close();
          this.getPlayers();
        }
      )
  }

  saveChanges(player: Player) {
    var request;

    if (!player.id) {
      request = this.playerService.addPlayer(player);
    } else {
      request = this.playerService.updatePlayer(player);
    }

    request.subscribe(player => {
      this.activeModal && this.activeModal.close();
      this.activePlayer = null;
      this.getPlayers();
    });
  }
}
