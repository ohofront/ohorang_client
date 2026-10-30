import port01 from "../assets/img/port01.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";
import port04 from "../assets/img/port04.jpg";
import port05 from "../assets/img/port05.jpg";

export const headerNav = ["intro", "skill", "site", "portfolio", "contact"];

export const introText = {
  title: "developer",
  desc: ["talent is", "found at the end of the", "effort"],
};

export const skillText = [
  {
    title: "실수를 두려워하지 않습니다.",
    desc: "개발자의 경우 코드를 구성하면서 실수를 자주 만나는 편이기 때문에 과거의 실수를 생각하기 보다는 그 실수를 더 많은 사람들과 공유하고 피드백을 받으며 건강한 개발자가 되어야 한다고 생각합니다. 그중 하나의 방법으로 개발자가 코드를 구성하는 것은 매일 쌓이는 일기와 같아서 코드를 구성하며 자신이 어떻게 발전하고 있는지 꾸준히 개발일지에 기록하면서 되돌아보고 있습니다.",
  },
  {
    title: "꾸준히 할수록 기회는 있다고 생각합니다.",
    desc: "운이 좋은 사람은 없습니다. 단지 운을 만들 뿐이다. 운을 만들기 위해서는 내가 좋아하는 일이나 내가 하고 싶은 일에 몰두하면 된다. 몰두 하다보면 길이 보이고 방향이 보이게 된다. 운이란 고된 노동과 노력을 통해 스스로 만들어 내는 것이다.",
  },
  {
    title: "항상 사용자 입장에서 생각합니다.",
    desc: "프로젝트를 진행했을 때 계속해서 사용자 입장에서 생각하며 사용자가 무엇을 필요한지 끊임없이 고민하거나 주변 사람들한테 물어보기도 했습니다. 하지만 코드를 구현하는데 에러가 많이 발생해 문제를 해결하기 위해 매일 교육이 끝나고 저녁에 시간을 투자해 팀원끼리 학습한 내용을 질문하고 도와주는 스터디를 진행했습니다.",
  },
];

export const siteText = [
  {
    text: ["make", "site compliant with", "react.js"],
    title: "리액트를 이용한 사이트 제작",
    code: "https://github.com/webstoryboy/port2023-vite",
    view: "https://port2023-vite.netlify.app",
    info: [
      "홈페이지 제작",
      "개발 기간 : 4개월",
      "기술 스택 : HTML5/CSS3, React, React-redux, styled-component",
    ],
  },
  {
    text: ["make", "site compliant with", "javascript"],
    title: "자바스크립트를 이용한 사이트 제작",
    code: "https://github.com/webstoryboy/port2023-react",
    view: "https://port2023-react.netlify.app",
    info: [
      "홈페이지 제작",
      "개발 기간 : 2개월",
      "기술 스택 : HTML5/CSS3, javascript",
    ],
  },
  {
    text: ["make", "site compliant with", "tyepescript & react.js"],
    title: "타입스크립트와 리액트를 이용한 사이트 제작",
    code: "https://github.com/webstoryboy/port2023-vue",
    view: "https://port2023-vue.netlify.app",
    info: [
      "홈페이지 제작",
      "개발 기간 : 3개월",
      "기술 스택 : HTML5/CSS3, styled-components, typescript, react.js",
    ],
  },
  {
    text: ["make", "site compliant with", "tyepescript & react.js"],
    title: "타입스크립트와 리액트를 이용한 사이트 제작",
    code: "https://github.com/webstoryboy/port2023-next",
    view: "https://port2023-next.netlify.app",
    info: [
      "홈페이지 제작",
      "개발 기간 : 6개월",
      "기술 스택 : HTML5/CSS3, MUI, typescript, react.js",
    ],
  },
];

export const portText = [
  {
    num: "01",
    title: "GME(글로벌머니익스프레스) 홈페이지 ",
    desc: "기존에는 홈페이지 수정할 경우 해외에 있는 팀원에게 전달해서 작업을 진행해야 했기 때문에 많은 시간이 소요되었습니다. 이점을 단축시키기 위해 제가 유연하게 사용할 수 있는 React 프레임워크를 활용해 개발했고 기존 Legacy Project와 최대한 비슷하게 UI를 제작했습니다. 또한 재사용성이 쉽도록 컴포넌트를 만들며 개발했습니다. ",
    img: port01,
    code: "https://github.com/kimsangjunv1/-React-Portfolio",
    view: "https://portfoliosj-react.netlify.app",
    name: "김상* 포트폴리오",
  },
  {
    num: "02",
    title: "B2B 송금시스템",
    desc: "기존 Legacy Project와 비슷하게 UI를 개발했지만, css를 활용해 부드러운 Animation과 js를 활용해 DropMeny, ul li 태그를 활용한 리스트를 구성했습니다. 그리고 기존에는 없었던 비밀번호를 localStorage에 저장해서 사용자가 편리하게 시스템을 사용할 수 있도록 제작했습니다.",
    img: port02,
    code: "https://github.com/seolhee313/PORTFOLIO-REACT",
    view: "https://portfolio-313.web.app/",
    name: "천설* 포트폴리오",
  },
  {
    num: "03",
    title: "렛잇고 앱 사용자 화면 개발",
    desc: "배달 플랫폼의 높은 수수료와 버려지는 음식물 쓰레기 증가로 인해 만들게 되었습니다. 사장님이 직접 게시글을 올릴 수 있는 기능을 활용해 개성있는 할인 마케팅 서비스를 제공하는 것을 목표로 했습니다. 그리고 소비자는 위치에 따라서 원하는 시간에 맞춰 음식을 포장할 수 있도록 기능을 구현했습니다.",
    img: port03,
    code: "https://github.com/seolhee313/PORTFOLIO-REACT",
    view: "https://portfolio-313.web.app/",
    name: "천설* 포트폴리오",
  },
  {
    num: "04",
    title: "ETRI 문화유산 애셋관리 시스템",
    desc: "박물관의 디지털 콘테츠에 대한 수요가 급증했고, 문화유산 원본 가치를 잘 담아내면서도 여러방식으로 활용할 수있도록 제작하였습니다. 궁극적으로는 박물관과 첨단 기술 분야간 새로운 데이터 활용과 관리를 목표로 하며 제작했습니다. 큐레이터가 직접 소장품, 애셋을 선택후 관람객에게 선보일 전시를 생성할 수 있도록 만들었습니다.",
    img: port04,
    code: "https://github.com/dlgnsrb227/portfolio-next",
    view: "https://hoongportfolio-next.netlify.app/",
    name: "이훈* 포트폴리오",
  },
  {
    num: "05",
    title: "반얀트리 카시아 속초 호텔 스마트 & 비대면 통합 운영 시스템",
    desc: "강력했던 팬데믹 이후 세계의 모든 서비스 업계는 비대면 기능이 중요한 화두가 되었고, 이에 경험과 공유를 중시하는 어린세대 부터 전세대를 아우르는 새로운 호텔 서비슬르 개발하고자 하는 목표가 있었습니다. 단순한 ICT 서비스 도입이 아닌 최고의 고객경험과 더불어 경영 효율을 제공할 수 있는 통합 운영시스템을 설계했고 구현했습니다.",
    img: port05,
    code: "/",
    view: "https://junseungpark.github.io/portfolio/index3.html",
    name: "박준* 포트폴리오",
  },
];

export const contactText = [
  {
    link: "tel:01051867482",
    title: "전화걸기",
  },
  {
    link: "mailto:youngho7482@gmail.com",
    title: "mail : youngho7482@gmail.com",
  },
];

export const footerText = [
  {
    title: "youtube",
    desc: "유튜브에 오시면 더 많은 강의를 볼 수 있습니다.",
    link: "https://www.youtube.com/@Webstoryboy",
  },
  {
    title: "github",
    desc: "깃헙에 오시면 더 많은 소스를 볼 수 있습니다.",
    link: "https://github.com/webstoryboy",
  },
  {
    title: "blog",
    desc: "블러그에 오시면 더 많은 정보를 볼 수 있습니다.",
    link: "https://webstoryboy.co.kr",
  },
  {
    title: "gsap",
    desc: "GSAP에 오시면 더 많은 강의를 볼 수 있습니다.",
    link: "https://www.youtube.com/playlist?list=PL4UVBBIc6giL8-6jvrClimg0cFL-Muqiq",
  },
  {
    title: "react",
    desc: "리액트로 만든 사이트를 같이 만들어 봅니다.",
    link: "https://github.com/webstoryboy/port2023-react",
  },
  {
    title: "vue",
    desc: "뷰로 만든 사이트를 같이 만들어 봅니다.",
    link: "https://github.com/webstoryboy/port2023-vue",
  },
  {
    title: "next",
    desc: "넥스트로 만든 사이트를 같이 만들어 봅니다.",
    link: "https://github.com/webstoryboy/port2023-next",
  },
];
