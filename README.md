## 실행 방법
```
npm i
npm start
```

또는

```
1. vscode extension Live Server 설치
2. index.html 우클릭
3. Open with Live Server 클릭
```


## 추가 설치 라이브러리 
- `http-server`
JavaScript 파일을 모듈화 하면서 `<script>` 태그에 `type="module"`을 추가하였고, 그로 인해 default 브라우저에서 index.html을 열면 CORS 정책에 의해 파일이 실행되지 않았습니다. 해결책으로 해당 라이브러리를 설치했습니다. 

## 구현 로직
계산기 내부에는 stack, 현재 숫자(current), 이전 연산자(op), 결과(result) 프로퍼티와 사칙연산, 등호, Clear 메서드가 구현되어 있습니다.
 
숫자를 클릭하면 계산기 내부 current 에 숫자가 저장됩니다.
연산자를 클릭하면 연산이 실행됩니다.

클릭한 연산자가 C, %, +/- 라면 이전 숫자와의 연산이 필요하지 않으므로 current에 해당 기능만 수행하고 return 합니다.

클릭한 연산자가 C, %, +/- 아니라면 ( +, - , x, ÷, =) 이라면 이전에 클릭한 연산자의 연산(계산기에 저장된 연산자)을 시행합니다.

`+` (add) : 현재 수를 그대로 stack에 push
`-` (substract) : 현재 수를 음수로 변환 후 stack에 push
`x` (multiply) : stack에서 pop한 숫자와 현재 수를 곱한 후 stack에 push
`÷` (divide) : stack에서 pop한 숫자와 현재 수를 나눈 후 stack에 push

이전 연산자의 연산 후 현재 클릭한 연산자가 `=`이라면  계산기 stack의 합을 계산기 디스플레이에 결과값으로 보여줍니다.


