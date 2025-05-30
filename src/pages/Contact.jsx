import React, { useRef, useState } from "react";
import Alert from "../components/Alert";
import useAlert from '../Hook/useAlert'
import emailjs from "@emailjs/browser";
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = ({ target: { name, value } }) => {

 
    setForm({ ...form, [name]: value });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);


    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Allouche Mohamed Abderrahmane",
          from_email: form.email,
          to_email: "abdrahmane.all23@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
          
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };


  return (
    <section className="relative  flex lg:flex-row flex-col max-w-5xl mx-auto sm:p-16 pb-6 !pt-[126px] px-8 min-h-[calc(100vh-80px)]">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex p-6 rounded-xl bg-purple-600/20 backdrop-blur-md shadow-lg flex-col">
        <h1 className="sm:text-5xl text-3xl  font-semibold text- sm:leading-snug font-poppins">
          Get in Touch
        </h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="  w-full flex flex-col gap-7 mt-7"
        >
          <label className="font-semibold  text-">
            Name
            <input
              type="text"
              name="name"
              className="bg-purple-100 outline-purple-400    text-sm rounded-lg  block w-full p-2.5 mt-2.5 font-normal "
              placeholder="Name"
              required
              value={form.name}
              onChange={handleChange}
          
            />
          </label>

          <label className="font-semibold  text-">
            Email
            <input
              type="email"
              name="email"
              className="bg-purple-100  outline-purple-400   text-sm rounded-lg  block w-full p-2.5 mt-2.5 font-normal "
              placeholder="anything@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
          
            />
          </label>

          <label className="font-semibold text-">
            Your Message
            <textarea
              name="message"
              rows="4"
              className="block p-2.5 w-full bg-purple-100  outline-purple-400 text-sm  rounded-lg  mt-2.5 font-normal "
              placeholder="Write your thoughts here..."
              value={form.message}
              onChange={handleChange}
          
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="text- bg-gradient-to-br  from-purple-400 to-purple-500  cursor-pointer    font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  
  );
};

export default Contact;
