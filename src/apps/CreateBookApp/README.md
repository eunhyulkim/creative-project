# 책 만들기(Book Creator) <img src="https://img.shields.io/badge/book--creator-0.1-yellowgreen">

**책 만들기(Book Creator)** 는 책 형식의 PDF를 손쉽게 만드는 웹 어플리케이션입니다. 

## Why
서식화된 문서의 필요는 많지만 적절한 글씨체, 크기, 여백, 줄간격, 페이지네이션, 목차 등 디자인 요소에 대한 사용자들의 이해가 부족하다는 점에 주목했습니다. 고객의 에세이를 책으로 만들어주는 서비스를 보면서 고객과 사업자 양쪽에서 편집 비용이 발생하는 문제를 발견 후 이를 해결하고자 시도했습니다.

## Feat
- 제목과 책의 이름을 입력하면 자동으로 표지가 생성됩니다.
- 기본으로 저장된 SVG, ColorSet 등의 설정을 임의로 조합하여 표지 이미지를 생성합니다.
- 각 장에 대한 제목과 본문을 입력받습니다.
- 표지, 목차, 각 장별 본문으로 구성된 PDF 파일을 생성하여 제공합니다.

## Stack
**React, TypeScript, Redux, SCSS, SVG, etc**

: BackboneJS를 사용했을 때 사이드 이펙트를 감당하기 어려웠기 때문에, 리액트의 Functional Component를 이용해 사이드 이펙트를 최소화시킬 필요가 있다고 판단했습니다. 또 서비스 규모가 커질 경우 JavaScript와 같은 weak type 언어가 가지는 한계를 뚜렷이 느꼈기 때문에, Typescript를 도입하여 타입으로 인한 문제를 코드 작성 시점에서 해결하고자 했습니다. 또 기존처럼 리액트의 Context와 HookAPI만으로 상태를 관리했을 때, 현재 사용자 화면에 존재하지 않는 상태(다른 페이지의 텍스트, 표지 정보 등)를 관리할 곳이 적절하지 않았습니다. 또한 사용자가 동시에 여러 개의 책을 편집하고 싶거나, 이후 재접속하여 편집을 이어가고자 할 때 전역적 상태관리 없이 서비스를 제공하기가 불가능하다고 판단해 Redux를 도입했습니다.

## Issue
- 서비스 성격상 사용자가 모바일로 해당 어플리케이션을 이용할 경우는 거의 존재하지 않습니다. 현재는 모바일에서 다운로드 대신 새 창이 열리도록 처리되어 있으나, 모바일에서는 아예 지원하지 않도록 막고 이용 경로를 일원화하는 것이 더 효율적인 방법이라고 보여집니다.
- 모바일에서는 브라우저에 따라 스타일이(주로 margin과 padding) 깨지는 경우가 남아있습니다. 단순히 크롬이나 사파리로 접속하는 것이 아니라, 카카오톡과 네이버 등을 SNS를 이용한 접속시 다르게 보이는 경우들도 있습니다.

## 스크린샷

<p align="center">
  <img src="/public/readme/create-book1.png" alt="표지 생성 화면" width="330">
  <img src="/public/readme/create-book2.png" alt="본문 입력 화면" width="330">
</p>
<p align="center">
  <img src="/public/readme/create-book3.png" alt="대기 화면" width="330">
  <img src="/public/readme/create-book4.png" alt="결과 화면" width="400">
</p>
