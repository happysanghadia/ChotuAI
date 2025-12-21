interface BadgeProps {
  name: string
  image?: string
  alt?: string
}

export default function Badge({ name, image, alt }: BadgeProps) {
  return (
    <div className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      {image ? (
        <img
          src={image}
          alt={alt || name}
          width={32}
          height={32}
          className="object-contain"
        />
      ) : (
        <div className="w-8 h-8 rounded bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/30">
          <span className="text-xs font-bold text-primary">{name.charAt(0)}</span>
        </div>
      )}
      <span className="text-sm font-medium text-gray-700">{name}</span>
    </div>
  )
}

