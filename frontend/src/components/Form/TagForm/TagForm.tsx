import { useRef, useState } from "react";
import type { FormEvent, FC } from "react";
import Styles from "./TagForm.module.css";

interface FormProps {
  data?: {
    id: number;
    name: string;
    slug: string;
  };
  endPoint: string;
  method: string;
}

const TagForm: FC<FormProps> = ({ data, endPoint, method }) => {
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
        <input
          className={Styles.input}
          autoComplete="off"
          type="text"
          id="name"
          name="name"
          required
          defaultValue={data?.name}
        />
      </label>
      <label>
        Slug
        <input
          className={Styles.input}
          autoComplete="off"
          type="text"
          id="slug"
          name="slug"
          required
          defaultValue={data?.slug}
        />
      </label>
      <button className="btn">{data ? "Update Tag" : "Add Tag"}</button>
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
};

export default TagForm;
