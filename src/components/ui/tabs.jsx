import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "flex flex-wrap md:flex-nowrap items-center justify-center gap-3 rounded-xl bg-[#f7f7ef] p-3 shadow-md border border-[#e0e0d1] text-[#5C7A4D]",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex items-center gap-2 px-6 py-3 text-base font-semibold rounded-lg transition-all border border-gray-300 bg-white shadow-sm text-[#5C7A4D] hover:bg-[#a99955] hover:text-white data-[state=active]:bg-[#a99955] data-[state=active]:text-white data-[state=active]:shadow-md",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-6 ring-offset-white text-lg text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5C7A4D] focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
