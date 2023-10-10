
export const PriceFormat = ({price}) => {
  return (
    new Intl.NumberFormat("en-IN",{
        style:"currency",
        currency:"INR",
        maximumFractionDigits:2
    }).format(price)
  )
}
