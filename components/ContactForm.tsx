import React, { useState } from "react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      setIsSubmiting(true);
      //   alert(JSON.stringify(values, null, 2));
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          values,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
          setIsSubmiting(false);
          toast.success("Thank you for submitting !", {
            position: toast.POSITION.TOP_RIGHT,
          });
          resetForm();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <input
            type={"text"}
            className="flex-1 p-2 bg-gray-800 placeholder:text-gray-500 text-white focus:outline-none"
            placeholder="Name"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <input
            type={"text"}
            className="flex-1 p-2 bg-gray-800 placeholder:text-gray-500 text-white focus:outline-none"
            placeholder="Email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <input
          type={"text"}
          className="p-2 bg-gray-800 placeholder:text-gray-500 text-white focus:outline-none"
          placeholder="Subject"
          id="subject"
          name="subject"
          onChange={formik.handleChange}
          value={formik.values.subject}
        />
        <textarea
          className="p-2 bg-gray-800 placeholder:text-gray-500 text-white focus:outline-none"
          rows={3}
          placeholder="Message"
          id="message"
          name="message"
          onChange={formik.handleChange}
          value={formik.values.message}
        ></textarea>
        <motion.button
          type="submit"
          className="py-2 px-6 border border-solid border-[#1CF8A8] font-normal text-[#1CF8A8] rounded-sm shadow-lg relative z-10 flex-auto mt-3 relative"
          whileHover={{
            backgroundColor: "#1CF8A8",
            color: "#2b2b2b",
            transition: { duration: 1 },
          }}
        >
          {isSubmiting ? "Submiting" : "Send Message"}
        </motion.button>
        <ToastContainer />
      </div>
    </form>
  );
};

export default ContactForm;
