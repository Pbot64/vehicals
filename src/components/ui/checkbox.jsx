import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef(({ className, ...props }, ref) =>
<CheckboxPrimitive.Root data-source-location="components/ui/checkbox:8:2" data-dynamic-content="true"
ref={ref}
className={cn(
  "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
  className
)}
{...props}>
    <CheckboxPrimitive.Indicator data-source-location="components/ui/checkbox:15:4" data-dynamic-content="false" className={cn("flex items-center justify-center text-current")}>
      <Check data-source-location="components/ui/checkbox:16:6" data-dynamic-content="false" className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };