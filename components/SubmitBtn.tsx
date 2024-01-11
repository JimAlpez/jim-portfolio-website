import { useFormStatus } from "react-dom";

import { FaPaperPlane } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`group flex items-center justify-center gap-2 h-[3rem] w-fit px-6 bg-gray-900 rounded-full outline-none transition-all hover:bg-gray-950 focus:scale-110 hover:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 text-white ${
        pending && "text-opacity-50"
      }`}
      disabled={pending}>
      Submit
      {pending ? (
        // <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-double border-white"></div>
        <AiOutlineLoading3Quarters className="text-lg opacity-70 animate-spin" />
      ) : (
        <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
      )}
    </button>
  );
}
