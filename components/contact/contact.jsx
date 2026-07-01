import '../../app/globals.css'
import Link from "next/link"


export const ContactLink = ({icon="", label="", value=""}) => {
    return <Link href="" className="bg-[var(--color-surface-page)] border-[0.5px] border-[var(--color-border-default)] rounded-xl px-5 py-[18px] flex items-center gap-3.5 no-underline text-inherit transition-colors duration-150">
            <div className="w-9 h-9 rounded-lg bg-[var(--color-error-bg)] flex items-center justify-center shrink-0 text-[17px]">{icon}</div>
            <div>
              <p className="text-[11px] text-[var(--color-gray-400)] mb-[3px]">{label}</p>
              <p className="text-[13px] font-medium text-[var(--color-text-base)]">{value}</p>
            </div>
          </Link>
}