interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="font-heading italic text-2xl text-white tracking-tighter">
        webcat<span className="opacity-40">labs</span>
      </span>
    </div>
  );
}
