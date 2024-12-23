"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import BreadCrumbNew from "../BreadCrumb/BreadCrumb";
import { GiEnergyArrow } from "react-icons/gi";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { FaCircleNotch } from "react-icons/fa6";

import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
} from "react-icons/ai";
import { send } from "@/utils/ContactMail";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Button, Form, Input, InputNumber, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useForm } from "antd/es/form/Form";
import { Country } from "country-state-city";

interface FormData {
  name: string;
  email: string;
  phone_code: string;
  phone_number: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  phone_code?: string;
  phone_number?: string;
  message?: string;
}

interface PhoneCode {
  name: string;
  code: string;
  flag: string; // assuming flag is a string (emoji or URL)
}

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone_code: "31",
    phone_number: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [phoneCodes, setPhoneCodes] = useState<PhoneCode[]>([]);
  const [form] = useForm();
  const allCountries = Country.getAllCountries().map((country) => ({
    value: country.phonecode,
    label: `${country.flag} +${country.phonecode}`,
    key: country.isoCode,
  }));
  form.setFieldValue("phone_code", formData.phone_code);

  // console.log(allCountries, "allCountries");

  const handleContactFormSubmit = async (values: any) => {
    // console.log(values, "values");
    setSubmitting(true);
    try {
      const result = await send({
        name: values.name,
        email: values.email,
        phoneCode: values.phone_code,
        phoneNumber: values.phone_number,
        message: values.message,
      });

      if (result) {
        toast("🥳⚡The message has been sent successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        form.resetFields();
      } else {
        toast.error("Failed to send email. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const prefixSelector = (
    <Form.Item name="phone_code" noStyle>
      <Select
        showSearch
        filterOption={(input, option) => {
          const optionValue = option?.value ? option.value.toString() : "";
          const optionLabel = option?.children
            ? option.children.toString()
            : "";
          return (
            optionLabel.toLowerCase().includes(input.toLowerCase()) ||
            optionValue.toLowerCase().includes(input.toLowerCase())
          );
        }}
        style={{ width: 110 }}
        placeholder="🇮🇳 +31"
      >
        {Country.getAllCountries().map((country) => (
          <Select.Option
            key={country.isoCode}
            label={`${country.isoCode} ${country.phonecode}`}
            value={country.phonecode}
          >
            {country.isoCode} {country.phonecode}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );

  return (
    <>
      <BreadCrumbNew
        title="Contact Us"
        page="contact us"
        image1="./contact1.jpg"
        version2={false}
      />

      <section className="relative z-10 overflow-hidden bg-white dark:bg-dark px-5 py-10 lg:p-20">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4 lg:justify-between">
            <div
              className="w-full px-4 lg:w-1/2 xl:w-6/12"
              // style={{
              //   backgroundImage:
              //     'url("https://img.freepik.com/free-photo/people-celebrating-world-population-day_23-2151493235.jpg?t=st=1730112694~exp=1730116294~hmac=a9e9ea4524ae2e24ce3b3eab7b72e8e15283e0c92c661e499d52e7d15ada5108&w=1060")',
              //   backgroundSize: "cover",
              //   backgroundPosition: "center",
              // }}
            >
              <div className="mb-12 max-w-[600px] lg:mb-0">
                <div className="flex gap-2 items-center">
                  <FaCircleNotch className="text-mainColor2 font-bold" />
                  <h3 className="font-bold text-mainColor2">Get in Touch</h3>
                </div>
                <h2 className="text-secondary font-title  text-[22px] font-bold uppercase sm:text-[40px] lg:text-[25px] xl:text-[35px]">
                  Let’s Discuss How We Can Support Your Success
                </h2>

                <p className="text-base leading-relaxed text-gray-700 dark:text-dark-6 mb-9">
                  Our team values every connection and looks forward to helping
                  you in any way we can. Reach out to us anytime, and let’s
                  start a conversation that matters!"
                </p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="flex items-start gap-4 p-6 rounded-lg bg-gradient-to-r from-mainColor2 to-[#e05600] shadow-md dark:bg-dark-4 w-full">
                    <LiaMapMarkedAltSolid
                      size={24}
                      className="text-mainbgColor"
                    />
                    <div>
                      <div className="flex gap-4 items-center">
                        <GiEnergyArrow
                          color="black"
                          className="transform -rotate-45"
                        />

                        <h3 className="font-bold text-white">
                          Netherlands Location
                        </h3>
                      </div>

                      <p className="text-white font-semibold dark:text-dark-6">
                        Binfinit Global Business Bv
                      </p>
                      <p className="text-white dark:text-dark-6">
                      Keizersgrscht B172, D 1016 EJ Amsterdam, Netherlands
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 rounded-lg bg-gradient-to-r from-mainColor2 to-[#e05600] shadow-md dark:bg-dark-4 w-full">
                    <LiaMapMarkedAltSolid
                      size={24}
                      className="text-mainbgColor"
                    />
                    <div>
                      <div className="flex gap-4 items-center">
                        <GiEnergyArrow
                          color="black"
                          className="transform -rotate-45"
                        />

                        <h3 className="font-bold text-white">Dubai Location</h3>
                      </div>
                      <p className="text-white font-semibold dark:text-dark-6">
                        Binfinit International FZE
                      </p>
                      <p className="text-white dark:text-dark-6">
                        P2, Hamriyah Free Zone
                        <br />
                        P.O BOX -5170, UAE
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 rounded-lg bg-gradient-to-r from-mainColor2 to-[#e05600] shadow-md dark:bg-dark-4 w-full">
                    <LiaMapMarkedAltSolid
                      size={24}
                      className="text-mainbgColor"
                    />
                    <div>
                      <div className="flex gap-4 items-center">
                        <GiEnergyArrow
                          color="black"
                          className="transform -rotate-45"
                        />

                        <h3 className="font-bold text-white">
                          Indonesia Location
                        </h3>
                      </div>

                      <p className="text-white font-semibold dark:text-dark-6">
                        PT. Binfinit Global Business
                      </p>
                      <p className="text-white dark:text-dark-6">
                        JLN. Tanah, Nomor 11F
                        <br />
                        DKI Jakarta-10610, Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-lg bg-gradient-to-r from-mainColor2 to-[#e05600] shadow-md dark:bg-dark-4 w-full">
                    <LiaMapMarkedAltSolid
                      size={24}
                      className="text-mainbgColor"
                    />
                    <div>
                      <div className="flex gap-4 items-center">
                        <GiEnergyArrow
                          color="black"
                          className="transform -rotate-45"
                        />

                        <h3 className="font-bold text-white">
                          Singapore Location
                        </h3>
                      </div>

                      <p className="text-white font-semibold dark:text-dark-6">
                        Binfinit Global Business Pte Ltd
                      </p>
                      <p className="text-white dark:text-dark-6">
                        21 Collyer Quay
                        <br />
                        Singapore, 049320
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-lg bg-gradient-to-r from-mainColor2 to-[#e05600] shadow-md dark:bg-dark-4 w-full">
                    <BsWhatsapp size={24} className="text-mainbgColor" />
                    <div>
                      <div className="flex gap-4 items-center">
                        <GiEnergyArrow
                          color="black"
                          className="transform -rotate-45"
                        />

                        <Link
                          href={"https://wa.me/6281110068051"}
                          className="font-bold text-white"
                        >
                          +62-811-1006-8051
                        </Link>
                      </div>
                      {/* <div className="flex gap-4 items-center">
                        <GiEnergyArrow
                          color="black"
                          className="transform -rotate-45"
                        />

                        <Link
                          href={"https://wa.me/6281119999764"}
                          className="font-bold text-white"
                        >
                          +62-811-1999-9764
                        </Link>
                      </div> */}
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-lg bg-gradient-to-r from-mainColor2 to-[#e05600] shadow-md dark:bg-dark-4 w-full">
                    <Mail size={24} className="text-mainbgColor" />
                    <div>
                      <div className="flex gap-4 items-center">
                        <GiEnergyArrow
                          color="black"
                          className="transform -rotate-45"
                        />

                        <Link
                          href={"mailto: info@binfinit.co"}
                          className="font-bold text-white"
                        >
                          info@binfinit.co
                        </Link>
                      </div>

                      <div className="flex gap-4 items-center">
                        <GiEnergyArrow
                          color="black"
                          className="transform -rotate-45"
                        />

                        <Link
                          href={"mailto: sales@binfinit.co"}
                          className="font-bold text-white"
                        >
                          sales@binfinit.co
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="relative p-3 bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-dark-2 sm:p-12">
                {/* <form onSubmit={handleContactFormSubmit}>
                  <div className="mb-6">
                    <label>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="border-gray-400 dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded-2xl border py-3 px-[14px] text-base outline-none mt-3"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div className="mb-6">
                    <label>Your Email</label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="border-gray-400 dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded-2xl border py-3 px-[14px] text-base outline-none mt-3"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="mb-3  w-full">
                    <div className="mb-3">
                      <label>Your Phone</label>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        name="phone_code"
                        value={formData.phone_code}
                        onChange={handleChange}
                        placeholder="+31"
                        className="w-[20%] border-gray-400 dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary rounded-2xl border py-3 px-[14px] text-base outline-none"
                      />
                      <input
                        type="number"
                        name="phone_number"
                        placeholder="210345657"
                        value={formData.phone_number}
                        onChange={handleChange}
                        className="dark:border-dark-3 border-gray-400 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded-2xl border py-3 px-[14px] text-base outline-none"
                      />
                    </div>
                  </div>
                  {errors.phone_code && (
                    <p className="text-red-500 text-sm ">{errors.phone_code}</p>
                  )}
                  {errors.phone_number && (
                    <p className="text-red-500 text-sm ">
                      {errors.phone_number}
                    </p>
                  )}
                  <div className="mb-6">
                    <label className="">Your Message</label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows={4}
                      className="border-gray-400 dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full resize-none rounded-2xl  border py-3 px-[14px] text-base outline-none mt-3"
                    ></textarea>

                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full text-white p-3 transition border shadow-lg rounded bg-gradient-to-r from-mainColor2 to-[#d55c00] hover:bg-opacity-90"
                    >
                      {submitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form> */}

                <Form
                  form={form}
                  name="contact"
                  size="large"
                  onFinish={handleContactFormSubmit}
                >
                  <Form.Item
                    name="name"
                    label="Your Name"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    rules={[
                      { required: true, message: "Please enter your name!" },
                    ]}
                  >
                    <Input placeholder="Your Name" className="rounded-md" />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    label="Your Email"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    rules={[
                      { required: true, message: "Please enter your Email!" },
                    ]}
                  >
                    <Input placeholder="Your Email" className="rounded-md" />
                  </Form.Item>

                  <Form.Item
                    name="phone_number"
                    label="Your Phone Number"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    rules={[
                      {
                        required: true,
                        message: "Please input your phone number!",
                      },
                    ]}
                  >
                    <InputNumber
                      addonBefore={prefixSelector}
                      style={{ width: "100%" }}
                      placeholder="Your Number"
                    />
                  </Form.Item>

                  <Form.Item
                    name="message"
                    label="Your Message"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                  >
                    <TextArea rows={4} style={{ width: "100%" }} />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      block
                      loading={submitting}
                      type="primary"
                      htmlType="submit"
                      className="rounded-md bg-gradient-to-r hover:bg-bgMain2 hover:text-black from-mainColor4 to-mainColor3 text-dark"
                    >
                      Send Message
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>

          {/* <div className="relative w-full h-0 pb-[36.25%] mb-6 overflow-hidden mt-5 border-none">
            <div className="absolute top-0 h-[60px] bg-white z-30  w-full border-none"></div>
            <iframe
              title="Custom Map"
              className="absolute top-0 left-0 w-full h-full border-none"
              src="https://www.google.com/maps/d/u/0/embed?mid=1ja1Hi2ATv-4HS47dIZxeI4CSd5UKmXw&ehbc=2E312F&noprof=1"
              frameBorder="0"
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default ContactUsPage;
