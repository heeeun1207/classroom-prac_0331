//! 클래스룸 Node.js -5 // Class 작성 방식과 app server 구동 
var http = require('http');
class Server { // 클래스함수 서버가 
  constructor(port) { // 포트를 생성함 
    this.port = port; // 이포트는 
  }

  set port(value) { // setter 로 인해 port의 데이터타입은 number}
    // 가 아니면 에러를 발생시킨다.
    if(typeof value !== 'number'){
    throw new Error('port must be a number');
  }else {
    this._port = value ;     //아니면 포트값이다 . 
  }
}

 start () { // 구동 시작 
  this.server = http.createServer((request, response)=> {
    response.writeHead(200, {'Content-Type' : 'text/html; charset =utf-8'});
    // response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.end('ok server !');
    //! 영어는 나오고 , 한글을 깨짐 .  -> 응답헤더 utf-8 설정해보기
    

  });
  this.server.listen(this._port); // setter로 인해 this_port 를
  // 사용한 예시 
  // 응답한다 200 정상서버로 . 
 }

}
const server = new Server(3000);
server.start();

// 그 서버는  3000포트이다 

