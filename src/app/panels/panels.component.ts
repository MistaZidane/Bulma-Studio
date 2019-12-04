import { Component, OnInit } from '@angular/core';
import { SizeService } from '../shared/size.service';
import { DrawerService } from '../shared/drawer.service';
@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.css']
})
export class PanelsComponent implements OnInit {
  public output: {}
public drawerOpen = false;
  public sizess = {
    "y": '914px',
    "x": '425px',
    'state': 'true'
  }
  constructor(private size: SizeService, private drawer:DrawerService) { }

  ngOnInit() {
    // // gettting the current iframe size
    // this.size.sizze$.subscribe(data => {
    //   this.output = data;
    //   if (data["state"] == "true") {
    //     let iframe = document.querySelector('#iframe');
    //     iframe.setAttribute('width', this.output['x']);
    //     iframe.setAttribute('height', this.output['y']);
    //   }
    // });

    // // zooming

    // let iframe = document.querySelector('.myFrame');
    // window.addEventListener('keydown', function (event) {
    //   if (event.key == 'Control') {
    //     // wheel event
    //     iframe.addEventListener('wheel', function (e) {
    //       console.log(e)
    //       if ((<any>e).deltaY > -1) {
    //         console.log(this.sizess['y'])
    //         let num = 5;
    //         this.sizess['y'] = `${num += num} px`;
    //         this.sizess['x'] = `${num += num} px`;
    //         this.size.iframeSize(this.sizess)
    //       }
    //       // iframe.setAttribute('width', '')
    //     })
    //   }

    // })

}
}
