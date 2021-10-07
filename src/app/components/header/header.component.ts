import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('header')
  public headerRef: ElementRef;
  public currFragment: string | null;

  constructor(private route: ActivatedRoute) {}

  public ngOnInit() {
    this.route.fragment.subscribe((fragment) => {
      this.currFragment = fragment;
    });
  }

  @HostListener('window:scroll')
  public onScroll() {
    const nativeElement: HTMLElement = this.headerRef.nativeElement;
    
    if (document.documentElement.scrollTop > 50) {
      nativeElement.classList.add('min');
    } else {
      nativeElement.classList.remove('min');
    }
  }
}
