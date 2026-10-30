# Ohorang Portfolio (`ohorang_client`)

React, GSAP, Lenis, Sass(SCSS)를 활용하여 제작한 인터랙티브 프론트엔드 개발자 포트폴리오 웹사이트입니다.

## 주요 기능 및 섹션

- **Header & Skip Navigation**: 섹션 간 부드러운 스크롤 이동 및 웹 접근성을 고려한 스킵 내비게이션 제공
- **Intro**: 개발자 소개 및 인트로 비주얼 섹션
- **Skill**: 개발 가치관 및 역량 소개 섹션
- **Site**: 제작 사이트 요약 및 기술 스택 소개
- **Portfolio**: GSAP `ScrollTrigger`를 활용한 가로 스크롤(Horizontal Scroll) 프로젝트 쇼케이스
- **Contact**: 전화 및 이메일 연결 섹션
- **Smooth Scroll**: `@studio-freight/lenis`를 이용한 부드러운 페이지 스크롤 효과

## 기술 스택 (Tech Stack)

- **Framework / Library**: React 18, React Router DOM v6
- **Styling**: Sass (SCSS)
- **Animation & Interaction**: GSAP (`ScrollTrigger`), Lenis (`@studio-freight/lenis`)
- **Build Tool**: Create React App (`react-scripts`)

## 프로젝트 구조 (Directory Structure)

```text
src/
├── assets/         # 이미지 및 SCSS 스타일시트 (section, setting 등)
├── components/     # 공통 레이아웃 컴포넌트 (Header, Main, Skip, Footer)
├── constants/      # 섹션별 텍스트 및 포트폴리오 데이터 상수 관리
├── pages/          # 페이지 및 각 섹션 컴포넌트 (Home, Intro, Skill, Site, Port, Contact)
├── utils/          # 유틸리티 함수 (Lenis 스무스 스크롤, 앵커 링크 이동)
├── App.js          # 라우팅 및 초기 스크립트 설정
└── index.js        # 애플리케이션 엔트리 포인트
```

## 시작하기 (Getting Started)

### 1. 패키지 설치

```bash
yarn install
# 또는
npm install
```

### 2. 개발 서버 실행

```bash
yarn start
# 또는
npm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하여 결과를 확인할 수 있습니다.

### 3. 프로덕션 빌드

```bash
yarn build
# 또는
npm run build
```

`build/` 폴더에 배포용 정적 파일이 생성됩니다.
