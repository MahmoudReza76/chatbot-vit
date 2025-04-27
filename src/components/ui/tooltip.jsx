import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import {cn} from "@/lib/utils";

export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipContent = ({className, ...props}) => (
  <TooltipPrimitive.Content
    className={cn(
      "bg-gray-800 text-white p-2 rounded-md text-xs z-50",
      className
    )}
    sideOffset={4}
    {...props}
  />
);
