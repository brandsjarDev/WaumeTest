import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function WarningDialog({ isOpen, setOpen, title, content }) {
  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      {/* <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger> */}
      <DialogContent className="w-full">
        <DialogHeader>
          <DialogTitle className="p-5 text-xl md:text-2xl">{title}</DialogTitle>
          <DialogDescription className="p-5">{content}</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button type="submit" onClick={() => setOpen(false)}>
            Next
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
