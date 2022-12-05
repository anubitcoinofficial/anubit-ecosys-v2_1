# Upgradeable ERC20 token (Anubit - ANB)
## Introduction
Anubit was created to be a fast, low cost alternative to traditional fiat. Our utility is geared to be the next financial utility token to be used globally by consumers and merchants alike.

The ERC20 contract consists of the following functions:
- Basic ERC20 token function including minting derived from **[ERC20Upgradeable contract](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts/token/ERC20/ERC20Upgradeable.sol)** 
- Maximum mint amounts of 100,000,000  
- Upgradable feature that utilize **[Initializable contract](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/tree/master/contracts/proxy/utils/Initializable.sol)** and **[UUPSUpgradeable contract](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/tree/master/contracts/proxy/utils/UUPSUpgradeable.sol)**


## Get started
The whole project directory can be break down into few major parts such as:
 |folder        | Description                                                                              
 |:------------:|:------------------------------------------------------------------------------------------
 | [`contracts`](contracts/)  |Folder that contains all contracts [revision(s)](#revision-update) that inherited from OpenZeppelin's templates
 | [`scripts`](scripts/)    |Script files written in JavaScript that normally used for deploying contracts to blockchain based on [configuration file settings](#configuration-file)
 | [`test`](test/)       |Test files written in JavaScript to test contracts locally before deployed to blockchain based on [test setup](#test-setup)  

#MainNet Token
## Address Information

https://testnet.bscscan.com/address/0x1d84850C9716c5130b114F0795A4552036b55Bd4#readProxyContract

Address: 0x1d84850C9716c5130b114F0795A4552036b55Bd4


## Router
0x4188efd5ac994ccad3e1ca13f24ed49a880db360 Pair
0xd99d1c33f9fc3444f8101754abc46c52416550d1 Router
