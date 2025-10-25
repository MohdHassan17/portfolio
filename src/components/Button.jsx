"use client"


export default function Button({text, href, icon: Icon}) {
  return (
    <a href={href} className="rounded-lg bg-[#0f2819] text-[#22c55e] px-5 py-2 border flex items-center gap-2" >
        {Icon && <Icon size={20} />}
        <span>{text}</span>
    </a>
  )
}
