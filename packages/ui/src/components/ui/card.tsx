import * as React from "react"

import { cn } from "../../lib/utils"
import { ChevronUpIcon, ChevronDownIcon } from "lucide-react"
import { Button } from "./button"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

const CardImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => (
  <img
    ref={ref}
    className={cn("w-full h-auto object-cover", className)}
    {...props}
  />
))
CardImage.displayName = "CardImage"

const ExpandableCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    imageUrl: string;
    title: string;
    description: string;
    children?: React.ReactNode;
  }
>(({ className, imageUrl, title, description, children, ...props }, ref) => {
  const [isExpanded, setIsExpanded] = React.useState(false)

  const transitionClass = "transition-all duration-600 ease-[cubic-bezier(0.4,0,0.2,1)]"

  return (
    <Card
      ref={ref}
      className={cn(
        transitionClass,
        "overflow-hidden",
        isExpanded ? "max-h-[1000px]" : "max-h-24",
        className
      )}
      {...props}
    >
      <div className="relative">
        <div className={cn(
          transitionClass,
          "flex",
          isExpanded ? "flex-col" : "h-24"
        )}>
          <CardImage
            src={imageUrl}
            alt={title}
            className={cn(
              transitionClass,
              isExpanded ? "w-full h-48" : "w-24 h-24 flex-shrink-0"
            )}
          />
          <div className="flex flex-col flex-1 min-w-0">
            <CardHeader className="flex flex-row items-center justify-between p-3 pb-1">
              <CardTitle className="text-lg truncate">{title}</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsExpanded(!isExpanded)}
                className={cn(
                  transitionClass,
                  isExpanded ? "relative" : "absolute top-3 right-3"
                )}
              >
                {isExpanded ? <ChevronUpIcon className="h-4 w-4" /> : <ChevronDownIcon className="h-4 w-4" />}
              </Button>
            </CardHeader>
            <CardDescription className="px-3 pb-1 text-sm truncate">{description}</CardDescription>
            <div className={cn(
              transitionClass,
              isExpanded ? "opacity-100 max-h-[1000px]" : "opacity-0 max-h-0"
            )}>
              <CardContent className="px-3 pt-1">{children}</CardContent>
              <CardFooter className="px-3 pt-1">
                {/* Add footer content here if needed */}
              </CardFooter>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
})
ExpandableCard.displayName = "ExpandableCard"

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardImage,
  ExpandableCard
}