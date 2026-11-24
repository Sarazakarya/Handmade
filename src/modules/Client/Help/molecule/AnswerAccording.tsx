"use client";

import { CircleHelp } from "@/assets/icons/Icons";
import Text from "@/shared/components/atoms/Text";
import { HelpQuestionsData } from "../types/Helpdata";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  item: string;
}

const AnswerAccording = ({ item }: Props) => {
  const Data =
    item === "All Questions"
      ? HelpQuestionsData
      : HelpQuestionsData.filter((ele) => ele.category === item);

  return (
    <Accordion className="flex flex-col gap-3">
      {Data.map((ele, i) => (
        <AccordionItem
          key={ele.question}
          value={`question-${i}`}
          className="w-full min-w-0 rounded-3xl border bg-white px-4 sm:px-6"
        >
          <AccordionTrigger className="cursor-pointer gap-3 py-5 text-start hover:no-underline [&>svg]:size-5 [&>svg]:shrink-0">
            <div className="flex min-w-0 flex-1 items-center  gap-2">
              <CircleHelp className=" size-5 shrink-0" />

              <Text className=" font-heading min-w-0 flex-1 wrap-break-word">
                {ele.question}
              </Text>
            </div>
          </AccordionTrigger>

          <AccordionContent className="pb-5">
            <div className="flex min-w-0 flex-col gap-2">
              <hr className="cozy-bg-light-brown w-full" />

              <Text variant="gray" className="wrap-break-word">
                {ele.answer}
              </Text>

              <span className="w-fit max-w-full rounded-3xl cozy-bg-light-brown px-3  text-xs">
                {ele.category}
              </span>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AnswerAccording;
