var SafeMath = artifacts.require("SafeMath")
var BnBFactory = artifacts.require("./bnbfactory.sol");

module.exports = function(deployer) {
  deployer.deploy(SafeMath);
  deployer.link(SafeMath, BnBFactory); 
  deployer.deploy(BnBFactory, "0x17FB959b5Da8D8998FAa5bce89911334b5B992a8", 1617455027)
};
