import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'superagent/superagent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit() {
  	require.post
  }

  title = 'app';
  // private apiUrl = 'http://www.artsy.net/artist/artist';
  data: any = {};
  clientID =  '0dd828b10c768c837689';
  clientSecret = 'd1ea87a1ef6af9ec8b3bb5d565022a62';
  apiUrl = 'https://api.artsy.net/api/tokens/xapp_token';
  xappToken;


  constructor(private http: Http) {
  	console.log("Hello user");

  	this.getContacts();
  	this.getData();
  }

  getData() {
  	return this.http.get(this.apiUrl)
  	 .map((res: Response) => res.json())
  }

  getContacts() {
  	this.getData().subscribe(data => {
  		console.log(data);
  		this.data = data
  	})
  }
}
