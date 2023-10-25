const CURRENCY_FORMATTER=new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'USD',
});
export const dollarCurrency=(price:number):string=>{
  return CURRENCY_FORMATTER.format(price);
}
