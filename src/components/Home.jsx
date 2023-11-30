import React from "react";

// border-b-2
// border-[#93C5FD]

const Home = () => {
  return (
    <div
      id="home"
      className="bg-primary-bg-color py-[50px] w-full scroll-mt-[75px]"
    >
      <div className="container flex flex-col mx-auto w-11/12 md:max-w-5xl ">
        {/*  */}
        {/* Portrait and self-summary */}
        <div className="flex flex-col md:flex-row-reverse">
          {/*  */}
          {/* Portrait */}
          <div className="portrait-image container w-9/12 mx-auto md:max-w-lg">
            {/* rounded-tr-[500px] rounded-tl-[500px] rounded-br-[500px] rounded-bl-[500px] */}
            <img
              className="border-4 border-blue-300 animate-borderWobble md:border-8"
              src="../assets/JL2023.png"
              alt="a picture of Jay Leverton"
            />
          </div>

          {/*  */}
          {/* Self-summary and Socials */}
          <div className="container flex flex-col justify-center max-w-md mx-auto text-center pt-2 md:text-left md:pt-0">
            {/*  */}
            {/* Self-summary */}
            <h1 className="text-5xl font-bold mx-3">
              Front-End React Developer
            </h1>
            <p className="text-lg mt-6 text-slate-300 mx-3">
              Hi, I'm Jay Leverton. A Front-end web developer specialising in
              React, based in London.
            </p>

            {/*  */}
            {/* Socials */}
            <div className="socials flex max-w-md justify-center my-8 mx-auto md:max-w-lg md:justify-start lg:mx-1">
              <a href="https://github.com/JayLeverton" target="_blank">
                <svg
                  className="mx-3 my-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  strokeWidth="0"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#CCCCCC"
                    strokeWidth="0"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M4.0744 2.9938C4.13263 1.96371 4.37869 1.51577 5.08432 1.15606C5.84357 0.768899 7.04106 0.949072 8.45014 1.66261C9.05706 1.97009 9.11886 1.97635 10.1825 1.83998C11.5963 1.65865 13.4164 1.65929 14.7213 1.84164C15.7081 1.97954 15.7729 1.97265 16.3813 1.66453C18.3814 0.651679 19.9605 0.71795 20.5323 1.8387C20.8177 2.39812 20.8707 3.84971 20.6494 5.04695C20.5267 5.71069 20.5397 5.79356 20.8353 6.22912C22.915 9.29385 21.4165 14.2616 17.8528 16.1155C17.5801 16.2574 17.3503 16.3452 17.163 16.4167C16.5879 16.6363 16.4133 16.703 16.6247 17.7138C16.7265 18.2 16.8491 19.4088 16.8973 20.4002C16.9844 22.1922 16.9831 22.2047 16.6688 22.5703C16.241 23.0676 15.6244 23.076 15.2066 22.5902C14.9341 22.2734 14.9075 22.1238 14.9075 20.9015C14.9075 19.0952 14.7095 17.8946 14.2417 16.8658C13.6854 15.6415 14.0978 15.185 15.37 14.9114C17.1383 14.531 18.5194 13.4397 19.2892 11.8146C20.0211 10.2698 20.1314 8.13501 18.8082 6.83668C18.4319 6.3895 18.4057 5.98446 18.6744 4.76309C18.7748 4.3066 18.859 3.71768 18.8615 3.45425C18.8653 3.03823 18.8274 2.97541 18.5719 2.97541C18.4102 2.97541 17.7924 3.21062 17.1992 3.49805L16.2524 3.95695C16.1663 3.99866 16.07 4.0147 15.975 4.0038C13.5675 3.72746 11.2799 3.72319 8.86062 4.00488C8.76526 4.01598 8.66853 3.99994 8.58215 3.95802L7.63585 3.49882C7.04259 3.21087 6.42482 2.97541 6.26317 2.97541C5.88941 2.97541 5.88379 3.25135 6.22447 4.89078C6.43258 5.89203 6.57262 6.11513 5.97101 6.91572C5.06925 8.11576 4.844 9.60592 5.32757 11.1716C5.93704 13.1446 7.4295 14.4775 9.52773 14.9222C10.7926 15.1903 11.1232 15.5401 10.6402 16.9905C10.26 18.1319 10.0196 18.4261 9.46707 18.4261C8.72365 18.4261 8.25796 17.7821 8.51424 17.1082C8.62712 16.8112 8.59354 16.7795 7.89711 16.5255C5.77117 15.7504 4.14514 14.0131 3.40172 11.7223C2.82711 9.95184 3.07994 7.64739 4.00175 6.25453C4.31561 5.78028 4.32047 5.74006 4.174 4.83217C4.09113 4.31822 4.04631 3.49103 4.0744 2.9938Z"
                      fill="#ffffff"
                    ></path>
                    <path
                      d="M3.33203 15.9454C3.02568 15.4859 2.40481 15.3617 1.94528 15.6681C1.48576 15.9744 1.36158 16.5953 1.66793 17.0548C1.8941 17.3941 2.16467 17.6728 2.39444 17.9025C2.4368 17.9449 2.47796 17.9858 2.51815 18.0257C2.71062 18.2169 2.88056 18.3857 3.05124 18.5861C3.42875 19.0292 3.80536 19.626 4.0194 20.6962C4.11474 21.1729 4.45739 21.4297 4.64725 21.5419C4.85315 21.6635 5.07812 21.7352 5.26325 21.7819C5.64196 21.8774 6.10169 21.927 6.53799 21.9559C7.01695 21.9877 7.53592 21.998 7.99999 22.0008C8.00033 22.5527 8.44791 23.0001 8.99998 23.0001C9.55227 23.0001 9.99998 22.5524 9.99998 22.0001V21.0001C9.99998 20.4478 9.55227 20.0001 8.99998 20.0001C8.90571 20.0001 8.80372 20.0004 8.69569 20.0008C8.10883 20.0026 7.34388 20.0049 6.67018 19.9603C6.34531 19.9388 6.07825 19.9083 5.88241 19.871C5.58083 18.6871 5.09362 17.8994 4.57373 17.2891C4.34391 17.0194 4.10593 16.7834 3.91236 16.5914C3.87612 16.5555 3.84144 16.5211 3.80865 16.4883C3.5853 16.265 3.4392 16.1062 3.33203 15.9454Z"
                      fill="#ffffff"
                    ></path>
                  </g>
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/jay-leverton-5079a7a4/"
                target="_blank"
              >
                <svg
                  className="mx-3 my-2"
                  width="35px"
                  height="35px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M22 3.47059V20.5294C22 20.9194 21.845 21.2935 21.5692 21.5693C21.2935 21.8451 20.9194 22 20.5294 22H3.47056C3.08053 22 2.70648 21.8451 2.43069 21.5693C2.15491 21.2935 1.99997 20.9194 1.99997 20.5294V3.47059C1.99997 3.08056 2.15491 2.70651 2.43069 2.43073C2.70648 2.15494 3.08053 2 3.47056 2H20.5294C20.9194 2 21.2935 2.15494 21.5692 2.43073C21.845 2.70651 22 3.08056 22 3.47059V3.47059ZM7.88232 9.64706H4.94115V19.0588H7.88232V9.64706ZM8.14703 6.41176C8.14858 6.18929 8.10629 5.96869 8.02258 5.76255C7.93888 5.55642 7.81539 5.36879 7.65916 5.21039C7.50294 5.05198 7.31705 4.92589 7.1121 4.83933C6.90715 4.75277 6.68715 4.70742 6.46468 4.70588H6.41173C5.95931 4.70588 5.52541 4.88561 5.20549 5.20552C4.88558 5.52544 4.70585 5.95934 4.70585 6.41176C4.70585 6.86419 4.88558 7.29809 5.20549 7.61801C5.52541 7.93792 5.95931 8.11765 6.41173 8.11765V8.11765C6.63423 8.12312 6.85562 8.0847 7.06325 8.00458C7.27089 7.92447 7.46071 7.80422 7.62186 7.65072C7.78301 7.49722 7.91234 7.31346 8.00245 7.10996C8.09256 6.90646 8.14169 6.6872 8.14703 6.46471V6.41176ZM19.0588 13.3412C19.0588 10.5118 17.2588 9.41177 15.4706 9.41177C14.8851 9.38245 14.3021 9.50715 13.7798 9.77345C13.2576 10.0397 12.8142 10.4383 12.4941 10.9294H12.4117V9.64706H9.64703V19.0588H12.5882V14.0529C12.5457 13.5403 12.7072 13.0315 13.0376 12.6372C13.368 12.2429 13.8407 11.9949 14.3529 11.9471H14.4647C15.4 11.9471 16.0941 12.5353 16.0941 14.0176V19.0588H19.0353L19.0588 13.3412Z"
                      stroke="#ffffff"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/*  */}
        {/* Techstack Container */}
        <div className="techstack container max-w-md mx-auto md:ml-6 md:mx-0">
          <div className="container flex mx-auto justify-between items-center align-middle flex-wrap md:justify-start">
            {/*  */}
            {/* html5 svg */}
            <div className="pt-4 mx-auto">
              <svg
                width="80px"
                height="80px"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M6 28L4 3H28L26 28L16 31L6 28Z"
                    fill="#E44D26"
                  ></path>{" "}
                  <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"></path>{" "}
                  <path
                    d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"
                    fill="white"
                  ></path>{" "}
                </g>
              </svg>
            </div>

            {/*  */}
            {/* css3 svg */}
            <div className="pt-4 pr-[8px] mx-auto">
              <svg
                width="80px"
                height="80px"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M6 28L4 3H28L26 28L16 31L6 28Z"
                    fill="#1172B8"
                  ></path>{" "}
                  <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path>{" "}
                  <path
                    d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z"
                    fill="white"
                  ></path>{" "}
                </g>
              </svg>
            </div>

            {/*  */}
            {/* javascript svg */}
            <div className="pt-4 pr-[22px] mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="JavaScript"
                role="img"
                viewBox="0 0 512 512"
                width="66px"
                height="66px"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <rect width="512" height="512" rx="15%" fill="#f7df1e"></rect>
                  <path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"></path>
                </g>
              </svg>
            </div>

            {/*  */}
            {/* react */}
            <div className="pt-4 pr-[14px] mx-auto">
              <svg
                width="68px"
                height="68px"
                viewBox="0 0 73 73"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>frameworks-and-libraries/react</title>
                  <desc>Created with Sketch.</desc> <defs> </defs>
                  <g
                    id="frameworks-and-libraries/react"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="container"
                      transform="translate(2.000000, 2.000000)"
                      fill="#1c1c1c"
                      fillRule="nonzero"
                      stroke="#0C6D87"
                      strokeWidth="2"
                    >
                      <rect
                        id="mask"
                        x="-1"
                        y="-1"
                        width="71"
                        height="71"
                        rx="14"
                      ></rect>
                    </g>
                    <g
                      id="React-icon"
                      transform="translate(12.000000, 15.000000)"
                      fill="#61DAFB"
                      fillRule="nonzero"
                    >
                      <path
                        d="M48.9302846,21.7611789 C48.9302846,18.5243902 44.8768293,15.4569106 38.6621951,13.5546748 C40.0963415,7.22052846 39.4589431,2.18109756 36.6504065,0.567682927 C36.0030488,0.189227642 35.2461382,0.00995934959 34.4195122,0.00995934959 L34.4195122,2.23089431 C34.8776423,2.23089431 35.2461382,2.32052846 35.554878,2.4898374 C36.9093496,3.26666667 37.4969512,6.2245935 37.0388211,10.029065 C36.9292683,10.9652439 36.75,11.9512195 36.5308943,12.9571138 C34.5788618,12.479065 32.447561,12.1105691 30.2067073,11.8715447 C28.8621951,10.029065 27.4678862,8.35589431 26.0636179,6.89186992 C29.3103659,3.87418699 32.3579268,2.22093496 34.4294715,2.22093496 L34.4294715,0 C34.4294715,0 34.4294715,0 34.4294715,0 C31.6906504,0 28.1052846,1.95203252 24.4800813,5.33821138 C20.854878,1.97195122 17.2695122,0.0398373984 14.5306911,0.0398373984 L14.5306911,2.26077236 C16.5922764,2.26077236 19.6497967,3.90406504 22.8965447,6.90182927 C21.5022358,8.36585366 20.1079268,10.029065 18.7833333,11.8715447 C16.5325203,12.1105691 14.4012195,12.479065 12.449187,12.9670732 C12.220122,11.9711382 12.050813,11.0050813 11.9313008,10.0788618 C11.4632114,6.27439024 12.0408537,3.31646341 13.3853659,2.5296748 C13.6841463,2.3504065 14.072561,2.27073171 14.5306911,2.27073171 L14.5306911,0.049796748 C14.5306911,0.049796748 14.5306911,0.049796748 14.5306911,0.049796748 C13.6941057,0.049796748 12.9371951,0.229065041 12.279878,0.607520325 C9.48130081,2.22093496 8.85386179,7.2504065 10.2979675,13.5646341 C4.10325203,15.4768293 0.0697154472,18.5343496 0.0697154472,21.7611789 C0.0697154472,24.9979675 4.12317073,28.0654472 10.3378049,29.9676829 C8.90365854,36.3018293 9.54105691,41.3412602 12.3495935,42.9546748 C12.9969512,43.3331301 13.7538618,43.5123984 14.5904472,43.5123984 C17.3292683,43.5123984 20.9146341,41.5603659 24.5398374,38.174187 C28.1650407,41.5404472 31.7504065,43.472561 34.4892276,43.472561 C35.325813,43.472561 36.0827236,43.2932927 36.7400407,42.9148374 C39.5386179,41.3014228 40.1660569,36.2719512 38.7219512,29.9577236 C44.896748,28.0554878 48.9302846,24.9880081 48.9302846,21.7611789 Z M35.9632114,15.1182927 C35.5947154,16.4030488 35.1365854,17.7276423 34.6186992,19.0522358 C34.2103659,18.2554878 33.7821138,17.4587398 33.3140244,16.6619919 C32.8558943,15.8652439 32.3678862,15.0884146 31.879878,14.3315041 C33.2941057,14.5406504 34.6585366,14.7995935 35.9632114,15.1182927 Z M31.4018293,25.725 C30.625,27.0695122 29.828252,28.3443089 29.001626,29.5294715 C27.5176829,29.6589431 26.0138211,29.7286585 24.5,29.7286585 C22.9961382,29.7286585 21.4922764,29.6589431 20.0182927,29.5394309 C19.1916667,28.3542683 18.3849593,27.0894309 17.6081301,25.754878 C16.8512195,24.4502033 16.1640244,23.1256098 15.5365854,21.7910569 C16.154065,20.4565041 16.8512195,19.1219512 17.5981707,17.8172764 C18.375,16.4727642 19.171748,15.1979675 19.998374,14.0128049 C21.4823171,13.8833333 22.9861789,13.8136179 24.5,13.8136179 C26.0038618,13.8136179 27.5077236,13.8833333 28.9817073,14.0028455 C29.8083333,15.1880081 30.6150407,16.4528455 31.3918699,17.7873984 C32.1487805,19.0920732 32.8359756,20.4166667 33.4634146,21.7512195 C32.8359756,23.0857724 32.1487805,24.4203252 31.4018293,25.725 Z M34.6186992,24.4302846 C35.1565041,25.7648374 35.6146341,27.0993902 35.9930894,28.3941057 C34.6884146,28.7128049 33.3140244,28.9817073 31.8898374,29.1908537 C32.3778455,28.4239837 32.8658537,27.6371951 33.3239837,26.8304878 C33.7821138,26.0337398 34.2103659,25.2270325 34.6186992,24.4302846 Z M24.5199187,35.0569106 C23.5936992,34.100813 22.6674797,33.0351626 21.7512195,31.8699187 C22.647561,31.9097561 23.5638211,31.9396341 24.4900407,31.9396341 C25.4262195,31.9396341 26.352439,31.9197154 27.2587398,31.8699187 C26.3623984,33.0351626 25.4361789,34.100813 24.5199187,35.0569106 Z M17.1101626,29.1908537 C15.695935,28.9817073 14.3315041,28.7227642 13.0268293,28.404065 C13.3953252,27.1193089 13.8534553,25.7947154 14.3713415,24.470122 C14.7796748,25.2668699 15.2079268,26.0636179 15.6760163,26.8603659 C16.1441057,27.6571138 16.6221545,28.4339431 17.1101626,29.1908537 Z M24.470122,8.46544715 C25.3963415,9.42154472 26.322561,10.4871951 27.2388211,11.652439 C26.3424797,11.6126016 25.4262195,11.5827236 24.5,11.5827236 C23.5638211,11.5827236 22.6376016,11.6026423 21.7313008,11.652439 C22.6276423,10.4871951 23.5538618,9.42154472 24.470122,8.46544715 Z M17.1002033,14.3315041 C16.6121951,15.098374 16.124187,15.8851626 15.6660569,16.6918699 C15.2079268,17.4886179 14.7796748,18.2853659 14.3713415,19.0821138 C13.8335366,17.747561 13.3754065,16.4130081 12.9969512,15.1182927 C14.301626,14.8095528 15.6760163,14.5406504 17.1002033,14.3315041 Z M8.08699187,26.8006098 C4.56138211,25.296748 2.28069106,23.3247967 2.28069106,21.7611789 C2.28069106,20.197561 4.56138211,18.2156504 8.08699187,16.721748 C8.94349593,16.353252 9.8796748,16.0245935 10.8457317,15.7158537 C11.4134146,17.6678862 12.1603659,19.6995935 13.0865854,21.7810976 C12.1703252,23.8526423 11.4333333,25.8743902 10.8756098,27.8164634 C9.88963415,27.5077236 8.95345528,27.1691057 8.08699187,26.8006098 Z M13.445122,41.0325203 C12.0906504,40.2556911 11.5030488,37.2977642 11.9611789,33.4932927 C12.0707317,32.5571138 12.25,31.5711382 12.4691057,30.5652439 C14.4211382,31.0432927 16.552439,31.4117886 18.7932927,31.650813 C20.1378049,33.4932927 21.5321138,35.1664634 22.9363821,36.6304878 C19.6896341,39.6481707 16.6420732,41.3014228 14.5705285,41.3014228 C14.1223577,41.2914634 13.7439024,41.2018293 13.445122,41.0325203 Z M37.0686992,33.4434959 C37.5367886,37.2479675 36.9591463,40.2058943 35.6146341,40.9926829 C35.3158537,41.1719512 34.927439,41.251626 34.4693089,41.251626 C32.4077236,41.251626 29.3502033,39.6083333 26.1034553,36.6105691 C27.4977642,35.1465447 28.8920732,33.4833333 30.2166667,31.6408537 C32.4674797,31.4018293 34.5987805,31.0333333 36.550813,30.5453252 C36.779878,31.5512195 36.9591463,32.5172764 37.0686992,33.4434959 Z M40.9030488,26.8006098 C40.0465447,27.1691057 39.1103659,27.4977642 38.1443089,27.8065041 C37.576626,25.8544715 36.8296748,23.8227642 35.9034553,21.7412602 C36.8197154,19.6697154 37.5567073,17.6479675 38.1144309,15.7058943 C39.1004065,16.0146341 40.0365854,16.353252 40.9130081,16.721748 C44.4386179,18.2256098 46.7193089,20.197561 46.7193089,21.7611789 C46.7093496,23.3247967 44.4286585,25.3067073 40.9030488,26.8006098 Z"
                        id="Shape"
                      ></path>
                      <circle
                        id="Oval"
                        cx="24.4900407"
                        cy="21.7611789"
                        r="4.55142276"
                      ></circle>
                    </g>
                  </g>
                </g>
              </svg>
            </div>

            {/*  */}
            {/* tailwind */}
            <div className="pt-4 px-[8px] mx-auto">
              <svg
                className="rounded-2xl border-2 border-[#0D6077]"
                fill="#00b4b6"
                width="68px"
                height="68px"
                viewBox="-2.4 -2.4 28.80 28.80"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#00b4b6"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0">
                  <rect
                    x="-2.4"
                    y="-2.4"
                    width="28.80"
                    height="28.80"
                    rx="0"
                    fill="#242424"
                    strokeWidth="0"
                  ></rect>
                </g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
