import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import type { FeatureType } from "@/modules/Client/utills/feature";

export function FeatureItem({ icon: Icon, title, description }: FeatureType) {
  return (
    <div className="flex flex-col items-center gap-3 text-center sm:gap-4">
      <Icon
        className="size-9 shrink-0 text-foreground sm:size-10"
        strokeWidth={1.75}
      />

      <div className="flex max-w-xs flex-col items-center gap-1">
        <Title
          size="xl"
          variant="primary"
          className="text-base font-semibold sm:text-lg"
        >
          {title}
        </Title>
        <Text className="text-sm leading-6 text-muted-foreground sm:text-base">
          {description}
        </Text>
      </div>
    </div>
  );
}