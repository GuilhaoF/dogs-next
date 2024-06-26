import { useFormState, useFormStatus } from "react-dom";
import ErrorMessage from "../../helpers/error-message";
import { SendIcon } from "lucide-react";
import { useEffect, useState } from "react";

import commentPost from "../../actions/comment-post";
import { CommentProps } from "../../types/commentType";

interface PhotoCommentsFormProps {
  single: boolean;
  id: number;
  setComments: React.Dispatch<React.SetStateAction<CommentProps[]>>;
}

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="border-none cursor-pointer text-gray-800 bg-transparent text-base p-0 px-4 overflow-hidden focus:outline-none hover:bg-transparent"
      disabled={pending}
    >
      <SendIcon className="bg-yellow-400" />
    </button>
  );
}

export default function PhotoCommentsForm({
  single,
  id,
  setComments,
}: PhotoCommentsFormProps) {
  const [comment, setComment] = useState("");
  const [state, action] = useFormState(commentPost, {
    ok: false,
    data: null,
    error: "",
  });
  useEffect(() => {
    if (state.ok && state.data) {
      setComments((comments) => [...comments, state.data] as CommentProps[]);
      setComment("");
    }
  }, [state, setComments]);

  return (
    <form
      action={action}
      className="grid grid-cols-[1fr_auto] items-stretch m-4"
    >
      <input type="hidden" name="id" id="id" value={id} />
      <textarea
        className="block w-full text-base font-sans resize-none border border-gray-200 p-2 rounded-sm bg-gray-200 transition duration-200 focus:outline-none focus:border-yellow-400 focus:bg-white focus:shadow focus:shadow-yellow-200/50 hover:border-yellow-400 hover:bg-white"
        name="comment"
        id="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      ></textarea>
      <FormButton />
      <ErrorMessage error={state.error} />
    </form>
  );
}
