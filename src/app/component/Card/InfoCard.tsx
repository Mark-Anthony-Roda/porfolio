import { InforCardProps } from "@/app/interfaces"

export default function InfoCard(props: InforCardProps) {
  const {
    wrapperClassName,
    titleClassName,
    descriptionClassName,
    title = "<Info Card Title>",
    description = "<Info Card Description>",
  } = props

  return (
    <section className={wrapperClassName ?? ""}>
      <div className="container mx-auto">
        <h2 className={titleClassName}>{title}</h2>
        {typeof description === "string" ? (
          <p className={descriptionClassName}>{description}</p>
        ) : (
          <div>{description}</div>
        )}
      </div>
    </section>
  )
}
