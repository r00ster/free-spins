import { Component, OnInit } from '@angular/core';
import { FreeSpinService } from '../free-spin.service';
import { FreeSpin } from './free-spin';

@Component({
  selector: 'app-free-spins',
  templateUrl: './free-spins.component.html',
  styleUrls: ['./free-spins.component.scss']
})
export class FreeSpinsComponent implements OnInit {
  spinsClaimed: boolean = false;
  freeSpin: FreeSpin = {
    bannerText: '',
    timer: '',
    buttonHtml: '',
  };

  constructor(private freeSpinService: FreeSpinService) { }

  ngOnInit(): void {
    this.setFreeSpinData();
  }

  async onClick(): Promise<void> {
    this.spinsClaimed = true;
    this.setFreeSpinClaimedData();
  }

  private async setFreeSpinData(): Promise<void> {
    this.freeSpinService.getFreeSpinData().subscribe(data => {
      this.freeSpin = data[0];
    });
  }

  private async setFreeSpinClaimedData(): Promise<void> {
    this.freeSpinService.getFreeSpinData().subscribe(data => {
      this.freeSpin = data[1];
    });
  }
}
