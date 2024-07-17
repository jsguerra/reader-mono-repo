import { useRef, useState } from "react";
import type { ChangeEvent, FormEvent, FC } from "react";
import Styles from "./BookForm.module.css";

interface AuthorType {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  slug: string;
  thumbnail: string | null;
}

interface TagType {
  id: number;
  name: string;
  slug: string;
}

type FormProps = {
  authors: AuthorType[];
  tags: TagType[];
  endPoint: string;
  method: string;
};

const BookForm: FC<FormProps> = ({ authors, endPoint, method, tags }) => {
  const [responseMessage, setResponseMessage] = useState("");
  const ref = useRef<HTMLFormElement>(null);
  const [selectedTags, setSelectedTags] = useState<number[]>([]);

  const handleCheckboxChange = (tagId: number) => {
    setSelectedTags((prevSelectedTags) => {
      if (prevSelectedTags.includes(tagId)) {
        return prevSelectedTags.filter((id) => id !== tagId);
      } else {
        return [...prevSelectedTags, tagId];
      }
    });
  };

  return (
    <div className={Styles["form-container"]}>
      <form ref={ref} className={Styles.form}>
        <input
          autoComplete="off"
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          required
        />
        <input
          autoComplete="off"
          type="text"
          id="slug"
          name="slug"
          placeholder="Slug"
          required
        />
        <input
          accept="image/png, image/jpeg"
          name="images"
          multiple
          type="file"
        />
        <input
          autoComplete="off"
          type="text"
          id="pages"
          name="pages"
          placeholder="Pages"
        />
        <select name="authorId" id="author-id">
          <option value="">--Please choose an author--</option>
          {authors &&
            authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
        </select>
        <label className={Styles.favorite} htmlFor="favorite">
          <input id="favorite" name="favorite" type="checkbox" />{" "}
          <span>Favorite</span>
        </label>
        {tags.length > 0 && (
          <div className={Styles.selection}>
            {tags.map((tag) => {
              return (
                <label className={Styles["check-box"]} key={tag.id}>
                  <input
                    name="tag"
                    type="checkbox"
                    value={tag.id}
                    checked={selectedTags.includes(tag.id)}
                    onChange={() => handleCheckboxChange(tag.id)}
                  />{" "}
                  <span>{tag.name}</span>
                </label>
              );
            })}
          </div>
        )}
        <button className={`btn`}>Submit</button>
        {responseMessage && <p>{responseMessage}</p>}
      </form>
    </div>
  );
};

export default BookForm;
