Function.prototype.inherits = function(ob) {
  function Surrogate() {};
  Surrogate.prototype = ob.prototype;

  this.prototype = new Surrogate();
};