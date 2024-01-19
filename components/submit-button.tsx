import { useFormStatus } from "react-dom";

import { FaPaperPlane } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`group transition-all bg-primary dark:bg-blue-50 text-blue-50 dark:text-primary font-medium px-6 py-3 rounded flex items-center gap-2 ${
        pending
          ? "text-opacity-50 bg-primary/70"
          : "hover:scale-110 hover:shadow-lg hover:text-blue-50 hover:bg-secondary"
      }`}>
      Submit
      {pending ? (
        <AiOutlineLoading3Quarters className="text-lg opacity-70 animate-spin" />
      ) : (
        <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
      )}
    </button>
  );
}
