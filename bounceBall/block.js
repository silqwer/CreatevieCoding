export class Block { 
  constructor(width, height, x, y){
    this.width = width;
    this.height = height;
    this.x = x; 
    this.y = y;
    this.maxX = this.width + x; 
    this.maxY = this.height +y;
  }

  draw(ctx){
    const xGap = 80;
    const yGap = 60;

    // 블럭
    ctx.fillStyle = '#ff3842';
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fill();

    // 그림자
    ctx.fillStyle = '#190f3a';
    ctx.beginPath();
    ctx.moveTo(this.maxX, this.maxY);
    ctx.lineTo(this.maxX - xGap, this.maxY + yGap);
    ctx.lineTo(this.x - xGap, this.maxY + yGap);
    ctx.lineTo(this.x, this.maxY);
    ctx.fill();

    // 그림자
    ctx.fillStyle = '#9d0919';
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x, this.maxY);
    ctx.lineTo(this.x - xGap, this.maxY + yGap);
    ctx.lineTo(this.x - xGap, this.maxY + yGap - this.height);
    ctx.fill();
  }
}