const PI2 = Math.PI * 2;
const COLORS = [
  '#4b45ab',
  '#554fb8',
  '#605ac7',
  '#2a91a8',
  '#2e9ab2',
  '#32a5bf',
  '#81b144',
  '#85b944',
  '#8fc549',
  '#e0af27',
  '#eeba2a',
  '#fec72e',
  '#bf342d',
  '#ca3931',
  '#b7423a',
];
export class Polygon {
  constructor(x, y, radius, sides){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.sides = sides;
    this.rotate = 0;
  }

  animate(ctx, moveX){
    ctx.save(); // 현재 ctx 상태 저장
    //ctx.fillStyle = '#fff'; // 그리기 색상 
    //ctx.beginPath();  // 그리기 시작 

    const angle = PI2 / this.sides;
    const angle2 = PI2 / 4;
    
    
    ctx.translate (this.x, this.y); // 아마도 이동?

    this.rotate += moveX * 0.008;
    ctx.rotate(this.rotate);

    for(let i = 0; i < this.sides; i++){
      const x = this.radius * Math.cos(angle * i);
      const y = this.radius * Math.sin(angle * i);

      // 0면 이동, 아니면 선을 그리라
      // 1. 도형 그리기 
      //(i==0) ? ctx.moveTo(x, y) : ctx.lineTo(x, y);

      // 2. 꼭지점에  원 그리기 
      // ctx.beginPath();
      // ctx.arc(x, y, 30, 0, PI2, false);
      // ctx.fill(); 

      // 3. 꼭지점에 사각형 그리기 
      ctx.save();
      ctx.fillStyle = COLORS[i];
      ctx.translate(x, y);
      ctx.rotate(((360 / this.sides) * i +45) * Math.PI / 180);
      ctx.beginPath();
      for(let j = 0; j < 4; j++){
        // 1. 튜토리얼 코드 
        // const x2 = 160 * Math.cos(angle2 * j);
        // const y2 = 160 * Math.sin(angle2 * j);
        
        const x2 = 100 * Math.cos(angle2 * j);
        const y2 = 100 * Math.sin(angle2 * j);
        
        (j==0) ? ctx.moveTo(x2, y2) : ctx.lineTo(x2, y2);
      }
      ctx.fill();
      ctx.closePath();
      ctx.restore();
    }
    //ctx.fill(); //
    //ctx.closePath();
    ctx.restore();

  }
}