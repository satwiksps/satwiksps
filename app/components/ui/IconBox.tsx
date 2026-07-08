export default function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex size-7 items-center justify-center rounded-lg border">
      <div className="flex size-5 items-center justify-center rounded-md border border-black bg3">
        {children}
      </div>
    </div>
  );
}