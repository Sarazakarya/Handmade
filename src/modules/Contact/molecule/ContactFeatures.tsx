import { features } from "../utlils/ContactData";

const ContactFeatures = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {features.map(({ Icon, title, text }) => (
        <div key={title} className="flex items-start gap-4">
          <Icon className="size-12 shrink-0 text-primary" strokeWidth={1.5} />
          <div>
            <h3 className="text-lg font-bold text-primary">{title}</h3>
            <p className="mt-1 text-base leading-7 text-muted-foreground">
              {text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactFeatures;
