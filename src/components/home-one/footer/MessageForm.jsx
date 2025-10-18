import ArrowRight3Img from "../../../assets/images/icon/arrow-right3.svg";
import { useForm } from "react-hook-form";
import Field from "../../common/Field";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function MessageForm() {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitForm = (formData) => {
    setIsLoading(true);

    emailjs
      .send(
        "service_dlc5qgh", // your EmailJS service ID
        "template_xycf1p5", // your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not Provided",
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "kr_ozqwi5oDLWJcJl" // your EmailJS public key
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            style: {
              borderRadius: "8px",
              background: "#333",
              color: "#fff",
              fontSize: "14px",
            },
            iconTheme: {
              primary: "#4ade80",
              secondary: "#fff",
            },
          });
          setIsLoading(false);
          reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error("Failed to send message. Please try again later.", {
            style: {
              borderRadius: "8px",
              background: "#333",
              color: "#fff",
              fontSize: "14px",
            },
            iconTheme: {
              primary: "#f87171",
              secondary: "#fff",
            },
          });
          setIsLoading(false);
        }
      );
  };

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit(submitForm)}>
        <div className="aximo-form-field">
          <Field error={errors.name}>
            <input
              {...register("name", { required: "Name is required." })}
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
            />
          </Field>
        </div>

        <div className="aximo-form-field">
          <Field error={errors.email}>
            <input
              {...register("email", { required: "Email is required." })}
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
            />
          </Field>
        </div>

        <div className="aximo-form-field">
          <Field error={errors.phone}>
            <input
              {...register("phone")}
              type="text"
              name="phone"
              id="phone"
              placeholder="+088-234-6849"
            />
          </Field>
        </div>

        <div className="aximo-form-field">
          <Field error={errors.message}>
            <textarea
              {...register("message", { required: "Message is required." })}
              name="message"
              id="message"
              placeholder="Write your message here..."
            ></textarea>
          </Field>
        </div>

        <button id="aximo-submit-btn" type="submit" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send message"}{" "}
          <span>
            <img src={ArrowRight3Img} alt="ArrowRight3Img" />
          </span>
        </button>
      </form>

      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2500,
          style: {
            background: "#1f2937",
            color: "#fff",
          },
        }}
      />
    </>
  );
}

export default MessageForm;
