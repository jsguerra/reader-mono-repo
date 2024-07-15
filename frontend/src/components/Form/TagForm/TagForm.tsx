import { useRef, useState } from "react";
import type { FormEvent, FC } from "react";
import Styles from "../Form.module.css";

interface FormProps {
  endPoint: string;
  method: string;
}

const TagForm: FC<FormProps> = ({ endPoint, method }) => {
  const [responseMessage, setResponseMessage] = useState("");
  const ref = useRef<HTMLFormElement>(null);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch(endPoint, {
      method: method,
      body: formData,
    });
    const data = await response.json();
    if (data.message) {
      ref.current?.reset();
      setResponseMessage(data.message);
    }
  }

  return (
    <form ref={ref} className={Styles.form} onSubmit={submit}>
      <label>
        Name
        <input type="text" id="name" name="name" required />
      </label>
      <label>
        Slug
        <input type="text" id="slug" name="slug" required />
      </label>
      <button className="btn">Send</button>
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
};

export default TagForm;
