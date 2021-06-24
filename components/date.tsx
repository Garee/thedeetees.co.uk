import { parseISO, format } from "date-fns";

interface DateProps {
  dateString: string;
  fmt?: string;
}

export default function Date({ dateString, fmt }: DateProps): JSX.Element {
  // https://date-fns.org/docs
  fmt = fmt ?? "d LLLL, yyyy";
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, fmt)}</time>;
}
