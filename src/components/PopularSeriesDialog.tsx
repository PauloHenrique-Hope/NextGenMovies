import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Star } from "lucide-react";

interface PopularSeriesDialogProps {
  original_name: string;
  overview: string;
  vote_average: number;
  first_air_date: string;
  index: number;
}

export function PopularSeriesDialog({
  first_air_date,
  original_name,
  vote_average,
  overview,
  index,
}: PopularSeriesDialogProps) {
  return (
    <Dialog key={index}>
      <DialogTrigger className="text-gray-500 text-xl">Info</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{original_name}</DialogTitle>
          <DialogDescription>{overview}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col justify-center items-center">
          <span>{first_air_date}</span>
          <span>
            {vote_average}
            <Star color="black" size={24} fill="true" />
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
