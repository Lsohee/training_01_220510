
//  고차함수 : 제작자가 만드는 것
// higher order function 
// 알고리즘 제작법

function typeA(){
  console.log("나는 물입니다");
  // * typeB의 함수 알고리즘은 
  // * 어떤 문자열을 콘솔에 찍은 다음
  // * typeA의 함수를 호출해준다
}

function typeB(){
  console.log("흐르는 물입니다")
  typeA();
}
typeB();


// todo 얘도 고차함수
function typeC (target){
  target.addEventListener("click", ()=>{})
  target.addEventListener("scroll", ()=>{})
  target.addEventListener("wheel", function(){})
}

typeC(root);

const typeP = {
  objectA: function(string){
    console.log(string);
  },
  objectB: function(){

  }
}

typeP.objectA("hello");