import React from "react";
import flags from "../assets/flags.jpg";
import { Slide } from "react-awesome-reveal";

const Faq = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-32 gap-10  pb-10 ">
      <Slide direction="left">
        <div>
          <h1 className="text-center text-3xl font-bold oswald">
            Frequently Asked Questions
          </h1>

          <h4 className="text-xl mt-5 text-center font-semibold mb-10 w-1/2 mx-auto">
            At the heart of our commitment to providing exceptional immigration
            solutions stands our trusted services.
          </h4>

          <img className="w-[400px] mx-auto opacity-70" src={flags} alt="" />
        </div>
      </Slide>

      {/* accordion */}
      <Slide direction="right">
        <div className="dark:bg-gray-900 dark:text-white rounded px-5">
          <div className="collapse collapse-plus ">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What services do you offer?
            </div>
            <div className="collapse-content">
              <p className="mb-5">
                We offer comprehensive immigration and visa consulting services,
                including visa application assistance, document preparation,
              </p>

              <li>Comprehensive Visa Assistance</li>
              <li>Visa Category Expertise</li>
              <li>Transparency and Communication</li>
            </div>
          </div>
          <div className="collapse collapse-plus ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What is the consultation process like?
            </div>
            <div className="collapse-content">
              <p>
                We offer comprehensive immigration and visa consulting services,
                including visa application assistance, document preparation,
              </p>

              <li>Comprehensive Visa Assistance</li>
              <li>Visa Category Expertise</li>
              <li>Transparency and Communication</li>
            </div>
          </div>
          <div className="collapse collapse-plus ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How much do your services cost?
            </div>
            <div className="collapse-content">
              <p>
                We offer comprehensive immigration and visa consulting services,
                including visa application assistance, document preparation, Our
                cost are between 1000 to 5000 USD.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How do I get started with your services?
            </div>
            <div className="collapse-content">
              <p>
                We offer comprehensive immigration and visa consulting services,
                including visa application assistance. You can get started by
                checking out our visa types and application details
              </p>

              <li>Checkout our visa categories</li>
              <li>See visa requirement details</li>
              <li>Apply for a visa</li>
            </div>
          </div>

          <div className="collapse collapse-plus ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What is your success rate with visa applications?
            </div>
            <div className="collapse-content">
              <p>
                We offer comprehensive immigration and visa consulting services,
                including visa application assistance. You can get started by
                checking out our visa types and application details
              </p>

              <li>More than 5 visa categories</li>
              <li>10+ countries</li>
              <li>100% success rate</li>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Faq;
