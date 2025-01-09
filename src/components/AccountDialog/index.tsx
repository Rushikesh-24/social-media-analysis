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
            <Select onValueChange={(value)=>{
                //localStorage.setItem('username', value);
                window.location.replace(`/test?username=${value}`);
                }}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose a Creator" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Creator</SelectLabel>
                        <SelectItem value="maisamayhoon">Samay Raina</SelectItem>
                        <SelectItem value="hiteshchoudharyofficial">Hitesh Choudhary</SelectItem>
                        <SelectItem value="rashmika_mandanna">Rashmika Mandanna</SelectItem>
                        <SelectItem value="ksi">KSI</SelectItem>
                        <SelectItem value="ishowspeed">IShowSpeed</SelectItem>
                        <SelectItem value="beerbiceps">Ranveer Allahbadia</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
  }
  
  export default AccountDialog