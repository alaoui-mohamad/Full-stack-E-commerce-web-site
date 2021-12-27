import { Component,OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.componentpricipal.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EcommerceFontendangular';
  faCoffee = faHeart;
  ngOnInit(): void {
    $( ".alaoui" ).on( "click", function() {
      alert("alaoui" );
    });
    $('.menu-toggle > a').on('click', function (e) {
      e.preventDefault();
      $('#responsive-nav').toggleClass('active');
    })
  
    
  }
  
}
