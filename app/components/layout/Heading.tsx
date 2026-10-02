type HeadingProps = {
    name: string;
}

export default function Heading({ name } : HeadingProps) {
  return (
    <div className="w-full h-fit border-b">
      <div className="innerContainer px-4">
        <h2 className="text1 font2 text-3xl">{name}</h2>
      </div>
    </div>
  );
}
