function Ticket() {
  this.MAXIMUM_PRICE = 50
  this.price = (Math.random()*this.MAXIMUM_PRICE-1+1).toFixed(2)
}
