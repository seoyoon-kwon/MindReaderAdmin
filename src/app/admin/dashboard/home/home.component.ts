import { Component, OnInit } from '@angular/core';

interface Place {
  imgSrc: string;
  name: string;
  description: string;
  charge: string;
  location: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  places: Array<Place> = [];
  constructor() {}
  ngOnInit() {
    this.places = [
      {
        imgSrc: 'assets/images/fish.png',
        name: '물고기 가족화',
        description: `물고기 가족화 검사 방식을 활용하여 피 검사자가 표현한 객체 간의 관계를 AI가 인식하여 현재의 심리상태를 자동으로 진단해주는 기능 제공`,
        charge: 'free',
        location: ''
      },
      {
        imgSrc: 'assets/images/card-2.jpg',
        name: 'Office Studio',
        description: `The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio"
              where you can enjoy the night life in London, UK.`,
        charge: '$1,119/night',
        location: 'London, UK'
      },
      {
        imgSrc: 'assets/images/card-3.jpg',
        name: 'Beautiful Castle',
        description: `The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio"
              where you can enjoy the main night life in Milan.`,
        charge: '$459/night',
        location: 'Milan, Italy'
      }
    ];
  }
}
