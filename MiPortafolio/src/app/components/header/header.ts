import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink,MatIcon],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
