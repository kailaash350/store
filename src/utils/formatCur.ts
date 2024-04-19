const CUR_FORMATTER = new Intl.NumberFormat(undefined,{
    currency:"AUD", style:'currency'
})

export function formatCurrency(number:number) {
    return CUR_FORMATTER.format(number);
}