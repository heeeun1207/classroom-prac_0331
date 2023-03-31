function getSubstring(str, start, end) {
  let substring = " ";
  for( let i = start ; i < end ; i++ ) {
    substring +=  str[i];
  }
  return substring;
}
function a (email,agreeEmailAddress) {
  if (typeof email === "string" && agreeEmailAddress.constructor === Array) {
    const emailArray = [];
// .constructor  개념 설명 이해 !  + 배열메서드 공부할 것 
    for (let i = 0 ; i <email.length; i ++) {
      emailArray[i] =email[i];
    }
    let atIndex = -1;
    for (let i =0; i <emailArray.length; i++ ){
      if (emailArray[i] === "@") {
        atIndex =i;
        break;

      }
    }
    if (atIndex === -1) {
      console.log("@ 표시가 없으므로 이메일로 판단하기 어렵습니다.") ;
      return false;
    }
    const splitEmailArray = [];
    let domainIndex =0 ;
    for( let i = atIndex +1 ; i <emailArray ; i++){
      if (emailArray[i] === ".") {
        splitEmailArray[domainIndex] =getSubstring(email.atIndex +1, i );
        domainIndex++;
        atIndex = i;
      }
    }
    splitEmailArray[domainIndex] = getSubstring(email, atIndex +1 , emailArray.length);
    let domainExists = false;
    for(let i = 0; i< agreeEmailAddress.length; i++){
      if (agreeEmailAddress[i] === splitEmailArray[i]) {
        domainExists =true;
        break;
      }
    }
    if (domainExists === true) {
      console.log('미리 등록된 이메일 도메인주소가 일치하므로 승인합니다. ');
      return true;
    } else {
      console.log('등록되지 않은 이메일 도메인 주소입니다.');
      return false;
    }
  }
}
// export default a;