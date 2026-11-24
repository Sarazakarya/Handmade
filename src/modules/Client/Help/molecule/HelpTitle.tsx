import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";

const HelpTitle = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-2">
      <Text variant="brand-pink">Help & Guidance</Text>
      <Title className="text-5xl font-heading">
        Frequently Asked <br /> Questions
      </Title>
      <Text variant="gray">
        Everything you need to know about our handcrafted crochet items,
        shipping schedules, custom <br/>commissions, and yarn care tips.
      </Text>
    </div>
  );
};

export default HelpTitle;
