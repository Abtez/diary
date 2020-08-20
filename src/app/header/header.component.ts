import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  myName = 'My Diary';
 
  ngOnInit(): void {
    $(document).ready(function () {
      $('#darktheme').click(function () {
        $('body').css('background-color', 'black');
        $('body').css('color', 'white');
        $('#darktheme').hide();
        $('#lightheme').show();
      });
      $('#lightheme').click(function () {
        $('body').css('background-color', 'white');
        $('body').css('color', 'black');
        $('#lightheme').hide();
        $('#darktheme').show();
      });
     
      $("#submit").click(function(){
        let diaryName = $('#diaryname').val();
        console.log(diaryName);
        $("#appname").css({
         'color':'black',
         'text-transform':'capitalize',
         'font-size':'bolder' 
        });
        $("#appname").text(diaryName);

      })
    });
  }
}
