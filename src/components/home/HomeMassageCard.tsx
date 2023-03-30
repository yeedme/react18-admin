import React from "react";
import Avatar from "antd/es/avatar/avatar";
import jack from "../assets/imgsvg/jack.svg";
import like from "../assets/imgsvg/like.svg";
type Props = {};

const HomeMassageCard = (props: Props) => {
  return (
    <div className="w-full h-80 bg-white rounded border-2 p-4 my-4 flex justify-between flex-col">
      <div className="flex justify-between w-full">
        <div className="flex w-42 items-center shrink-0 font-light">
          <Avatar src={jack} size={54} />
          <div className="ml-4 h-full flex flex-col justify-between ">
            <h2>name</h2>
            <h2 className="text-gray-400">timeline timelinetimeline</h2>
          </div>
        </div>
        {/* 更多信息操作图标 */}
        <div className="w-8 h-8 cursor-pointer">
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10899" width="100%" height="100%"><path d="M223.962372 607.897867c-52.980346 0-95.983874-43.003528-95.983874-95.983874s43.003528-95.983874 95.983874-95.983874 95.983874 43.003528 95.983874 95.983874S276.942718 607.897867 223.962372 607.897867z" fill="#575B66" p-id="10900"></path><path d="M511.913993 607.897867c-52.980346 0-95.983874-43.003528-95.983874-95.983874s43.003528-95.983874 95.983874-95.983874 95.983874 43.003528 95.983874 95.983874S564.894339 607.897867 511.913993 607.897867z" fill="#575B66" p-id="10901"></path><path d="M800.037628 607.897867c-52.980346 0-95.983874-43.003528-95.983874-95.983874s43.003528-95.983874 95.983874-95.983874 95.983874 43.003528 95.983874 95.983874S852.84596 607.897867 800.037628 607.897867z" fill="#575B66" p-id="10902"></path></svg>
        </div>
      </div>
      {/* 主题文本区 */}
      <div className="h-40 text-gray-700">
        <h2 className="text-lg text-black">关于废话文学用正常的文本来说</h2>
        尊敬的用户您好，我们非常荣幸地向您宣布，我们的团队一直在不断努力，积极探索和研究最新的科技趋势和市场需求，以确保我们能够为您提供更加专业、高效、可靠的服务。我们深知客户是企业发展的根本，因此我们始终坚持以客户为中心，不断提升自身核心竞争力，为客户创造更多的价值和利益。在今后的合作中，我们将继续保持如此高度的责任心和敬业精神，与您共同开创美好的未来！
      </div>
      <div className="w-full flex justify-between ">
        <div className="w-auto flex ">
          <div className="flex text-lg items-center w-12  ">
            <div className="w-8 h-8 ">
              <svg
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2911"
                width="100%"
                height="100%"
                className="cursor-pointer"
              >
                <path
                  d="M1020.377987 468.716066a84.323832 84.323832 0 0 0-53.615893-63.851873 150.6127 150.6127 0 0 0-48.741903-7.310985H660.175705c-11.210978 0-11.210978 0-9.748981-11.210978 5.361989-31.194938 9.748981-62.876875 16.084968-94.071812a237.859526 237.859526 0 0 0-4.87399-125.266751c-12.672975-37.043926-27.295946-73.112854-40.942919-109.669781a73.112854 73.112854 0 0 0-40.455919-45.32991 131.115739 131.115739 0 0 0-116.493768 3.412993 63.851873 63.851873 0 0 0-37.529925 61.413878c0 40.455919 0 80.911839 2.923994 121.367758a66.289868 66.289868 0 0 1-8.773982 37.043926c-31.194938 53.615893-53.615893 97.483806-86.272829 146.225709a349.966303 349.966303 0 0 1-32.169935 36.555927 93.096815 93.096815 0 0 0-35.58193 69.700861v453.299097a82.373836 82.373836 0 0 0 81.886837 82.861835h445.501113a240.78452 240.78452 0 0 0 75.549849-9.74898 116.005769 116.005769 0 0 0 83.347834-105.281791 133.065735 133.065735 0 0 0-6.335987-57.515885 12.672975 12.672975 0 0 1 2.436995-9.747981 129.165743 129.165743 0 0 0 28.757943-86.759827 141.839717 141.839717 0 0 0-7.798985-33.144934 13.647973 13.647973 0 0 1 0-14.622971 119.417762 119.417762 0 0 0 28.757943-78.961842 281.728439 281.728439 0 0 0-8.285984-41.917917v-10.235979a126.241749 126.241749 0 0 0 29.244942-61.414878V479.439045zM82.583855 438.983125h54.590892q82.373836 0 82.373836 82.373836v420.155163q0 82.373836-82.373836 82.373836h-54.589892q-82.374836 0-82.374835-82.373836V521.356961q0-82.373836 82.373835-82.373836z"
                  fill="#c9c9c9"
                  p-id="2912"
                ></path>
              </svg>
            </div>
            <div className="w-6 h-6 flex items-center justify-center ml-2">
              12
            </div>
          </div>

          <div className="flex text-lg items-center w-12 ml-6 ">
            <div className="w-8 h-8 ">
              <svg
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2911"
                width="100%"
                height="100%"
                className="cursor-pointer"
              >
                <path
                  fill="#c9c9c9"
                  d="M829.901823 129.231773 192.003917 129.231773c-70.423653 0-127.578302 57.154649-127.578302 127.579301l0 382.736105c0 70.424652 57.154649 127.579501 127.578302 127.579501l127.387831 0 0 65.193199c0 23.92258 13.395918 45.418206 34.831384 56.008426 8.86499 4.272703 18.305789 6.442432 27.682032 6.442432 13.461473 0 26.791835-4.402815 37.956665-12.94942l148.948213-114.694637L829.901823 767.12668c70.424652 0 127.579501-57.154849 127.579501-127.579501L957.481324 256.811074C957.481324 186.386422 900.325475 129.231773 829.901823 129.231773L829.901823 129.231773zM893.689375 639.547179c0 35.276882-28.511869 63.79075-63.788751 63.79075l-271.682199-0.063557c-7.015044 0-13.841615 2.293645-19.391652 6.570545l-155.709029 122.540318 0-97.215488c0-17.605064-14.290311-31.830819-31.832817-31.830819l-159.281007 0c-35.274884 0-63.789751-28.514867-63.789751-63.79075L128.214167 256.811074c0-35.276882 28.513868-63.789751 63.789751-63.789751L829.901823 193.021324c35.276882 0 63.788751 28.513868 63.788751 63.789751l0 382.736105L893.689375 639.547179zM319.583219 384.389376c-35.276882 0-63.789751 28.512868-63.789751 63.789751 0 35.276882 28.512868 63.789751 63.789751 63.789751s63.789751-28.513868 63.789751-63.789751C383.372969 412.903244 354.860101 384.389376 319.583219 384.389376L319.583219 384.389376zM510.951271 384.389376c-35.274684 0-63.788551 28.512868-63.788551 63.789751 0 35.276882 28.512868 63.789751 63.788551 63.789751 35.275883 0 63.789751-28.513868 63.789751-63.789751C574.741022 412.903244 546.227154 384.389376 510.951271 384.389376L510.951271 384.389376zM702.321522 384.389376c-35.276882 0-63.788751 28.512868-63.788751 63.789751 0 35.276882 28.511869 63.789751 63.788751 63.789751S766.111073 483.45501 766.111073 448.179127C766.111073 412.903244 737.598404 384.389376 702.321522 384.389376L702.321522 384.389376z"
                  p-id="2912"
                ></path>
              </svg>
            </div>
            <div className="w-6 h-6 flex items-center justify-center ">12</div>
          </div>

          <div className="flex text-lg items-center w-12  ml-6">
            <div className="w-8 h-8 ">
              <svg
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2911"
                width="100%"
                height="100%"
                className="cursor-pointer"
              >
                <path
                  d="M943.273421 506.259252C906.84065 320.247768 724.900901 185.233772 510.685052 185.233772c-214.228129 0-396.154575 135.01502-432.589392 321.025481-0.529049 2.765997-0.529049 5.611811 0 8.376785C114.530476 700.66901 296.457946 835.685054 510.685052 835.685054c84.754313 0 166.926824-21.296025 237.682307-61.551868 10.854209-6.196119 14.542204-19.829628 8.197706-30.479175-6.341429-10.599406-20.225647-14.158465-31.172977-8.006348-63.754023 36.307927-138.010237 55.516408-214.709083 55.516408-190.771905 0-352.71932-117.805056-386.970402-280.715403 34.250058-162.89909 196.22101-280.690844 386.970402-280.690844 190.771905 0 352.71932 117.791753 386.969379 280.690844-12.098549 57.384965-41.084721 111.433952-84.026742 156.599617-8.574283 8.997931-8.032954 23.089881 1.174756 31.464619 9.184173 8.356318 23.608697 7.872295 32.207539-1.147126 49.846268-52.396347 83.111906-115.577319 96.265484-182.739974C943.813726 511.859807 943.813726 509.026272 943.273421 506.259252z"
                  fill="#272636"
                  p-id="8926"
                ></path>
                <path
                  d="M328.909032 515.482311c0 100.308567 81.792864 181.669596 182.689832 181.669596 100.872409 0 182.665273-81.362053 182.665273-181.669596 0.001023-100.307543-81.791841-181.634804-182.665273-181.634804l0 0C410.701896 333.847507 328.909032 415.174768 328.909032 515.482311zM648.616494 515.482311c0 75.237565-61.337997 136.257314-137.01763 136.257314l0 0c-75.67861 0-137.042189-61.018725-137.042189-136.257314 0-75.211982 61.362556-136.231731 137.042189-136.231731C587.277474 379.25058 648.616494 440.270329 648.616494 515.482311z"
                  fill="#272636"
                  p-id="8927"
                ></path>
              </svg>
            </div>
            <div className="w-6 h-6 flex items-center justify-center ">12</div>
          </div>
        </div>

        <div className="w-8 h-8">
          <svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="9904"
            width="100%"
            height="100%"
            className="cursor-pointer"
          >
            <path
              d="M768.73106 703.537712c-35.606921 0-67.945574 14.793214-91.167479 38.359147l-309.109357-171.670082c9.116748-17.545439 14.621199-37.155048 14.621199-58.312783 0-12.55703-2.408198-24.426004-5.676466-35.950949l304.63699-189.215522c22.705863 20.469679 52.464304 33.198723 85.146985 33.198723 70.525785 0 127.978498-57.452713 127.978498-127.978498S837.708718 63.989249 767.182933 63.989249s-127.978498 57.452713-127.978498 127.978498c0 14.621199 2.92424 28.382328 7.396607 41.455401L344.716278 420.746514c-23.049891-22.705863-54.700487-36.983034-89.791366-36.983034-70.525785 0-127.978498 57.452713-127.978498 127.978498s57.452713 127.978498 127.978498 127.978498c25.630102 0 49.540064-7.740635 69.493701-20.813707l321.150344 178.378633c-3.096254 11.008903-5.160423 22.18982-5.160423 34.058794 0 70.525785 57.452713 127.978498 127.978498 127.978498s127.978498-57.452713 127.978498-127.978498S839.256845 703.537712 768.73106 703.537712zM767.182933 127.978498c35.262893 0 63.989249 28.726356 63.989249 63.989249s-28.726356 63.989249-63.989249 63.989249-63.989249-28.726356-63.989249-63.989249S731.92004 127.978498 767.182933 127.978498zM191.107677 511.913993c0-35.262893 28.726356-63.989249 63.989249-63.989249s63.989249 28.726356 63.989249 63.989249-28.726356 63.989249-63.989249 63.989249S191.107677 547.176886 191.107677 511.913993zM768.73106 895.505459c-35.262893 0-63.989249-28.726356-63.989249-63.989249s28.726356-63.989249 63.989249-63.989249 63.989249 28.726356 63.989249 63.989249C832.720309 866.951117 803.993953 895.505459 768.73106 895.505459z"
              fill="#575B66"
              p-id="9905"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
export default HomeMassageCard;