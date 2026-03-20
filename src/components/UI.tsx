import { X } from 'lucide-react';

export const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const baseStyles = "px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 shadow-md active:shadow-sm";
  const variants: any = {
    // Dark bg, light text. Hover: lighter bg, dark text.
    primary: "bg-zinc-900 text-white border border-white/10 hover:bg-zinc-100 hover:text-zinc-900 hover:border-zinc-200",
    secondary: "bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-100 hover:text-black",
    ghost: "text-zinc-500 hover:text-black hover:bg-zinc-100 border border-transparent",
    indigo: "bg-indigo-600 text-white border border-indigo-500 hover:bg-indigo-100 hover:text-indigo-900 shadow-indigo-200/50",
    danger: "bg-red-600 text-white border border-red-500 hover:bg-red-100 hover:text-red-900 shadow-red-200/50",
  };
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export const Modal = ({ isOpen, onClose, title, children }: any) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-md rounded-[40px] p-10 shadow-2xl relative animate-in zoom-in-95 duration-200 border border-zinc-100">
        <button onClick={onClose} className="absolute top-8 right-8 text-zinc-400 hover:text-black transition-colors rounded-full p-2 h-10 w-10 flex items-center justify-center bg-zinc-50 hover:bg-zinc-100">
          <X className="w-5 h-5" />
        </button>
        <div className="mb-8">
           <h3 className="text-3xl font-black text-zinc-900 leading-tight tracking-tight">{title}</h3>
           <div className="h-1 w-12 bg-indigo-600 mt-4 rounded-full" />
        </div>
        {children}
      </div>
    </div>
  );
};
