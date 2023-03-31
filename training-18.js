// @param {string} email
// @param {array} agreeEmailAddress
// return {boolean}

function a (email, agreeEmailAddress){
  if(typeof (email) === "string" && Array.isArray(agreeEmailAddress) === true ) {
    email = Array.from(email);
    email.forEach((element) => {
      if(element === "@") {
        const splitEmailArray = email.split("@");

      if(agreeEmailAddress.includes(splitEmailArray[1])=== true){
        console.log("미리 등록된 이메일 도메인주소가 일치하므로 승인합니다.");
        return true;
      }
      } else { 
        console.log("@표시가 없으므로 이메일로 판단하기 어렵습니다.");
        return false; 
      }
    });
  }
}
export default a; 
// 일반적으로 해당 모듈엔 하나의 개체(변수, 클래스, 함수 등)만 있다는 의미로 받아들여진다.
