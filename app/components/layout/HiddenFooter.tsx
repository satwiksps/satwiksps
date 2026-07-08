import RotatingText from "../ui/RotatingText";

export default function HiddenFooter() {
  const texts2 = [
    "Culture eats strategy",
    "for breakfast;",
    "true innovation happens",
    "at the intersection",
    "of diverse minds",
    "working together",
    "towards a shared",
    "and unified vision."
  ];
  return (
    <div className="md:hidden">
      <div className="innerContainer flex items-center justify-center py-4">
        <RotatingText texts={texts2} align="center" />
      </div>
    </div>
  );
}
