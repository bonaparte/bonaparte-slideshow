module.exports=function(){
  this.cacheable();
  return this.query.substr(1);
}