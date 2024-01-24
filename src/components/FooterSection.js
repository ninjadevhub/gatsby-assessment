import React, { useState } from "react";
import logo from "../images/logoWhite.png";
import FloatingLabelInput from "./FloatingLabelInput";
import Button from "./Button";

const dropdownData = [
  { title: "Subject1", value: "subject1" },
  { title: "Subject2", value: "subject2" },
  { title: "Subject3", value: "subject3" },
  { title: "Subject4", value: "subject4" },
];

function FooterSection() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("Choose Subject");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: selectedSubject,
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!formData.fullName.trim()) {
      formErrors.fullName = "Full Name is required";
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      formErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = "Invalid phone number";
    }
    if (!formData.subject.trim() || formData.subject === "Choose Subject") {
      formErrors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      formErrors.message = "Message is required";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubjectClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
    setFormData({ ...formData, subject: subject });
    setIsDropdownOpen(false);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = () => {
    const isValid = validateForm();
    if (isValid) {
      // Your form submission logic here
      console.log("Form submitted with values:", formData);

      // Reset form state after successful submission
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: selectedSubject,
        message: "",
      });
      setSelectedSubject("Choose Subject");
      setIsDropdownOpen(false);
    }
  };

  return (
    <footer
      className="bg-[#02081A] text-white bg-none  font-body rounded-t-[40px] px-4 md:rounded-t-70px] mt-8 footerSection"
      id="footer-section"
    >
      <div className="flex max-w-[1296px] mp-8  pt-10 lg:py-[80px] justify-between mx-auto flex-col lg:flex-row">
        <div className="lg:w-[55%]">
          <p className="md:text-[56px] text-2xl leading-8 md:leading-[64px] font-medium ">
            Want to Learn More?
          </p>
          <p className="md:text-[20px] mt-3 text-sm leading-5 md:leading-[30px] font-normal ">
            We look forward to hearing from you.
          </p>
          <p className="md:text-[20px] text-sm leading-5 md:leading-[30px] font-normal ">
            Please use the form below or email us at
            <span className="text-brandBlue md:text-[20px] text-sm leading-5 md:leading-[30px] font-normal">
              {" "}
              info@rhoimpact.com
            </span>
          </p>
          <div className="md:mt-10 mt-3">
            <div className="md:flex gap-3 justify-between">
              <FloatingLabelInput
                label={"Full Name"}
                name={"fullName"}
                value={formData.fullName}
                onChange={handleInputChange}
                isError={errors.fullName}
                required
              />

              <FloatingLabelInput
                label={"Email"}
                name={"email"}
                value={formData.email}
                onChange={handleInputChange}
                isError={errors.email}
                required
              />
            </div>
            <div className="md:flex gap-3 justify-between">
              <FloatingLabelInput
                label={"Phone"}
                name={"phone"}
                value={formData.phone}
                onChange={handleInputChange}
                isError={errors.phone}
                required
              />

              <div className="relative w-full">
                <div className="flex flex-row justify-between items-center border-b-2 border-r-0 border-l-0 border-t-0  border-gray-600 focus:ring-0 outline-none ">
                  <input
                    className={`bg-transparent mt-[39px] w-full cursor-pointer border-none focus:ring-0 outline-none   placeholder:text-[#FFF] ${
                      errors.subject ? "border-red-500" : "border-gray-600 "
                    } `}
                    placeholder="Choose Subject"
                    onClick={handleSubjectClick}
                    value={selectedSubject}
                    readOnly
                  />
                  <div className=" mt-6  " onClick={handleSubjectClick}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="20"
                      viewBox="0 0 22 20"
                      fill="none"
                    >
                      <path
                        d="M15 9L11 13L7 9"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="square"
                      />
                    </svg>
                  </div>
                </div>
                {isDropdownOpen && (
                  <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded">
                    <ul>
                      {dropdownData.map((subject, index) => (
                        <li
                          key={index}
                          className="cursor-pointer py-2 px-4 hover:bg-gray-200 text-[#191A18]"
                          onClick={() => handleSubjectSelect(subject.value)}
                        >
                          {subject.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <FloatingLabelInput
              label={"Message"}
              name={"message"}
              value={formData.message}
              onChange={handleInputChange}
              isError={errors.message}
              required
            />

            <div className="my-[24px] flex flex-row items-center">
              <input
                type="checkbox"
                className="p-3 rounded-md mr-2 outline-none "
              />
              <p className="">
                I agree with the{" "}
                <span className="text-blue-500">Privacy Policy </span> of the
                website "Rho Impact"
              </p>
            </div>
            <Button onClick={() => {}}>Send Messages</Button>
          </div>
        </div>
        <div className="lg:w-[35%] my-[32px]  lg:mt-0   flex-col ">
          <div>
            <div className="flex  mt-[19px] lg:mt-0">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 23C6.45 23 5.979 22.804 5.587 22.412C5.195 22.02 4.99934 21.5493 5 21V3C5 2.45 5.196 1.979 5.588 1.587C5.98 1.195 6.45067 0.999335 7 1H17C17.55 1 18.021 1.196 18.413 1.588C18.805 1.98 19.0007 2.45067 19 3V21C19 21.55 18.804 22.021 18.412 22.413C18.02 22.805 17.5493 23.0007 17 23H7ZM7 18V21H17V18H7ZM12 20.5C12.2833 20.5 12.521 20.404 12.713 20.212C12.905 20.02 13.0007 19.7827 13 19.5C13 19.2167 12.904 18.979 12.712 18.787C12.52 18.595 12.2827 18.4993 12 18.5C11.7167 18.5 11.479 18.596 11.287 18.788C11.095 18.98 10.9993 19.2173 11 19.5C11 19.7833 11.096 20.021 11.288 20.213C11.48 20.405 11.7173 20.5007 12 20.5ZM7 16H17V6H7V16ZM7 4H17V3H7V4Z"
                    fill="#575F73"
                  />
                </svg>
              </span>
              <span>Phone:</span>
            </div>
            <p className="text-[22px]">1 (434) 207-2835</p>
          </div>
          <div className="my-7">
            <div className="flex">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM18.33 6L12 10.75L5.67 6H18.33ZM19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V7.25L11.4 12.8C11.5731 12.9298 11.7836 13 12 13C12.2164 13 12.4269 12.9298 12.6 12.8L20 7.25V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18Z"
                    fill="#575F73"
                  />
                </svg>
              </span>
              <span>Email</span>
            </div>
            <p className="">info@rhoimpact.com</p>
          </div>
          <div>
            <div className="flex">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 14C14.206 14 16 12.206 16 10C16 7.794 14.206 6 12 6C9.794 6 8 7.794 8 10C8 12.206 9.794 14 12 14ZM12 8C13.103 8 14 8.897 14 10C14 11.103 13.103 12 12 12C10.897 12 10 11.103 10 10C10 8.897 10.897 8 12 8Z"
                    fill="#575F73"
                  />
                  <path
                    d="M11.4201 21.814C11.5893 21.9349 11.7921 21.9998 12.0001 21.9998C12.2081 21.9998 12.4108 21.9349 12.5801 21.814C12.8841 21.599 20.0291 16.44 20.0001 10C20.0001 5.589 16.4111 2 12.0001 2C7.58909 2 4.00009 5.589 4.00009 9.995C3.97109 16.44 11.1161 21.599 11.4201 21.814ZM12.0001 4C15.3091 4 18.0001 6.691 18.0001 10.005C18.0211 14.443 13.6121 18.428 12.0001 19.735C10.3891 18.427 5.97909 14.441 6.00009 10C6.00009 6.691 8.69109 4 12.0001 4Z"
                    fill="#575F73"
                  />
                </svg>
              </span>
              <span>Address:</span>
            </div>
            <p>PO Box 7643, Charlottesville, VA 22906</p>
          </div>
          <div className=" mt-8 lg:mt-[80px]">
            <img src={logo} />
            <p>
              Rho Impact is built upon over a decade of solving real-world
              problems with data science, practitioner experience, and software
              engineering.
            </p>
            <p className="mt-10"> Copyright © 2023 Rho Impact.</p>
            <p className="text-xs text-[#575F73] mt-1">All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
