import { useRef, useState } from "react";
import type { ChangeEvent, FormEvent, FC } from "react";
import Styles from "../Form.module.css";

interface FormProps {
  data?: {
    id: number;
    name: string;
    slug: string;
    thumbnail: string;
  };
  endPoint: string;
  method: string;
}

const AuthorForm: FC<FormProps> = ({ data, endPoint, method }) => {
  const [imagePreview, setImagePreview] = useState<
    string | ArrayBuffer | null | undefined
  >(undefined);
  const [thumbnail, setThumbnail] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const ref = useRef<HTMLFormElement>(null);

  const handleImageSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setThumbnail(files[0].name);
    }

    if (files && files.length > 0) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const image = e.target?.result;
        setImagePreview(image);
      };

      reader.readAsDataURL(files[0]);
    } else {
      // Handle the case where there are no files selected
      setImagePreview(undefined);
    }
  };

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("thumbnail", thumbnail);

    const response = await fetch(endPoint, {
      method: method,
      body: formData,
    });
    const data = await response.json();
    if (data.message) {
      ref.current?.reset();
      setImagePreview(undefined);
      setResponseMessage(data.message);
    }
  }

  return (
    <div className={Styles["form-container"]}>
      <form ref={ref} className={Styles.form} onSubmit={submit}>
        <label>
          Name
          <input
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
            autoComplete="off"
            type="text"
            id="slug"
            name="slug"
            required
            defaultValue={data?.slug}
          />
        </label>
        <label>
          Thumbnail
          <input
            type="file"
            id="fileUpload"
            name="fileUpload"
            onChange={handleImageSelect}
            defaultValue={data?.thumbnail}
          />
        </label>
        <button className={`btn`}>
          {data ? "Update Author" : "Add Author"}
        </button>
        {responseMessage && <p>{responseMessage}</p>}
      </form>
      {imagePreview ? (
        <img src={`${imagePreview}`} width="300" alt="" />
      ) : (
        <img src="/placeholder.jpg" width="300" alt="" />
      )}
    </div>
  );
};

export default AuthorForm;
