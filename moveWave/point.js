export class Point {
  constructor(index, x, y) {
    this.x = x;
    this.y = y;
    this.fixedY = y;
    this.speed = 0.1;
    this.cur = index;
    this.max = Math.random() * 100 + 150;
  }

   update(){
     this.cur += this.speed;
     this.y = this.fixedY + (Math.sin(this.cur) * this.max);
   }
}
/*
웨이브를 만드는 것이 아니라 간격을 가진 좦를 만들어 좌표의 Y을 아래위로 움직이고 각각의 좌표를
연결하는 개념으로 접근 

사인함수를 사용해서 웨이브를 그려준다. 사인 함수에서 일정값을 더하거나 빼면 웨이브 효과를 줄 수 있다. 
*/