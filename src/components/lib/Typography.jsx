// @ts-nocheck

import clsx from "clsx";

export const Typography = ({
  children,
  className,
  color,
  component,
  variant,
  ...props
}) => {
  // A versatile component for rendering different text styles
  // Supports various variants like h1, h2, title, subTitle, list, and default paragraph
  // Allows customization of color, component type, and additional classes

  // Render logic for each variant (h1, h2, title, subTitle, list)
  // ...

  // Default rendering for paragraph text
  const H1Component = component || "h1";
  if (variant === "h1") {
    return (
      <H1Component {...props} className={clsx(className, "text-xl font-bold ")}>
        {children}
      </H1Component>
    );
  }
  const H2Component = component || "h2";
  if (variant === "h2") {
    return (
      <H2Component
        {...props}
        className={clsx(className, "text-lg font-semibold ")}
      >
        {children}
      </H2Component>
    );
  }
  const TitleComponent = component || "h3";
  if (variant === "title") {
    return (
      <TitleComponent
        {...props}
        className={clsx(className, "text-2xl font-bold m-auto py-5 ")}
      >
        {children}
      </TitleComponent>
    );
  }
  const SubTitleComponent = component || "p";
  if (variant === "subTitle") {
    return (
      <SubTitleComponent
        {...props}
        className={clsx(className, "text-sm font-semibold italic flex")}
      >
        {children}
      </SubTitleComponent>
    );
  }
  if (variant === "list") {
    return (
      <ul
        {...props}
        className={clsx(
          className,
          " list-disc list-inside text-lg text-left justify-start"
        )}
      >
        {children}
      </ul>
    );
  }
  const ComonText = component || "p";
  return (
    <ComonText
      {...props}
      className={clsx(className, " font-normal gap-2 flex")}
    >
      {children}
    </ComonText>
  );
};
