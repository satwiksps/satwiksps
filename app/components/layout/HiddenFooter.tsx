import RotatingText from "../ui/RotatingText";

export default function HiddenFooter() {
  const texts2 = [
    "Into you hands",
    "will be placed",
    "the exact results",
    "of your own thoughts;",
    "you will receive",
    "that which you earn",
    "no less",
    "no more.",
  ];
  return (
    <div className="md:hidden">
      <div className="innerContainer flex items-center justify-center py-4">
        <RotatingText texts={texts2} align="center" />
      </div>
    </div>
  );
}
