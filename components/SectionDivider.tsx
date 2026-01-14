export default function SectionDivider() {
  return (
    <div className="relative h-0 z-20">
      <div className="absolute left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent 0%, var(--ember-gold) 50%, transparent 100%)', boxShadow: '0 0 20px rgba(245,178,58,0.8)' }} />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rotate-45" style={{ background: 'var(--ember-gold)', boxShadow: '0 0 25px rgba(245,178,58,1)' }} />
    </div>
  );
}
