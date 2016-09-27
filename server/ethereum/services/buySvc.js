'use strict';

let Web3 = require('web3');
let solc = require('solc');
let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
let fs = require('fs');

let buySvc = {
  buyTicket: (req, res) => {
    console.log('ADDRESS IS', req.body.contractAddress);
    var contractAddress = req.body.contractAddress; //address of deployed contract;
    var input = '';
    fs.readFile(__dirname + '/../contracts/Event.sol', 'utf-8', function(err, data) {
      if (err) throw err;
      const output = solc.compile(data, 1);
      for (let contractName in output.contracts) {
        // Deploy the contract asynchronous:
        const EventContract = web3.eth.contract(JSON.parse(output.contracts[contractName].interface));
        const eventContractInstance = EventContract.at(contractAddress);
        eventContractInstance.buyTicket({
          from: web3.eth.accounts[1],
          value: 10,
          gas: 200000
        }, function(err, result) {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        });

      }
      
    });
  }
}

module.exports = buySvc;