import Image from "next/image";
import { story } from "@/assets/images/Images";
import { RelatedBlog } from "../Types/Blog";

type AuthorBoxProps = {
  data: RelatedBlog;
};


const AuthorBox = ({data}:AuthorBoxProps) => {
  return (
    <div className="mt-8 flex flex-col items-start gap-5 rounded-3xl border border-[#ece3da] bg-[#fdfbf9] p-6 sm:flex-row sm:items-center sm:p-8">
      <div className="relative size-20 shrink-0 overflow-hidden rounded-2xl shadow-sm">
        <Image src={data.author.avatar || story} alt="Pooja Deshmukh" fill className="object-cover" />
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-lg font-bold text-[#7c3f1d]">{data.author.name}</h3>
          <span className="rounded-full bg-[#faecec] px-3 py-0.5 text-xs font-semibold text-[#d47a7a]">
            Author
          </span>
        </div>

        <p className="text-xs font-medium text-slate-500">
          {data.excerpt}
        </p>

        <p className="mt-1 text-sm leading-relaxed text-slate-600">
          {data.content}
        </p>
      </div>
    </div>
  );
};

export default AuthorBox;
