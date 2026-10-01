type HeadingProps = {
    name: string;
}

export default function Heading({ name } : HeadingProps) {
  return (
    <div className="w-full h-fit border-b">
      <div className="innerContainer px-5 py-5 sm:px-8 sm:py-6">
        <h2 className="text1 font2 text-2xl sm:text-3xl tracking-tight leading-tight">{name}</h2>
      </div>
    </div>
  );
}
