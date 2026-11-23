import { Container } from "@/shared/components/atoms/Container";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BlogItemHeaderProps } from "../Types/Blog";


const BlogItemHeader = ({ slug, links }: BlogItemHeaderProps) => {
  return (
    <div className="cozy-bg-light-brown py-4">
      <Container>
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm">
            {links.map((ele, i) => {

              return (
                <li key={i} className="flex items-center gap-2">
                  <Link
                    href={ele.href}
                    className="text-muted-foreground transition-colors duration-200 hover:cozy-text-primary"
                  >
                    {ele.page}
                  </Link>

                  <ChevronRight size={16} className="text-muted-foreground" />
                </li>
              );
            })}

            <li aria-current="page" className="font-heading cozy-text-primary">
              {slug}
            </li>
          </ol>
        </nav>
      </Container>
    </div>
  );
};

export default BlogItemHeader;
