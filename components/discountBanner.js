import { X } from "lucide-react";

export default function DiscountBanner() {
  return (
    <div className="relative flex justify-center items-center gap-x-6 overflow-hidden bg-softBlack px-6 py-1 sm:px-2">
      <div className="flex flex-1 justify-center items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-white">
          Get 20% off your starter box now! Let's go!
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          Use code <strong className="font-semibold">FIRST_ORDER</strong>
        </p>
      </div>
      <div className="flex  justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only">Dismiss</span>
          <X className="h-5 w-5 text-white" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
