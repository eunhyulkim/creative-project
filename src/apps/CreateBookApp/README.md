# 책 만들기(Book Creator)

**책 만들기(Book Creator)** 는 책 형식의 PDF를 빠르게 만드는 웹 어플리케이션입니다.  

Typescript, React로 개발하였으며 상태 관리는 Redux로 처리했습니다.  
스타일링이 깨지지 않도록 canvas로 변환한 후 pdf로 다시 변환하는 과정을 거쳤고,  
각각 html2canvas와 jsPdf 라이브러리를 이용하였습니다.

# 스크린샷

<p align="center">
  <img src="/public/readme/create-book1.png" alt="표지 생성 화면" width="738">
</p>
<p align="center">
  <img src="/public/readme/create-book2.png" alt="본문 입력 화면" width="738">
</p>
<p align="center">
  <img src="/public/readme/create-book3.png" alt="대기 화면" width="738">
</p>
<p align="center">
  <img src="/public/readme/create-book4.png" alt="결과 화면" width="738">
</p>

# 해결해야 할 문제들

유스 케이스 성격상 데스크톱을 목적으로 개발한 어플리케이션이지만,  
모바일에서는 브라우저에 따라 스타일이(주로 margin과 padding) 깨지는 경우가 남아있습니다.
또 최종 결과물을 데스크톱에서는 다운로드를 받지만,  
모바일에서는 라이브러리가 지원하지 않아 새로운 창에 띄우는 것으로 대신해야 하는데,  
브라우저나 접속 방식(카카오톡, 네이버 등)에 따라 해당 기능이 작동하지 않는 경우가 있습니다.  
