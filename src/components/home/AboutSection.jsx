import { Col, Row } from 'antd';
// import React from 'react';
import { AiFillTool } from 'react-icons/ai';
import { RiComputerLine } from 'react-icons/ri';
import { FaCode } from 'react-icons/fa';
import { CgFileDocument } from 'react-icons/cg';

const AboutSection = () => {
    return (
      <div className="grid grid-cols-5 gap-10 py-32 px-12 bg-slate-50">
        <div className=" col-span-3 w-5/6 mx-auto">
          <h3 className="text-3xl mb-5">What is all About?</h3>
          <p className=" font-thin">
            The <span className="font-bold">QuizAPI</span> is a SaaS which lets
            you test your knowledge on a wide variety of technical topics. You
            can create your own Quiz or get random set of questions for a
            speicifc topic including Linux, DevOps, BASH, PHP and lots more. We
            offer an easy to use API which allows you to embed the quiz on your
            own website.
          </p>
          <div className="mt-8">
            <Row className="my-10">
              <Col span={12}>
                <AiFillTool className="text-green-500 text-3xl my-3" />
                <p className="text-xl my-3 ">CUSTOMIZABLE </p>
                <p className="text-md font-thin">Create your own Quiz</p>
              </Col>
              <Col span={12}>
                <RiComputerLine className="text-green-500 text-3xl my-3" />
                <p className="text-xl my-3">RESPONSIVE </p>
                <p className="text-md font-thin">
                  Create your own Quiz Wrapper
                </p>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <FaCode className="text-green-500 text-3xl my-3" />
                <p className="text-xl my-3">CLEAN </p>
                <p className="text-md font-thin">Easy to use API</p>
              </Col>
              <Col span={12}>
                <CgFileDocument className="text-green-500 text-3xl my-3" />
                <p className="text-xl my-3">DOCUMENTED </p>
                <p className="text-md font-thin">Fully documented API</p>
              </Col>
            </Row>
          </div>
        </div>
        <div className="col-span-2">
          <img
            src="https://cdn.dribbble.com/users/5357784/screenshots/15127765/dribbble_post.png"
            alt=""
          />
        </div>
      </div>
    );
};

export default AboutSection;