import { useRef, useState } from "react";
import type { ChangeEvent, FormEvent, FC } from "react";

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

  return (
    <div className="">
      <form ref={ref}>
        <input
          autoComplete="off"
          type="text"
          id="title"
          name="title"
          placeholder="Book title"
          required
        />
        <input
          autoComplete="off"
          type="text"
          id="slug"
          name="slug"
          placeholder="Book slug"
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
        <label htmlFor="favorite">
          <input id="favorite" name="favorite" type="checkbox" />{" "}
          <span>Favorite</span>
        </label>
        <button className={`btn`}>Submit</button>
        {responseMessage && <p>{responseMessage}</p>}
      </form>
    </div>
  );
};

export default BookForm;
