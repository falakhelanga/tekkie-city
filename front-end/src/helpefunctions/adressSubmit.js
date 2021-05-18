import { useDispatch } from "react-redux";

const useAdressSubmit = (handleNext, adressActions) => {
  const dispatch = useDispatch();
  const adressHandleSubmit = (values) => {
    const {
      recipient_name,
      recipient_number,
      street_adress,
      complex,
      suburb,
      city,
      province,
      postal_code,
    } = values;

    dispatch(
      adressActions.addAdress({
        recipient_name,
        recipient_number,
        street_adress,
        complex,
        suburb,
        city,
        province,
        postal_code,
      })
    );
    handleNext();
  };
  return { adressHandleSubmit };
};

export default useAdressSubmit;
