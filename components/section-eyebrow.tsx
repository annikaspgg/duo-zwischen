type Props = { children: React.ReactNode };

export function SectionEyebrow({ children }: Props) {
  return (
    <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent)] font-medium mb-4">
      {children}
    </p>
  );
}
