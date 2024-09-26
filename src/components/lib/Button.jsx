// @ts-nocheck
import clsx from "clsx";
import { NavLink } from "react-router-dom";

export const Button = ({
  children,
  onClick,
  className,
  component = "button",
  variant,
  color,
  ...props
}) => {
  if (component === "NavLink") {
    return (
      <NavLink
        {...props}
        onClick={onClick}
        className={({ isActive }) =>
          clsx(
            className,
            "h-fit text-lg font-bold px-4 py-2 rounded-xl bg-primary border-transparent hover:shadow-stone-800 hover:shadow-md hover:bg-primary-foreground hover:border-transparent hover:text-primary",
            color === "secondary" &&
              "bg-secondary hover:bg-secondary-foreground",
            color === "primary" && "bg-primary hover:text-text-foreground",
            {
              "bg-primary-foreground border-transparent text-text-foreground":
                isActive,
              "": !isActive,
            }
          )
        }
      >
        {children}
      </NavLink>
    );
  }

  if (variant === "active") {
    return (
      <button
        {...props}
        onClick={onClick}
        className={({ isActive }) =>
          clsx(
            className,
            "h-fit text-lg font-semibold px-4 py-2 rounded-xl bg-primary border-transparent hover:shadow-stone-800 hover:shadow-md hover:bg-primary-foreground hover:border-transparent hover:text-text-foreground",
            color === "secondary" &&
              "bg-secondary hover:bg-secondary-foreground",
            color === "primary" && "bg-primary hover:bg-primary-foreground",
            {
              "bg-primary-foreground border-transparent": isActive,
              "": !isActive,
            }
          )
        }
      >
        {children}
      </button>
    );
  }
  return (
    <button
      {...props}
      onClick={onClick}
      className={clsx(
        className,
        "flex h-fit text-lg font-semibold px-4 py-2 rounded-xl bg-primary border-transparent hover:shadow-stone-800 hover:shadow-md hover:bg-primary-foreground hover:border-transparent hover:text-text-foreground",
        color === "secondary" && "bg-secondary hover:bg-secondary-foreground",
        color === "primary" && "bg-primary hover:bg-primary-foreground",
        color === "primary-foreground" &&
          "bg-primary-foreground hover:bg-primary"
      )}
    >
      {children}
    </button>
  );
};
