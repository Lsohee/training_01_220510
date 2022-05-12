
<span color="red">1. consoleText가 뭘까? 
  - 일단 함수임
  ````consoleText(["Hello Uni", "This is Us","Do or Not","Daisy","Spring Snow"], "text", ["skyblue","red","black", "lightblue","rebeccapurple"]);````
  
  ````if(colors === undefined) colors = ["#fff"];````
</span>

2. if문인데 중괄호가 없다!!! 
  - 이렇게 쓸 수 도 있구나라고 받아드리면 되는 건가?



3. document.getElementById()까지는 알겠는데 왜 () 안에 "id"가 아니라 id가 들어갈까? 
  - 그냥 아이디를 가진 모든 요소를 가져온 걸까?
  - id도 값인가 -> 아닌데 이거는 문자열 숫자 불리언 객체 배열 null undefined 아무것도 아닌데?

a. id라는 이름이 매개변수로 사용한 이름이기 때문에 혼동이 되었기때문에 대충 a로 지어도 작동함

4. .innerHTML 이 뭐하는 놈일까?

textContent는 텍스트를 사용하겠다는 속성이고, 
innerHTML은 말그대로 html까지 해석하는 속성이므로 테스트해볼 필요가 있음

5.   이 script에는 words라는 변수가 선언이 안되어 있는데 자꾸 words의 배열을 가져다 쓰네? 

제작한놈이 실수

   
6. setTimeout 이라는 함수가 뭘까?
  - setInterval이랑 비슷하게 생김 -> 뭔가 시간을 두고 반복되는 기능? 

setTimeout() -> 한번 실행하는 함수, 실행시기를 조절하는 용도
setInterval() -> 주기적으로 실행하는 함수, 주기를 조절하는 용도



7. .push 라는 함수가 새로운 요소를 배열의 긑에 추가하는 거면 새로운 요소를 배열의 처음에 추가하는 함수도 있을까? 

배열메서드의 종류는 매우 다양하며 또 매우 중요함. 자세하게 암기시킬 예정


8. +=라는 연산자를 책에서 봤는데 +=랑 =+랑 다르댔음 
      [ ] 어떻게 다른지 이해하고 써볼것 

      a += b -> a = a + b;
      a =+ b -> a = +b;
      

9. 메서드를 어디다 쓰는지 어떤 것을 가리키는지 내가 애매하게 알고 있는듯 하다 
      [ ] 용어의 뜻을 명확하게 알것

10.  .substring()이라는 함수는 뭘까? 
  - vs code의 보조기능으로 뜬 설명을 봤는데 아직 이해가 안됨

  문자열을 다루는 메서드중 하나
  일련의 문자열중 특정 부분만 필름처럼 똑 잘라내는 용도

11. className이라는 게 뭐지?  

클래스 이름 
classList는 배열로 반환
className은 무엇으로 반환하는지 테스트 해볼 것