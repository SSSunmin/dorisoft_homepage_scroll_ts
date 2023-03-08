import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta
          name="description"
          content="3D 온라인게임, 모바일 및 다양한 3D 컨버젼스 어플리케이션을 전문적으로 개발합니다. "
        />
        <meta property="og:image" content="imgs/dorisoftLogo.png" />
        <meta property="og:site-name" content="DORISOFT" />
        <meta
          property="og:description"
          content="3D 온라인게임, 모바일 및 다양한 3D 컨버젼스 어플리케이션을 전문적으로 개발합니다."
        />
      </Head>
      <body>
        <div id="overlay-root"></div>
        <Main />
        <div id="backdrop-root"></div>
        <NextScript />
        <Script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAOMAP_API_KEY}&libraries=services,clusterer&autoload=false`}
          strategy="beforeInteractive"
        ></Script>
      </body>
    </Html>
  );
}
