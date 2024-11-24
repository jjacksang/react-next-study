# country > [code].js

-   getStaticPaths를 이용하여 사용한다.
-   paths, fallback 옵션을 주고 paths에는 먼저 생성할 데이터에 대하여, fallback은 그 외 데이터 처리 방식을 설정해준다.
-   또한 revalidate옵션을 주어 주기적으로 특정 시간(단위: 초)를 설정해주어 매번 특정 시간마다 데이터를 새로 갱신하는 옵션을 줄 수 있다.

# search > index.js

-   search에서는 query를 받고 지속적으로 변경되는 값이기 때문에 next에서 제공하는 useRouter를 이용하여 query값을 받아와 적용한다.

# root > index.js

-   최상단 루트에 존재하는 index.js에서는 데이터가 실시간으로 반영할 필요는 없기 때문에 SSG환경으로 세팅을 해준다.

-   getStaticProps를 사용하여 값을 return해주는데 props: {} 형태로 return을 돌려준다.
