import Image from "next/image";
import React, { useRef } from "react";
import Location from "../components/location/Location";
import styles from "../styles/Contact.module.scss";
import contactBg from "../assets/backrounds/contactBg.png";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import errorImg from "../assets/mycontact/error.png";
// import circlemd from "../assets/mycontact/circlemd.png";

const contact: React.FC = (): JSX.Element => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .max(50, "Name too long")
      // eslint-disable-next-line jsx-a11y/alt-text
      .required(`Can't be empty`),
    email: Yup.string().email("Invalid email").required("Can't be empty"),
    phone: Yup.string().required("Can't be empty"),
    message: Yup.string()
      .max(250, "message too long")
      .required(`Can't be empty`),
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formRef = useRef<HTMLFormElement>(null);

  formRef?.current?.addEventListener("submit", (e: any) => {
    e.preventDefault();
  });

  return (
    <section>
      <div className="relative container  md:px-[40px] xl:px-[165px] pt-[100px] md:pt-0 ">
        <div
          className={`${styles.contact} relative md:rounded-[15px] px-[24px] md:px-[58px] lg:px-0 py-[71px] lg:py-0 `}
        >
          {/* <div className="hidden md:block lg:hidden absolute top-0 left-0">
            <Image src={circlemd} alt="image" objectFit="contain" />
          </div> */}
          <div className="flex flex-col lg:flex-row text-center md:text-start">
            <div className="relative z-10 flex flex-col justify-center lg:py-[135px] lg:px-[95px]">
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

            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ errors, touched, handleSubmit, values, handleChange }) => (
                <div className="block lg:py-[55px] lg:pr-[95px] lg:w-[100%] mt-[48px] md:mt-[40px] lg:mt-0">
                  <Form
                    onSubmit={handleSubmit}
                    className="relative z-10"
                    action=""
                  >
                    <div className="flex flex-col gap-y-[25px]">
                      <div className="flex w-full  border-b-2 border-white hover:border-b-4 cursor-pointer">
                        <input
                          className={`${styles.contactInput} flex-1 bg-transparent text-[15px] leading-[26px] font-medium`}
                          type="text"
                          name="name"
                          placeholder="Name"
                          onChange={handleChange}
                        />
                        <div className="flex items-center mb-[10px] ">
                          <p className="text-white italic text-[12px] leading-[26px] font-normal mr-[10px]">
                            {touched.name && errors.name}
                          </p>
                          {errors.name && <Image src={errorImg} alt="error" />}
                        </div>
                      </div>
                      <div className="w-full flex border-b-2 border-white hover:border-b-4 cursor-pointer">
                        <input
                          className={`${styles.contactInput} flex-1 text-[15px] leading-[26px] font-medium`}
                          type="text"
                          name="email"
                          placeholder="Email Address"
                          value={values.email}
                          onChange={handleChange}
                        />
                        <div className="flex items-center mb-[10px] ">
                          <p className="text-white italic text-[12px] leading-[26px] font-normal mr-[10px]">
                            {touched.email && errors.email}
                          </p>
                          {errors.email && <Image src={errorImg} alt="error" />}
                        </div>
                      </div>
                      <div className="w-full flex border-b-2 border-white hover:border-b-4 cursor-pointer">
                        <input
                          className={`${styles.contactInput} flex-1 text-[15px] leading-[26px] font-medium `}
                          type="text"
                          name="phone"
                          placeholder="Phone"
                          onChange={handleChange}
                          value={values.phone}
                        />
                        <div className="flex items-center mb-[10px] ">
                          <p className="text-white italic text-[12px] leading-[26px] font-normal mr-[10px]">
                            {touched.phone && errors.phone}
                          </p>
                          {errors.phone && <Image src={errorImg} alt="error" />}
                        </div>
                      </div>
                      <div className="w-full flex  border-b-2 border-white hover:border-b-4 cursor-pointer">
                        <textarea
                          className={`${styles.contactTextArea} flex-1 text-[15px] leading-[26px] font-medium`}
                          placeholder="Message"
                          name="message"
                          onChange={handleChange}
                          value={values.message}
                        />
                        <div className="flex items-center mb-[100px] ">
                          <p className="text-white italic text-[12px] leading-[26px] font-normal mr-[10px]">
                            {touched.message && errors.message}
                          </p>
                          {errors.message && (
                            <Image src={errorImg} alt="error" />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex justify-center md:justify-end mt-[40px] md:mt-[24px]">
                      <button type="submit" className={`${styles.contactBtn}`}>
                        Submit
                      </button>
                    </div>
                  </Form>
                </div>
              )}
            </Formik>
          </div>
        </div>
        <div className="hidden lg:block absolute top-[800px] z-[-1] right-0">
          <Image src={contactBg} alt="image" objectFit="contain" />
        </div>
      </div>
      <Location />
    </section>
  );
};

export default contact;
