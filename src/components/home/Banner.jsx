import { Button } from 'antd';
import React from 'react';

const Banner = () => {
    return (
      <div className=" grid grid-cols-2 text-white bg-gray-800 p-32  ">
        <div className=" w-5/6 my-auto mx-auto ">
          <p className="text-3xl mb-8 ">
            The QuizAPI includes a wide number of{" "}
            <span className=" text-green-500">Linux</span>
            <span>|</span> questions
          </p>
          <p className="mb-16 font-light text-lg">
            Test your knowledge or easily embed a quiz on your website with the
            Quiz API
          </p>
          <div className="flex ">
            <Button
              className=" text-xs border border-green-500 mr-5"
              type="primary"
              shape="round"
            >
              TAKE A QUIZ
            </Button>
            <Button
              className=" border bg-violet-500 text-xs font-medium"
              type="primary"
              shape="round"
            >
              API DOCUMENTATION
            </Button>
          </div>
        </div>
        <div>
          <img
            src="https://images.prismic.io/edapp-website/NzZmYTljYzktYTNmMS00YTM2LThhZjgtOTBlY2MwM2Y0ZWY0_online_quiz_platforms_-_edapp.png?auto=compress,format&rect=0,0,600,446&w=600&h=446"
            alt=""
          />
        </div>
      </div>
    );
};

export default Banner;