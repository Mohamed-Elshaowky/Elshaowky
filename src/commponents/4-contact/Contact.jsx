import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "/src/animation/done.json";
import contactAnimation from "/src/animation/contact.json";
import "./ContactCss.css";
const Contact = () => {
  const [state, handleSubmit] = useForm("meojyrpa");
  return (
    <section id="contact" className="contact flex">
      <div className="info flex">
        <div className="head flex">
          <h2 className="title">
            <span className="icon-email"></span>
            Contact Us
          </h2>
          <div className="subtitle">
            Contact us for more information and Get notified when I publish
            sonething new.
          </div>
        </div>
        <form onSubmit={handleSubmit} className="form flex">
          <div className="email flex">
            <label htmlFor="email">Email Address :</label>
            <input
              type="email"
              required
              placeholder="Email"
              id="email"
              name="email"
              autoComplete="off"
            ></input>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="textarea flex">
            <label htmlFor="message">Your Message :</label>
            <textarea
              required
              type="textarea"
              placeholder="Message"
              id="message"
              name="message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "submitting" : "send"}
          </button>

          {state.succeeded && (
            <p
              className="flex"
              style={{ marginTop: "1.5rem", fontSize: "1.5rem" }}
            >
              <Lottie
                style={{ height: 55 }}
                loop={false}
                animationData={doneAnimation}
              />
              Your Message has been sent successfully
            </p>
          )}
        </form>
      </div>
      <div className="anmiation">
        <Lottie style={{ height: 500 }} animationData={contactAnimation} />
      </div>
    </section>
  );
};

export default Contact;
