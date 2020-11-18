import {Polygon} from './polygon.js';

class App {
  constructor(){
    this.canvas = document.createElement('canvas');
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');

    // https://developer.mozilla.org/ko/docs/Web/API/Window/devicePixelRatio
    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    // https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener
    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    this.isDown = false;
    this.moveX = 0;
    this.offsetX = 0;

    window.addEventListener('pointerdown', this.onDown.bind(this), false);
    window.addEventListener('pointermove', this.onMove.bind(this), false);
    window.addEventListener('pointerup', this.onUp.bind(this), false);
  
    window.requestAnimationFrame(this.animate.bind(this));
  
  }

  // 윈도우 창 리사이즈 시 실행 함수
  resize(){
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    this.polygon = new Polygon(
        this.stageWidth / 2, 
        this.stageHeight + (this.stageHeight / 4), 
        this.stageHeight / 1.5, 
        15
      );

  }

  animate(){
    window.requestAnimationFrame(this.animate.bind(this));
   
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.moveX *= 0.92;

    this.polygon.animate(this.ctx, this.moveX);
  }

  onDown(e){
    this.isDown = true; // 마우스 버튼을 누르고 있는 상태 플래그 
    this.moveX = 0; // 마우스를 누르면 moveX 0으로 초기화
    this.offsetX = e.clientX; // 마우스를 누를 때 마우스의 X좌표를 저장
  }

  onMove(e){
    // 마우스를 누르고 마우스를 움직이면
    if(this.isDown){
      this.moveX = e.clientX - this.offsetX; // 움직인 마우스 X의 값에서 마우스를 누를 대의 X좌표를 뺀다. 그러면 마우스를 누르고 움직인 거리의 차
      this.offsetX = e.clientX; // 마우스를 움직였을때 X 좌표를 저장
    }
  }

  onUp(e){
    this.isDown = false;
  }
}

window.onload = () => {
  new App();
}