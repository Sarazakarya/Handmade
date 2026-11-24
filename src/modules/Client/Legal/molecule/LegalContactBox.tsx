type Props = { rows: { label: string; value: string }[] };

const LegalContactBox = ({ rows }: Props) => (
  <div className="flex flex-col gap-2 rounded-2xl border cozy-bg-light-brown px-5 py-4 text-sm md:text-base">
    {rows.map((r) => (
      <p key={r.label}>
        <b className="font-semibold text-primary">{r.label}:</b>{" "}
        <span className="text-muted-foreground">{r.value}</span>
      </p>
    ))}
  </div>
);

export default LegalContactBox;
