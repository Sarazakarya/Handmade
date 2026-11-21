import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";

interface Props {
  title: string;
  text: string;
}

const CategoriesHeader = ({ title, text }: Props) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Text variant="brown" className="font-bold tracking-wider"> - {text} - </Text>
      <Title size="xl">{title}</Title>
    </div>
  );
};

export default CategoriesHeader;
