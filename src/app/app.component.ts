import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  list: Array<any> = [
    { title: '课时1', description: 'lala' },
    { title: '课时2', description: 'lala' },
    { title: '课时3', description: 'lala' },
    { title: '课时4', description: 'lala' },
    { title: '课时5', description: 'lala' },
    { title: '课时6', description: 'lala' },
    { title: '课时7', description: 'lala' },
    { title: '课时8', description: 'lala' },
    { title: '课时9', description: 'lala' },
    { title: '课时10', description: 'lala' },
    { title: '课时11', description: 'lala' },
    { title: '课时12', description: 'lala' },
    { title: '课时13', description: 'lala' },
    { title: '课时14', description: 'lala' },
    { title: '课时15', description: 'lala' },
    { title: '课时16', description: 'lala' },
    { title: '课时17', description: 'lala' },
    { title: '课时18', description: 'lala' },
    { title: '课时19', description: 'lala' },
    { title: '课时20', description: 'lala' },
    { title: '课时21', description: 'lala' }
  ];
  showList: Array<any>;
  currentLesson: any;
  moreList: Array<any> = [];
  ngOnInit() {
    this.showList = this.list.slice(0, 10);
    this.showList.forEach((item, index) => {
      item.initIndex = index + 1;
    });
    this.currentLesson = this.showList[0];
    console.log(this.showList);
  }

  setMoreList() {
    if (!this.list || (this.list && this.list.length <= 10)) {
      return;
    }
    let num = Math.ceil(this.list.length / 10);
    for (let i = 0; i < num; i++) {
      if (i === num - 1) {
        this.moreList[i] = { start: 10 * i + 1, end: this.list.length };
      } else {
        this.moreList[i] = { start: 10 * i + 1, end: 10 * (i + 1) };
      }
    }
  }

  changeLesson(item) {
    this.showList = this.list.slice(item.start - 1, item.end);
    console.log(this.showList);

    // let currentPage = Math.ceil(item.start / 10) - 1;
    // console.log('currentPage', currentPage);

    // for (let i = item.start; i <= item.end + 1; i++){
    //   this.showList[i - currentPage * 10 - 1].initIndex = i;
    // }

    for (let i = item.start; i < item.end + 1; i++) {
      let a = i % 10;
      if (a !== 0) {
        this.showList[a - 1].initIndex = i;
      } else {
        this.showList[9].initIndex = i;
      }
      console.log(this.showList);
    }
  }
}
