<script setup>
import ProgramImg from "@/assets/img/undraw_programming_65t2.svg";
</script>
<template>
  <div class="hero-container md:h-screen h-screen w-full">
    <div
      class="relative md:top-20 top-24 lg:top-40 md:flex md:justify-between lg:px-28 px-10 md:px-24 md:py-10 w-full h-full"
    >
      <div class="lg:flex gap-16 justify-center text-justify">
        <div class="w-full mb-28 lg:mb-0">
          <h1
            class="uppercase lg:text-left text-center text-3xl font-bold pb-4"
          >
            know who <span class="text-[#c770F0] bold">i'M</span>
          </h1>
          <p class="leading-6 text-xl">
            My name is Obasan Joseph, a passionate full-stack developer from Nigeria. I am completing my final year in Computer Science at Hallmark University, with a strong focus on building responsive and user-friendly web applications using technologies like HTML, CSS, JavaScript, Vue.js, and Firebase. I interned at 720 Degree Innovation Hub and am currently expanding into cybersecurity while exploring forex trading to sharpen my analytical skills.
          </p>
          <p class="text-[#9B7EAC] text-justify pt-4">
            <i
              >“Building bridges between ideas and reality, one webpage at a
              time.”
            </i>
          </p>
          <h3 class="text-center text-[#9B7EAC]">— Obasan Joseph</h3>
        </div>
        <div class="w-full -mt-8">
          <img :src="ProgramImg" alt="" srcset="" class="w-96" />
        </div>
      </div>

    </div>
  </div>
  <div class="pt-44 md:pt-0">
    <div>
      <h1 class="text-center text-[#9B7EAC] text-3xl">My Skillset</h1>
      <div
        class="flex flex-shrink flex-wrap gap-7 lg:gap-14 mt-11 justify-center pb-11"
      >
        <div class="card">
          <div class="card-details">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              class="w-36"
            >
              <path
                fill="#ffff"
                d="M14 95.8C14 42.9 56.9 0 109.8 0H274.2C327.1 0 370 42.9 370 95.8C370 129.3 352.8 158.8 326.7 175.9C352.8 193 370 222.5 370 256C370 308.9 327.1 351.8 274.2 351.8H272.1C247.3 351.8 224.7 342.4 207.7 326.9V415.2C207.7 468.8 163.7 512 110.3 512C57.5 512 14 469.2 14 416.2C14 382.7 31.2 353.2 57.2 336.1C31.2 319 14 289.5 14 256C14 222.5 31.2 193 57.2 175.9C31.2 158.8 14 129.3 14 95.8zM176.3 191.6H109.8C74.2 191.6 45.4 220.4 45.4 256C45.4 291.4 74 320.2 109.4 320.4C109.5 320.4 109.7 320.4 109.8 320.4H176.3V191.6zM207.7 256C207.7 291.6 236.5 320.4 272.1 320.4H274.2C309.7 320.4 338.6 291.6 338.6 256C338.6 220.4 309.7 191.6 274.2 191.6H272.1C236.5 191.6 207.7 220.4 207.7 256zM109.8 351.8C109.7 351.8 109.5 351.8 109.4 351.8C74 352 45.4 380.8 45.4 416.2C45.4 451.7 74.6 480.6 110.3 480.6C146.6 480.6 176.3 451.2 176.3 415.2V351.8H109.8zM109.8 31.4C74.2 31.4 45.4 60.2 45.4 95.8C45.4 131.4 74.2 160.2 109.8 160.2H176.3V31.4H109.8zM207.7 160.2H274.2C309.7 160.2 338.6 131.4 338.6 95.8C338.6 60.2 309.7 31.4 274.2 31.4H207.7V160.2z"
              />
            </svg>
          </div>
          <button class="card-button">Figma</button>
        </div>
        <div class="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            class="w-36"
          >
            <path
              fill="#ffff"
              d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"
            />
          </svg>
          <button class="card-button">HTML</button>
        </div>
        <div class="card w-36">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-36"
          >
            <path
              fill="#ffff"
              d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"
            />
          </svg>
          <button class="card-button">CSS</button>
        </div>
        <div class="card W-36 h-36">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path
              fill="#ffff"
              class="w-36"
              d="M333.5 201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4 238.2 333.5 225 333.5 201.4zM517 188.6c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1 0-55.8 28.1-54.7 58.5c1 29.3-.3 67.2-9.8 98.1c-9.6 31-25.7 50.6-52.2 53.1v28.5c26.4 2.5 42.6 22.1 52.2 53.1c9.5 30.9 10.9 68.8 9.8 98.1c-1.1 30.5 22.7 58.5 54.7 58.5h328.7c32.1 0 55.8-28.1 54.7-58.5c-1-29.3 .3-67.2 9.8-98.1c9.6-31 25.7-50.6 52.1-53.1v-28.5C542.7 239.2 526.5 219.6 517 188.6zM300.2 375.1h-97.9V136.8h97.4c43.3 0 71.7 23.4 71.7 59.4c0 25.3-19.1 47.9-43.5 51.8v1.3c33.2 3.6 55.5 26.6 55.5 58.3C383.4 349.7 352.1 375.1 300.2 375.1zM290.2 266.4h-50.1v78.4h52.3c34.2 0 52.3-13.7 52.3-39.5C344.7 279.6 326.1 266.4 290.2 266.4z"
            />
          </svg>
          <button class="card-button">BOOTSTRAP</button>
        </div>
        <div class="card w-36">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="w-36"
          >
            <path
              fill="#ffff"
              d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"
            />
          </svg>
          <button class="card-button">JAVASCRIPT</button>
        </div>
        <div class="card w-36">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="w-36"
          >
            <path
              fill="#ffff"
              d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"
            />
          </svg>
          <button class="card-button">VUE</button>
        </div>
        <div class="card w-36">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-36"
          >
            <path
              fill="#ffff"
              d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"
            />
          </svg>
          <button class="card-button">REACT</button>
        </div>
        <div class="card w-36">
          <svg
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 256 154"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="mt-10"
          >
            <linearGradient
              id="a"
              x1="-2.777778%"
              x2="100%"
              y1="32%"
              y2="67.555556%"
            >
              <stop offset="0" stop-color="#2298bd" />
              <stop offset="1" stop-color="#0ed7b5" />
            </linearGradient>
            <path
              d="m128 0c-34.1333333 0-55.4666667 17.0666667-64 51.2 12.8-17.0666667 27.7333333-23.4666667 44.8-19.2 9.737481 2.4343704 16.697363 9.4985481 24.401067 17.3184 12.549689 12.7383704 27.07437 27.4816 58.798933 27.4816 34.133333 0 55.466667-17.0666667 64-51.2-12.8 17.0666667-27.733333 23.4666667-44.8 19.2-9.737481-2.4343704-16.697363-9.4985481-24.401067-17.3184-12.549689-12.7383704-27.07437-27.4816-58.798933-27.4816zm-64 76.8c-34.1333333 0-55.46666667 17.0666667-64 51.2 12.8-17.066667 27.7333333-23.466667 44.8-19.2 9.7374815 2.43437 16.697363 9.498548 24.4010667 17.3184 12.5496889 12.73837 27.0743703 27.4816 58.7989333 27.4816 34.133333 0 55.466667-17.066667 64-51.2-12.8 17.066667-27.733333 23.466667-44.8 19.2-9.737481-2.43437-16.697363-9.498548-24.401067-17.3184-12.549689-12.7383704-27.07437-27.4816-58.798933-27.4816z"
              fill="#ffff"
            />
          </svg>
          <button class="card-button">TAILWIND</button>
        </div>
        <div class="card w-36">
          <svg
            viewBox="-47.5 0 351 351"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="xMidYMid"
          >
            <defs>
              <path
                fill="#ffff"
                d="M1.25273437,280.731641 L2.85834533,277.600858 L102.211177,89.0833546 L58.0613266,5.6082033 C54.3920011,-1.28304578 45.0741245,0.473674398 43.8699203,8.18789086 L1.25273437,280.731641 Z"
                id="path-1"
              ></path>
              <filter
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
                filterUnits="objectBoundingBox"
                id="filter-2"
              >
                <feGaussianBlur
                  stdDeviation="17.5"
                  in="SourceAlpha"
                  result="shadowBlurInner1"
                ></feGaussianBlur>
                <feOffset
                  dx="0"
                  dy="0"
                  in="shadowBlurInner1"
                  result="shadowOffsetInner1"
                ></feOffset>
                <feComposite
                  in="shadowOffsetInner1"
                  in2="SourceAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                  result="shadowInnerInner1"
                ></feComposite>
                <feColorMatrix
                  values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.06 0"
                  type="matrix"
                  in="shadowInnerInner1"
                ></feColorMatrix>
              </filter>
              <path
                d="M134.417103,148.974235 L166.455722,116.161738 L134.417104,55.1546874 C131.374828,49.3635911 123.983911,48.7568362 120.973828,54.5646483 L103.26875,88.6738296 L102.739423,90.4175473 L134.417103,148.974235 Z"
                id="path-3"
              ></path>
              <filter
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
                filterUnits="objectBoundingBox"
                id="filter-4"
              >
                <feGaussianBlur
                  stdDeviation="3.5"
                  in="SourceAlpha"
                  result="shadowBlurInner1"
                ></feGaussianBlur>
                <feOffset
                  dx="1"
                  dy="-9"
                  in="shadowBlurInner1"
                  result="shadowOffsetInner1"
                ></feOffset>
                <feComposite
                  in="shadowOffsetInner1"
                  in2="SourceAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                  result="shadowInnerInner1"
                ></feComposite>
                <feColorMatrix
                  values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.09 0"
                  type="matrix"
                  in="shadowInnerInner1"
                ></feColorMatrix>
              </filter>
            </defs>
            <g>
              <path
                d="M0,282.99762 L2.12250746,280.0256 L102.527363,89.5119284 L102.739423,87.4951323 L58.478806,4.35817711 C54.7706269,-2.60604179 44.3313035,-0.845245771 43.1143483,6.95065473 L0,282.99762 Z"
                fill="#ffff"
              ></path>
              <g>
                <use
                  fill="#ffff"
                  fill-rule="evenodd"
                  xlink:href="#path-1"
                ></use>
                <use
                  fill="#ffff"
                  filter="url(#filter-2)"
                  xlink:href="#path-1"
                ></use>
              </g>
              <path
                d="M135.004975,150.380704 L167.960199,116.629461 L134.995423,53.6993114 C131.866109,47.7425353 123.128817,47.7253411 120.032618,53.6993112 L102.421015,87.2880848 L102.421015,90.1487443 L135.004975,150.380704 Z"
                fill="#ffff"
              ></path>
              <g>
                <use fill="#ffff" xlink:href="#path-3"></use>
                <use fill="#ffff" xlink:href="#path-3"></use>
              </g>
              <polygon
                fill="#ffff"
                points="0 282.99762 0.962097168 282.030396 4.45771144 280.60956 132.935323 152.60956 134.563025 148.178595 102.513123 87.1048584"
              ></polygon>
              <path
                d="M139.120971,347.551268 L255.395916,282.703666 L222.191698,78.2093373 C221.153051,71.8112478 213.303658,69.2818149 208.724314,73.8694368 L0.000254726368,282.997875 L115.608454,347.545536 C122.914643,351.624979 131.812872,351.62689 139.120971,347.551268"
                fill="#ffff"
              ></path>
              <path
                d="M254.354084,282.159837 L221.401937,79.2179369 C220.371175,72.8684188 213.843792,70.2409553 209.299213,74.79375 L1.28945312,282.600785 L115.627825,346.509458 C122.878548,350.557931 131.709226,350.559827 138.961846,346.515146 L254.354084,282.159837 Z"
                fill="#ffff"
              ></path>
              <path
                d="M139.120907,345.64082 C131.812808,349.716442 122.914579,349.714531 115.60839,345.635089 L0.93134768,282.014551 L0.000191044776,282.997875 L115.60839,347.545536 C122.914579,351.624979 131.812808,351.62689 139.120907,347.551268 L255.395853,282.703666 L255.111196,280.951785 L139.120907,345.64082 Z"
                fill="#ffff"
              ></path>
            </g>
          </svg>
          <button class="card-button">FIREBASE</button>
        </div>
        <div class="w-36 card">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
            <path
              fill="#ffff"
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            />
          </svg>
          <div class="card-button">GitHub</div>
        </div>
        <div class="card w-36">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
            <path
              fill="#FFFF"
              d="M59.2 0l40 40-24 24 32 31.9L59.4 128l-40-39.9 7.7-56z"
            />
          </svg>
          <div class="card-button">BULMA</div>
        </div>
        <div class="w-36 card">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              fill="#FFFF"
              d="M439.6 236.1L244 40.5a28.9 28.9 0 0 0 -40.8 0l-40.7 40.6 51.5 51.5c27.1-9.1 52.7 16.8 43.4 43.7l49.7 49.7c34.2-11.8 61.2 31 35.5 56.7-26.5 26.5-70.2-2.9-56-37.3L240.2 199v121.9c25.3 12.5 22.3 41.9 9.1 55a34.3 34.3 0 0 1 -48.6 0c-17.6-17.6-11.1-46.9 11.3-56v-123c-20.8-8.5-24.6-30.7-18.6-45L142.6 101 8.5 235.1a28.9 28.9 0 0 0 0 40.8l195.6 195.6a28.9 28.9 0 0 0 40.8 0l194.7-194.7a28.9 28.9 0 0 0 0-40.8z"
            />
          </svg>
          <div class="card-button">Git</div>
        </div>
        <div class="card w-36">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
            <mask
              id="a"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
              style="mask-type: alpha"
            >
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M90.767 127.126a7.968 7.968 0 0 0 6.35-.244l26.353-12.681a8 8 0 0 0 4.53-7.209V21.009a8 8 0 0 0-4.53-7.21L97.117 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026L15.6 32.013a5.328 5.328 0 0 0-6.807.302l-7.048 6.411a5.335 5.335 0 0 0-.006 7.888L20.796 64 1.74 81.387a5.336 5.336 0 0 0 .006 7.887l7.048 6.411a5.327 5.327 0 0 0 6.807.303l21.974-16.68 50.45 46.025a7.96 7.96 0 0 0 2.743 1.793Zm5.252-92.183L57.74 64l38.28 29.058V34.943Z"
                clip-rule="evenodd"
              />
            </mask>
            <g mask="url(#a)">
              <path
                fill="#0065A9"
                d="M123.471 13.82 97.097 1.12A7.973 7.973 0 0 0 88 2.668L1.662 81.387a5.333 5.333 0 0 0 .006 7.887l7.052 6.411a5.333 5.333 0 0 0 6.811.303l103.971-78.875c3.488-2.646 8.498-.158 8.498 4.22v-.306a8.001 8.001 0 0 0-4.529-7.208Z"
              />
              <g filter="url(#b)">
                <path
                  fill="#007ACC"
                  d="m123.471 114.181-26.374 12.698A7.973 7.973 0 0 1 88 125.333L1.662 46.613a5.333 5.333 0 0 1 .006-7.887l7.052-6.411a5.333 5.333 0 0 1 6.811-.303l103.971 78.874c3.488 2.647 8.498.159 8.498-4.219v.306a8.001 8.001 0 0 1-4.529 7.208Z"
                />
              </g>
              <g filter="url(#c)">
                <path
                  fill="#1F9CF0"
                  d="M97.098 126.882A7.977 7.977 0 0 1 88 125.333c2.952 2.952 8 .861 8-3.314V5.98c0-4.175-5.048-6.266-8-3.313a7.977 7.977 0 0 1 9.098-1.549L123.467 13.8A8 8 0 0 1 128 21.01v85.982a8 8 0 0 1-4.533 7.21l-26.369 12.681Z"
                />
              </g>
              <path
                fill="url(#d)"
                fill-rule="evenodd"
                d="M90.69 127.126a7.968 7.968 0 0 0 6.349-.244l26.353-12.681a8 8 0 0 0 4.53-7.21V21.009a8 8 0 0 0-4.53-7.21L97.039 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026-21.974-16.68a5.328 5.328 0 0 0-6.807.302l-7.048 6.411a5.336 5.336 0 0 0-.006 7.888L20.718 64 1.662 81.386a5.335 5.335 0 0 0 .006 7.888l7.048 6.411a5.328 5.328 0 0 0 6.807.303l21.975-16.681 50.45 46.026a7.959 7.959 0 0 0 2.742 1.793Zm5.252-92.184L57.662 64l38.28 29.057V34.943Z"
                clip-rule="evenodd"
                opacity="0.25"
                style="mix-blend-mode: overlay"
              />
            </g>
            <defs>
              <filter
                id="b"
                width="144.744"
                height="113.408"
                x="-8.41115"
                y="22.5944"
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="4.16667" />
                <feColorMatrix
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  in2="BackgroundImageFix"
                  mode="overlay"
                  result="effect1_dropShadow_1_36"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_36"
                  result="shape"
                />
              </filter>
              <filter
                id="c"
                width="56.6667"
                height="144.007"
                x="79.6667"
                y="-8.0035"
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="4.16667" />
                <feColorMatrix
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  in2="BackgroundImageFix"
                  mode="overlay"
                  result="effect1_dropShadow_1_36"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_36"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="d"
                x1="63.9222"
                x2="63.9222"
                y1="0.329902"
                y2="127.67"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#fff" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <button class="card-button">VS Code</button>
        </div>
        <div class="card w-36">
          <div class="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
              <path fill="#ffff" d="M63.984 17.184 127.964 128H0Zm0 0" />
            </svg>
          </div>
          <div class="card-button">vercel</div>
        </div>
      </div>
    </div>
  </div>
  <!-- New Section: My Projects -->
  <div class="container mx-auto py-12 px-4">
    <div class="flex flex-col md:flex-row justify-between gap-12">
      <div class="w-full md:w-1/2">
        <h2 class="text-2xl font-bold text-white mb-4">My Education</h2>
        <ul class="space-y-4">
          <li class="flex items-start">
            <span class="inline-block w-2 h-2 mt-2 bg-white rounded-full mr-3"></span>
            <div>
              <h3 class="text-lg font-semibold text-white">Junior Secondary School</h3>
              <p class="text-gray-300">Premier College, Ijebu Ode | Completed 2015-2018</p>
              <p class="text-gray-300">
Finished my junior secondary education here, laying the foundation for my academic journey.
              </p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="inline-block w-2 h-2 mt-2 bg-white rounded-full mr-3"></span>
            <div>
              <h3 class="text-lg font-semibold text-white">Senior Secondary School</h3>
              <p class="text-gray-300">Federal Science and Technical College (FSTC) | Completed 2019-2021</p>
              <p class="text-gray-300">
              Studied Computer Craft in CSS, completed NECO, NABTEB, and WAEC exams, building my technical skills.
              </p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="inline-block w-2 h-2 mt-2 bg-white rounded-full mr-3"></span>
            <div>
              <h3 class="text-lg font-semibold text-white">Bachelor’s in Computer Science</h3>
              <p class="text-gray-300">Hallmark University | 2021 - 2025 (completed)</p>
              <p class="text-gray-300">
              I graduated from Hallmark University with a Bachelor’s in Computer Science and performed well, ranking among the top students. During my time in school, I built a series of web projects, honing my skills in web development.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="w-full md:w-1/2">
        <h2 class="text-2xl font-bold text-[#fff] mb-4">My Experience</h2>
        <ul class="space-y-4">
          <li class="flex items-start">
            <span class="inline-block w-2 h-2 mt-2 bg-white rounded-full mr-3"></span>
            <div>
              <h3 class="text-lg font-semibold text-white">UI/UX Designer</h3>
              <p class="text-gray-300">720 Degree Innovation Hub | Before University</p>
              <p class="text-gray-300">
                Started my career in UI/UX design, building a strong foundation before pursuing higher education.
              </p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="inline-block w-2 h-2 mt-2 bg-white rounded-full mr-3"></span>
            <div>
              <h3 class="text-lg font-semibold text-white">Web Developer (Internship)</h3>
              <p class="text-gray-300">720 Degree Innovation Hub | 2022 - 2023</p>
              <p class="text-gray-300">
                Enhanced my web development skills during my university years, working with the team and learning from hands-on experience.
              </p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="inline-block w-2 h-2 mt-2 bg-white rounded-full mr-3"></span>
            <div>
              <h3 class="text-lg font-semibold text-white">Web Developer (Self-Taught)</h3>
              <p class="text-gray-300">720 Degree Innovation Hub | During University</p>
              <p class="text-gray-300">
                Served as the main manager at 720, overseeing operations and applying my skills in a leadership role.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>

  </div>
  <div style="display: flex; justify-content: center; margin: auto;">
    <!-- From Uiverse.io by andrew-demchenk0 --> 
    <button class="buttonn" type="button">
      <span class="button__text">Download CV</span>
      <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
    </button>
  </div>
  <section>
          <div class="footer mt-8 lg:px-8 pt-3 lg:bg-[#0a0416] capitalize">
        <div class="lg:flex justify-between text-center">
          <h4 class="lg:pt-5">
            Designed and developed by <i class="">obasan joseph</i>
          </h4>
          <h4 class="lg:pt-5">
            <p>&copy; {{ currentYear }} DevJay. All rights reserved.</p>
          </h4>
          <div class="hidden lg:block">
            <div class="cardd">
              <a
                class="socialContainer containerTwo"
                href="https://x.com/OlanJayy?t=xvgrR1CmDUI_-aqYx_L5qg&s=09"
              >
                <svg viewBox="0 0 16 16" class="socialSvg twitterSvg">
                  <path
                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                  ></path>
                </svg>
              </a>

              <a
                class="socialContainer containerThree"
                href="https://www.instagram.com/jayni_yi/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                  xml:space="preserve"
                >
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>

              <a
                class="socialContainer containerFour"
                href="https://wa.me/07079887893"
              >
                <svg viewBox="0 0 16 16" class="socialSvg whatsappSvg">
                  <path
                    d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>
<style scoped>
.card {
  width: 190px;
  height: 254px;
  border-radius: 20px;
  position: relative;
  padding: 1.8rem;
  border: 2px solid #c3c6ce;
  transition: 0.5s ease-out;
  overflow: visible;
}

.card-details {
  color: black;
  height: 100%;
  gap: 0.5em;
  display: grid;
  place-content: center;
}

.card-button {
  transform: translate(-50%, 125%);
  width: 60%;
  border-radius: 1rem;
  border: none;
  background-image: linear-gradient(270deg, rgb(0, 0, 0), rgb(20, 15, 35));
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  opacity: 0;
  transition: 0.3s ease-out;
}

.text-body {
  color: rgb(134, 134, 134);
}

.text-title {
  font-size: 1.5em;
  font-weight: bold;
}

.card:hover {
  border-color: #9b7eac;
  box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}

.card:hover .card-button {
  transform: translate(-50%, 50%);
  opacity: 1;
}

.buttonn {
  position: relative;
  width: 168px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: #fff;
  overflow: hidden;
  border-radius: 20px;
}

.buttonn, .button__icon, .button__text {
  transition: all 0.3s;
}

.buttonn .button__text {
  transform: translateX(22px);
  color: #360a4f;
  font-weight: 600;
}

.buttonn .button__icon {
  position: absolute;
  transform: translateX(109px);
  height: 100%;
  width: 39px;
  background-color: #3e075e;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 1.3rem;
}

.buttonn .svg {
  width: 20px;
  fill: #fff;
}

.buttonn:hover .button__text {
  color: transparent;
}

.buttonn:hover .button__icon {
  width: 148px;
  transform: translateX(0);
}

.buttonn:active .button__icon {
  background-color: #9B7EAC;
}

.buttonn:active {
  border: 1px solid #fff;
}
/* for all social containers*/
.socialContainer {
  width: 32px;
  height: 32px;
  background-color: rgb(65, 29, 131);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition-duration: 0.3s;
  border-radius: 30px;
}
/* instagram*/
.containerOne:hover {
  background-color: #d62976;
  transition-duration: 0.3s;
  transform: scale(1.2);
}
/* twitter*/
.containerTwo:hover {
  background-color: #00acee;
  transition-duration: 0.3s;
  transform: scale(1.2);
}
/* linkdin*/
.containerThree:hover {
  background-color: #0072b1;
  transition-duration: 0.3s;
  transform: scale(1.2);
}
/* Whatsapp*/
.containerFour:hover {
  background-color: #128c7e;
  transition-duration: 0.3s;
  transform: scale(1.2);
}

.socialContainer:active {
  transform: scale(0.9);
  transition-duration: 0.3s;
}

.socialSvg {
  width: 17px;
}

.socialSvg path {
  fill: rgb(255, 255, 255);
}

.socialContainer:hover .socialSvg {
  animation: slide-in-top 0.3s both;
}

@keyframes slide-in-top {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

ul {
  list-style: none;
}
.icon-content svg:hover {
  fill: #0274b3;
}
.example-2 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.example-2 .icon-content {
  margin: 0 10px;
  position: relative;
}
.example-2 .icon-content .tooltip {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  padding: 6px 10px;
  border-radius: 5px;
  opacity: 0;
  visibility: hidden;
  font-size: 14px;
  transition: all 0.3s ease;
}
.example-2 .icon-content:hover .tooltip {
  opacity: 1;
  visibility: visible;
  top: -50px;
}
.example-2 .icon-content a {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #4d4d4d;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
}
.example-2 .icon-content a:hover {
  box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
}
.example-2 .icon-content a svg {
  position: relative;
  z-index: 1;
  width: 30px;
  height: 30px;
}
.example-2 .icon-content a:hover {
  color: white;
}
.example-2 .icon-content a .filled {
  position: absolute;
  top: auto;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: #000;
  transition: all 0.3s ease-in-out;
}
.example-2 .icon-content a:hover .filled {
  height: 100%;
}

.example-2 .icon-content a[data-social="linkedin"] .filled,
.example-2 .icon-content a[data-social="linkedin"] ~ .tooltip {
  background-color: #25d366;
}

.example-2 .icon-content a[data-social="github"] .filled,
.example-2 .icon-content a[data-social="github"] ~ .tooltip {
  background-color: #24262a;
}
.example-2 .icon-content a[data-social="instagram"] .filled,
.example-2 .icon-content a[data-social="instagram"] ~ .tooltip {
  background: linear-gradient(
    45deg,
    #25d366,
    #5b51db,
    #b33ab4,
    #c135b4,
    #e1306c,
    #0274b3
  );
}
.example-2 .icon-content a[data-social="youtube"] .filled,
.example-2 .icon-content a[data-social="youtube"] ~ .tooltip {
  background-color: #0274b3;
}

:root {
  --wave-duration: 1s;
  --blink-duration: 1s;
}

.gradient-text {
  background: linear-gradient(to right, #ffffff, #ff77b4);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.wave-hand {
  font-size: 3rem;
  display: inline-block;
  animation: wave var(--wave-duration) infinite ease-in-out;
}

@keyframes wave {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(15deg);
  }
  75% {
    transform: rotate(-10deg);
  }
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.animate-blink {
  animation: blink var(--blink-duration) infinite;
}
.cardd {
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  gap: 20px;
}

</style>