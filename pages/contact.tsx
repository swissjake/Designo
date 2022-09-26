import React from "react";
import Location from "../components/location/Location";
import styles from "../styles/Contact.module.scss";

const contact = () => {
  return (
    <section>
      <div className="container  md:px-[40px] xl:px-[165px] pt-[100px] md:pt-0">
        <div
          className={`${styles.contact} md:rounded-[15px] px-[24px] md:px-[58px] lg:px-0 py-[71px] lg:py-0 `}
        >
          <div className="flex flex-col lg:flex-row text-center md:text-start">
            <div className="flex flex-col justify-center lg:py-[135px] lg:px-[95px]">
              <h1 className={`${styles.contactTitle} md:leading-[48px]`}>
                Contact Us
              </h1>
              <p
                className={`${styles.contactText} lg:w-[90%] leading-[25px] md:leading-[26px] mt-[24px] md:mt-[32px]`}
              >
                Ready to take it to the next level? Let’s talk about your
                project or idea and find out how we can help your business grow.
                If you are looking for unique digital experiences that’s
                relatable to your users, drop us a line.
              </p>
            </div>
            <div className="block lg:py-[55px] lg:pr-[95px] lg:w-[100%] mt-[48px] md:mt-[40px] lg:mt-0">
              <form action="">
                <div className="flex flex-col gap-y-[25px]">
                  <div className="flex w-full  border-b-2 border-white">
                    <input
                      className={`${styles.contactInput} flex-1`}
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="w-full flex border-b-2 border-white">
                    <input
                      className={`${styles.contactInput} flex-1`}
                      type="text"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="w-full flex border-b-2 border-white">
                    <input
                      className={`${styles.contactInput} flex-1`}
                      type="text"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="w-full flex  border-b-2 border-white">
                    <textarea
                      className={`${styles.contactTextArea} flex-1`}
                      placeholder="Message"
                    />
                  </div>
                </div>
                <div className="w-full flex justify-center md:justify-end mt-[40px] md:mt-[24px]">
                  <button className={`${styles.contactBtn}`}>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Location />
    </section>
  );
};

export default contact;