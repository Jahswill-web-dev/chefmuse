// components/typography/typography.tsx
import { cn } from "@/lib/utils";
import * as React from "react";

type TypographyProps = React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>;

export const TypographyH1 = ({ className, ...props }: TypographyProps) => (
  <h1
    className={cn(
      "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-quicksand",
      className
    )}
    {...props}
  />
);

export const TypographyH2 = ({ className, ...props }: TypographyProps) => (
  <h2
    className={cn(
      "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-quicksand",
      className
    )}
    {...props}
  />
);

export const TypographyH3 = ({ className, ...props }: TypographyProps) => (
  <h3
    className={cn("scroll-m-20 text-2xl font-semibold tracking-tight font-quicksand", className)}
    {...props}
  />
);

export const TypographyH4 = ({ className, ...props }: TypographyProps) => (
  <h4
    className={cn("scroll-m-20 text-xl font-semibold tracking-tight font-dm-sans", className)}
    {...props}
  />
);

export const TypographyP = ({ className, ...props }: TypographyProps) => (
  <p className={cn("leading-7 [&:not(:first-child)]:mt-2 font-dm-sans", className)} {...props} />
);

// export const TypographyBlockquote = ({ className, ...props }: TypographyProps) => (
//   <blockquote
//     className={cn("mt-6 border-l-2 pl-6 italic text-muted-foreground", className)}
//     {...props}
//   />
// );

// export const TypographyList = ({
//   className,
//   ...props
// }: TypographyProps & { children: React.ReactNode }) => (
//   <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)} {...props} />
// );
