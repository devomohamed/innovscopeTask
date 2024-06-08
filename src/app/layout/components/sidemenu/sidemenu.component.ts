import { Component, Input, OnInit } from '@angular/core';
// import { MenuItem, MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent {
   @Input() menuActive:boolean = false
  buttons = [
    {html:`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.85 9.09995C10.5334 9.09995 10.0862 9.1437 9.62062 9.20747C9.40311 9.23726 9.23726 9.40311 9.20747 9.62062C9.1437 10.0862 9.09995 10.5334 9.09995 10.85C9.09995 11.1665 9.1437 11.6137 9.20747 12.0793C9.23726 12.2968 9.40311 12.4626 9.62062 12.4924C10.0862 12.5562 10.5334 12.6 10.85 12.6C11.1665 12.6 11.6137 12.5562 12.0793 12.4924C12.2968 12.4626 12.4626 12.2968 12.4924 12.0793C12.5562 11.6137 12.6 11.1665 12.6 10.85C12.6 10.5334 12.5562 10.0862 12.4924 9.62062C12.4626 9.40311 12.2968 9.23726 12.0793 9.20747C11.6137 9.1437 11.1665 9.09995 10.85 9.09995ZM9.43066 7.82042C8.59073 7.93545 7.93545 8.59073 7.82042 9.43066C7.75444 9.9124 7.69995 10.4357 7.69995 10.85C7.69995 11.2642 7.75444 11.7875 7.82042 12.2692C7.93545 13.1092 8.59073 13.7645 9.43066 13.8795C9.9124 13.9455 10.4357 14 10.85 14C11.2642 14 11.7875 13.9455 12.2692 13.8795C13.1092 13.7645 13.7645 13.1092 13.8795 12.2692C13.9455 11.7875 14 11.2642 14 10.85C14 10.4357 13.9455 9.9124 13.8795 9.43066C13.7645 8.59073 13.1092 7.93545 12.2692 7.82042C11.7875 7.75444 11.2642 7.69995 10.85 7.69995C10.4357 7.69995 9.9124 7.75444 9.43066 7.82042Z" fill="#C8CCD7"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.15 9.09995C2.83347 9.09995 2.38625 9.1437 1.92067 9.20747C1.70316 9.23726 1.53731 9.40311 1.50752 9.62062C1.44375 10.0862 1.4 10.5334 1.4 10.85C1.4 11.1665 1.44375 11.6137 1.50752 12.0793C1.53731 12.2968 1.70316 12.4626 1.92067 12.4924C2.38625 12.5562 2.83347 12.6 3.15 12.6C3.46653 12.6 3.91375 12.5562 4.37933 12.4924C4.59684 12.4626 4.7627 12.2968 4.79248 12.0793C4.85625 11.6137 4.9 11.1665 4.9 10.85C4.9 10.5334 4.85625 10.0862 4.79248 9.62062C4.7627 9.40311 4.59684 9.23726 4.37933 9.20747C3.91375 9.1437 3.46653 9.09995 3.15 9.09995ZM1.73071 7.82042C0.890774 7.93545 0.235496 8.59073 0.120464 9.43066C0.0544869 9.9124 0 10.4357 0 10.85C0 11.2642 0.0544869 11.7875 0.120464 12.2692C0.235496 13.1092 0.890774 13.7645 1.73071 13.8795C2.21245 13.9455 2.73571 14 3.15 14C3.56429 14 4.08755 13.9455 4.56929 13.8795C5.40923 13.7645 6.0645 13.1092 6.17954 12.2692C6.24551 11.7875 6.3 11.2642 6.3 10.85C6.3 10.4357 6.24551 9.9124 6.17954 9.43066C6.0645 8.59073 5.40923 7.93545 4.56929 7.82042C4.08755 7.75444 3.56429 7.69995 3.15 7.69995C2.73571 7.69995 2.21245 7.75444 1.73071 7.82042Z" fill="#C8CCD7"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.85 1.4C10.5334 1.4 10.0862 1.44375 9.62062 1.50752C9.40311 1.53731 9.23726 1.70316 9.20747 1.92067C9.1437 2.38625 9.09995 2.83347 9.09995 3.15C9.09995 3.46653 9.1437 3.91375 9.20747 4.37933C9.23726 4.59684 9.40311 4.7627 9.62062 4.79248C10.0862 4.85625 10.5334 4.9 10.85 4.9C11.1665 4.9 11.6137 4.85625 12.0793 4.79248C12.2968 4.7627 12.4626 4.59684 12.4924 4.37933C12.5562 3.91375 12.6 3.46653 12.6 3.15C12.6 2.83347 12.5562 2.38625 12.4924 1.92067C12.4626 1.70316 12.2968 1.53731 12.0793 1.50752C11.6137 1.44375 11.1665 1.4 10.85 1.4ZM9.43066 0.120464C8.59073 0.235496 7.93545 0.890774 7.82042 1.73071C7.75444 2.21245 7.69995 2.73571 7.69995 3.15C7.69995 3.56429 7.75444 4.08755 7.82042 4.56929C7.93545 5.40923 8.59073 6.0645 9.43066 6.17954C9.9124 6.24551 10.4357 6.3 10.85 6.3C11.2642 6.3 11.7875 6.24551 12.2692 6.17954C13.1092 6.0645 13.7645 5.40923 13.8795 4.56929C13.9455 4.08755 14 3.56429 14 3.15C14 2.73571 13.9455 2.21245 13.8795 1.73071C13.7645 0.890774 13.1092 0.235496 12.2692 0.120464C11.7875 0.0544869 11.2642 0 10.85 0C10.4357 0 9.9124 0.0544869 9.43066 0.120464Z" fill="#C8CCD7"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.15 1.4C2.83347 1.4 2.38625 1.44375 1.92067 1.50752C1.70316 1.53731 1.53731 1.70316 1.50752 1.92067C1.44375 2.38625 1.4 2.83347 1.4 3.15C1.4 3.46653 1.44375 3.91375 1.50752 4.37933C1.53731 4.59684 1.70316 4.7627 1.92067 4.79248C2.38625 4.85625 2.83347 4.9 3.15 4.9C3.46653 4.9 3.91375 4.85625 4.37933 4.79248C4.59684 4.7627 4.7627 4.59684 4.79248 4.37933C4.85625 3.91375 4.9 3.46653 4.9 3.15C4.9 2.83347 4.85625 2.38625 4.79248 1.92067C4.7627 1.70316 4.59684 1.53731 4.37933 1.50752C3.91375 1.44375 3.46653 1.4 3.15 1.4ZM1.73071 0.120464C0.890774 0.235496 0.235496 0.890774 0.120464 1.73071C0.0544869 2.21245 0 2.73571 0 3.15C0 3.56429 0.0544869 4.08755 0.120464 4.56929C0.235496 5.40923 0.890774 6.0645 1.73071 6.17954C2.21245 6.24551 2.73571 6.3 3.15 6.3C3.56429 6.3 4.08755 6.24551 4.56929 6.17954C5.40923 6.0645 6.0645 5.40923 6.17954 4.56929C6.24551 4.08755 6.3 3.56429 6.3 3.15C6.3 2.73571 6.24551 2.21245 6.17954 1.73071C6.0645 0.890774 5.40923 0.235496 4.56929 0.120464C4.08755 0.0544869 3.56429 0 3.15 0C2.73571 0 2.21245 0.0544869 1.73071 0.120464Z" fill="#C8CCD7"/>
    </svg>  `,active:true},
    {html:`<i class="fa-regular fa-calendar"></i> `,active:false},
  ]
  value: any;

    justifyOptions: any[] = [
        { icon: 'pi pi-th-large', justify: 'Left' },
        { icon: 'fa-regular fa-calendar', justify: 'Right' },
    ];
    imogies = [
      {name:"test",imogie:'🎉'},
      {name:"test",imogie:'😍'},
      {name:"test",imogie:'😁'},
      {name:"test",imogie:'🔥'},
      {name:"test",imogie:'😘'},
      {name:"test",imogie:'😊'},
      {name:"test",imogie:'😎'},
      {name:"test",imogie:'👩'},
      {name:"test",imogie:'🙄'},
    ]
    responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 9,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 9,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 9,
          numScroll: 1
      }
  ];

  changeOption(e:any,index:any){
    this.buttons.forEach((button:any,index:any) => {
      if(index == index){
        button.active = true;
      }else{
        button.active = false;
      }
    })

  }

  items: MenuItem[] | undefined;

    // constructor(private messageService: MessageService) {}
    
    ngOnInit() {
        this.items = [
            {
                label: 'Options',
                items: [
                    {
                        label: 'Update',
                        icon: 'pi pi-refresh',
                        command: () => {
                            this.update();
                        }
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-times',
                        command: () => {
                            this.delete();
                        }
                    }
                ]
            },
            {
                label: 'Navigate',
                items: [
                    {
                        label: 'Angular',
                        icon: 'pi pi-external-link',
                        url: 'http://angular.io'
                    },
                    {
                        label: 'Router',
                        icon: 'pi pi-upload',
                        routerLink: '/fileupload'
                    }
                ]
            }
        ];
    }

    update() {
        // this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        // this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
    }
}