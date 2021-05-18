import { useState, useEffect } from "react";

const useSnackBar = (value) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (value) setOpen(true);
  }, [value]);

  return {
    setOpen,
    open,
  };
};

export default useSnackBar;
