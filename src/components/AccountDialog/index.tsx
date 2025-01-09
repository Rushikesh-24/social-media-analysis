import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  function AccountDialog() {
    return (
        <Dialog>
        <DialogTrigger className="text-xl bg-black text-white rounded-xl p-4 mt-5 z-10">
           
            Connect your Social Account</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Choose an Account</DialogTitle>
            <DialogDescription>
              Choose an Account from the below options to get started.
            </DialogDescription>
            <Select>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose a Creator" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Creator</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
  }
  
  export default AccountDialog