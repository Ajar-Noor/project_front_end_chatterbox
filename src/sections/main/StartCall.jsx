import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, Slide } from "@mui/material";
import { RxMagnifyingGlass } from "react-icons/rx";
import { CallElement } from "../../component/Settings/CallElement";
import { MembersList } from "../../AllResources/dashboard";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StartCall = ({ open, handleClose }) => {
  const [input, setInput] = useState("");
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="xs"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{ p: 4 }}
      >
        <DialogTitle className="font-semibold text-accent">Start Call</DialogTitle>

        <DialogContent sx={{ mt: 2 }}>
          {/* search bar */}
          <div className="items-center justify-items-center flex">
            <RxMagnifyingGlass
              size={24}
              className="text-[#709CE6] translate-x-[140%] "
            />
            <input
              type="text"
              value={input}
              placeholder="Search..."
              name="search"
              className="w-[90%] p-3 pl-14 pr-18 ml-[-8px] box-border placeholder:text-[#709CE6] rounded-[30px] bg-[#EAF2FE]"
            ></input>
          </div>

          {/* Call List */}
          {MembersList.map((el)=> <CallElement {...el}/>)}
          
        </DialogContent>
      </Dialog>
    </>
  );
};

export default StartCall;
