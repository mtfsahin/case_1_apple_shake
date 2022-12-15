import React from 'react'
import { useDispatch } from 'react-redux'
import { fallOnFirst, fallOnSecond, fallOnThird, fallOnFourth, fallOff, shakeTreeOn, onVisible, offVisible } from './shakeSlice'
import CustomButton from '../../components/Button/Button'
export function ShakeButton() {

  const dispatch = useDispatch()
  //Butona basınca ilk olarak daha önce sepette elma varsa onları kalkar, ardından 3.5sn lik sepet dolma animasyonunu başlar,
  //1,2,3,4 numaralı animasyonların state değerleri timer dolunca true olur, en son tüm animasyonlar false a döner.
  //storeda tanımlamı
  const ShakeOnTrigger = () => {
    dispatch(offVisible());
    dispatch(shakeTreeOn());
    setTimeout(() => {
      dispatch(onVisible());
    }, 3500);
    setTimeout(() => {
      dispatch(fallOnFirst());
    }, 1000);
    setTimeout(() => {
      dispatch(fallOnSecond());
    }, 1400);
    setTimeout(() => {
      dispatch(fallOnThird());
    }, 2500);
    setTimeout(() => {
      dispatch(fallOnFourth());
    }, 2200);
    setTimeout(() => {
      dispatch(fallOff());
    }, 5000);
  }

  return (
    <div>
      <div style={{paddingLeft:'40%', paddingRight:'40%'}}>
        <CustomButton
          height="50px"
          onClick={ShakeOnTrigger}
        >
          Shake Tree
        </CustomButton>
      </div>
    </div>
  )
}