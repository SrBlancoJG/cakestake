var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var SafeMath = artifacts.require("SafeMath")
var BnBFactory = artifacts.require("./bnbfactory.sol");
var Address = artifacts.require("Address")
var BEP20 = artifacts.require("BEP20")
var CakeToken = artifacts.require("CakeToken")
var Context = artifacts.require("Context")
var IBEP20 = artifacts.require("IBEP20")
var Ownable = artifacts.require("Ownable")

module.exports = function(deployer) {
  deployer.deploy(SafeMath);
  deployer.link(SafeMath, BnBFactory); 
  deployer.deploy(BnBFactory, "0x17FB959b5Da8D8998FAa5bce89911334b5B992a8", 1617288513)
};
