# React Test 에 대해서

#### 왜 TEST 해야 할까요?

- 더 안정적인 어플리케이션을 만들기 위해서

#### Testing 으로 얻는 이점은?

- 디버깅 시간 단축. 에러 발생 시 UI 문제인지, DB 문제인지 등 전부 테스트해야 하는데 자동화된 Unit Testing 이 있다면 버그를 쉽게 찾음

&nbsp;

### React Testing Library

- **_DOM Testing Library_** 는 DOM node 를 Test 하는 솔루션인데, 그 위에 React 요소의 작업을 위한 API 를 추가해 _**React Testing Library**_ 를 구축
- CRA 로 프로젝트를 만들면 알아서 포함됨. 아닌 경우 아래 command 처럼 설치

```
$ npm install --save-dev @testing-library/react
```

&nbsp;

### RTL vs Enzyme

- Enzyme: React 구성요소의 내부를 Test 하는 유틸리티를 제공. state 흐름, props 교환부분 등에 초점을 맞춰 구현을 주도해 Test
- RTL: React 구성요소의 구현 세부정보를 Test 하지 않음. App 사용자의 입장에서 어떤 기능/행위가 이뤄지는지, 잘 되는지를 중점으로 Test

```html
<p>
  Edit <code>src/App.js</code>
  reload...
</p>
```

- 구현주도 Test 는 `<p>` 태그 내에 Edit 문자가 들어갔는지 Test. `<p>` 를 `<h3>` 로 바꾸면 에러
- 행위주도 Test 는 `<p>` 인지 `<h3>` 인지 보다 어떤 이벤트 발생 시 화면이 어떻게 변화하는지 등의 테스트가 주

&nbsp;

### What is DOM

- 앞서 RTL 이 Dom Testing Library 위에서 만들어졌다고 밝혔다. DOM 이해를 위해 [HTML 이 어떻게 DOM 으로 만들어지는지](https://math010.tistory.com/354?category=963289) 살펴보겠다

  - 웹페이지를 볼 때, Browser 주소창에 URL 을 입력하면, 서버에서 HTML 문서를 보낸다
  - 그 Html 문서를 Bytes, Characters, Tokens, Nodes, DOM 순으로 파싱하여 DOM Tree 를 만든다

<p align="center"><img src="https://user-images.githubusercontent.com/66893123/161464840-fca43588-8050-4d35-bff9-e6e037652fa9.png"  alt="html-to-domtree"></p>

- - Bytes 로 문자열(Characters)을 만들고, 문자열을 HTML 표준에 따라 Token 으로 변경한다. Token 을 모두 Node 로 변경하고 이것을 트리형식으로 구성해 DOM Tree 를 만든다
  - 최종적으로 Html 은 DOM 으로, CSS 는 CSSOM (Object Model) 으로 파싱되고, 이들은 JS 로 컨트롤할 수 있다

- RTL 은 사용할 때 DOM Node 들을 잡아서 Test 하게 된다
