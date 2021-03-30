var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var SafeMath = artifacts.require("SafeMath")
var BnBStake = artifacts.require("./bnbstake.sol");
var Address = artifacts.require("Address")
var BEP20 = artifacts.require("BEP20")
var CakeToken = artifacts.require("CakeToken")
var Context = artifacts.require("Context")
var IBEP20 = artifacts.require("IBEP20")
var Ownable = artifacts.require("Ownable")

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(SafeMath);
  deployer.link(SafeMath, BnBStake); 
  deployer.deploy(BnBStake, "0x17FB959b5Da8D8998FAa5bce89911334b5B992a8", 1616839148)
  //deployer.deploy(Context)
  //deployer.deploy(IBEP20)
  //deployer.deploy(Ownable)
  //deployer.deploy(Address)
  //deployer.link(Address, CakeToken)
  //deployer.link(SafeMath, CakeToken)
  //deployer.deploy(CakeToken)
  //deployer.deploy(BEP20)
};
